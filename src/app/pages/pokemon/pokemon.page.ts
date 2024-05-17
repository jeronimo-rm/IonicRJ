import { Component, OnInit, inject, signal, viewChild } from '@angular/core';
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
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonFooter,
} from '@ionic/angular/standalone';
import { Pokemon, PokemonList } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NavigationExtras, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-pokemon',
  template: `
    <ion-header>
      <ion-toolbar>
        <img
          src="assets/img/pokelogo.png"
          alt="Pokemon"
          style="width: 160px; display: block; margin: 0 auto;"
        />
      </ion-toolbar>

      <ion-toolbar class="no-background">
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
      </ion-toolbar>
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

    <ion-footer>
      <ion-fab vertical="bottom" horizontal="start">
        <ion-fab-button color="tertiary" (click)="goBack()">
          <ion-icon name="chevron-back-outline" color="white" />
        </ion-fab-button>
      </ion-fab>
    </ion-footer>
  `,
  styles: `

      ion-toolbar {
        --background: url('/assets/img/poke-img.png') no-repeat center center fixed;
        background-size: cover;
      }

      ion-toolbar.no-background {
        padding-top:20px;
        --background: none;
      }

      ion-header {
        background: #1F2224;
      }

      ion-item {
        --background: #1F2224;
      }

      ion-fab > ion-fab-button > ion-icon {
        --color: var(--ion-color-danger) !important;
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
    IonIcon,
    IonFab,
    IonFabButton,
    IonImg,
    IonFooter,
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

  pokemonLogo = '../../../assets/img/pokemon-logo.png';

  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  constructor() {
    addIcons({
      chevronBackOutline,
    });
  }

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
      const list = this.list().filter((items) => items.name.includes(text));
      return this.pokemonList.set(list);
    }
  }

  search2() {
    const text = this.searchBar()?.value;

    if (!text) {
      return this.pokemonList.set(this.list());
    } else {
      const list = this.list().filter((items) => items.name.includes(text));
      return this.pokemonList.set(list);
    }
  }

  goBack() {
    return this.router.navigateByUrl('/home');
  }
}
