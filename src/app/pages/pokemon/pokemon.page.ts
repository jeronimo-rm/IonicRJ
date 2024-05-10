import {
  Component,
  OnInit,
  ViewChild,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { Pokemon, PokemonList } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <img
          src="assets/img/Pokemon-Logo.png"
          alt="Pokemon"
          style="width: 120px; display: block; margin: 0 auto;"
        />
      </ion-toolbar>

      <!-- Metodo 1 para passar valor do search bar para a função search -->
      <!-- <ion-searchbar
        #searchBar
        animated="true"
        placeholder="search"
        (ionInput)="search(searchBar.value)"
      /> -->

      <!-- metodo 2 utilizando viewchield -->
      <ion-searchbar
        #searchBar
        animated="true"
        placeholder="search"
        (ionInput)="search2()"
      />
    </ion-header>

    <ion-content>
      <ion-list>
        @for (item of pokemonList(); track item.name) {
        <ion-item (click)="goToDetails(item)">
          <ion-label class="ion-text-center">
            {{ item.name | titlecase }}
          </ion-label>
        </ion-item>
        }
      </ion-list>
    </ion-content>
  `,
  styles: `

  // Ion-item {
  //   --background: var(--ion-color-test-contrast)
  // }

  Ion-item > Ion-label {
  }
  `,
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonLabel,
    IonItem,
    IonButtons,
    IonBackButton,
    IonSearchbar,
  ],
})
export class PokemonPage implements OnInit {
  // Syntax antiga do angular
  // @ViewChild(IonSearchbar, { static: false }) searchBar:
  //   | IonSearchbar
  //   | undefined;

  // Nova Syntax
  searchBar = viewChild<IonSearchbar>(IonSearchbar);

  list = signal<PokemonList>([]);
  pokemonList = signal<PokemonList>([]);

  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  ngOnInit() {
    this.getPokemonList();
  }

  async getPokemonList(offset?: number) {
    try {
      const { results, count } = await this.pokemonService.getPokemonList(
        offset
      );
      this.list.update((values) => [...values, ...results]);

      this.pokemonList.set(this.list());
    } catch (error) {
      console.log('error', error);
    }
  }

  goToDetails(pokemon: Pokemon) {
    /**
     * Exemplo de como enviar um objeto
     * para uma outra pagina
     */
    const navigationExtra: NavigationExtras = {
      state: pokemon,
    };

    return this.router.navigateByUrl(`/pokedetails`, navigationExtra);
  }

  search(text: string | null | undefined) {
    if (!text) {
      return this.pokemonList.set(this.list());
    } else {
      return this.pokemonList.update((items) => [
        ...items.filter((item) => item.name.includes(text)),
      ]);
    }
  }

  search2() {
    const text = this.searchBar()?.value;
    if (text) {
      return this.pokemonList.set(this.list());
    } else {
      return this.pokemonList.update((items) => [
        ...items.filter((item) => item.name.includes(text)),
      ]);
    }
  }
}
