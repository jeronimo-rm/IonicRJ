import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { Details, Pokemon } from 'src/app/interfaces/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedetails',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>{{ pokemon()?.name | titlecase }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-img
        [src]="pokemonDetail()?.sprites?.other?.dream_world?.front_default"
      />
    </ion-content>
  `,
  styles: ``,
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonImg,
    IonButtons,
    IonBackButton,
    CommonModule,
    FormsModule,
    TitleCasePipe,
  ],
})
export class PokedetailsPage implements OnInit {
  pokemon = signal<Pokemon | undefined>(undefined);
  pokemonDetail = signal<Details | undefined>(undefined);

  private router = inject(Router);
  private pokemonService = inject(PokemonService);
  constructor() {
    /**
     * Como receber informação enviada de uma outra pagina
     * [exemplo de envio na pagina pokemon.page.ts]
     */
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (!state) {
      return;
    }
    this.pokemon.set(state as Pokemon);
  }

  ngOnInit() {
    if (this.pokemon()?.url) {
      this.getDetailPokemon();
    }
  }

  async getDetailPokemon() {
    try {
      const pokemonDetails = await this.pokemonService.getPokemonDetails(
        this.pokemon()!.url
      );
      this.pokemonDetail.set(pokemonDetails);
      console.log(`MSA 🔊 this.pokemonDetail:`, this.pokemonDetail());
    } catch (error) {
      console.log('error', error);
    }
  }
}
