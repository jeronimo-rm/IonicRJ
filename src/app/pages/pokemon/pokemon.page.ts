import { Component, OnInit, inject, signal } from '@angular/core';
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
        <ion-title>Pokemon</ion-title>
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

  search(text: any) {
    console.log('text', text);
  }
}
