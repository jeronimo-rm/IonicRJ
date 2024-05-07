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
} from '@ionic/angular/standalone';
import { PokemonList } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  // templateUrl: './pokemon.page.html',
  // styleUrls: ['./pokemon.page.scss'],
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
        <ion-item>
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
    --color: var(--ion-color-test);
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
  ],
})
export class PokemonPage implements OnInit {
  list = signal<PokemonList>([]);
  pokemonList = signal<PokemonList>([]);
  private pokemonService = inject(PokemonService);
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
}
