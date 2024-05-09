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
  IonLabel,
  IonRow,
  IonGrid,
  IonIcon,
} from '@ionic/angular/standalone';
import { Details, Pokemon } from 'src/app/interfaces/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

// Metodo para adicionar icons em componentes standalone
// Url dos icons do ionic https://ionic.io/ionicons?_gl=1*1207esh*_ga*MzE4MjkzODA1LjE2NDk0MTg3ODE.*_ga_REH9TJF6KF*MTY0OTQxODc4MC4xLjAuMTY0OTQxODc4MC4w
import { addIcons } from 'ionicons';
import { airplaneOutline, alarmOutline, airplane } from 'ionicons/icons';

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
      <ion-grid>
        <ion-img
          [src]="pokemonDetail()?.sprites?.other?.dream_world?.front_default"
        />

        <ion-row>
          <ion-label class="pokename">
            {{ pokemon()?.name | titlecase }}
          </ion-label>
        </ion-row>

        <ion-icon name="airplane-outline" color="primary" />
        <ion-icon name="alarm-outline" />
        <ion-icon name="airplane" class="icon--test" />
      </ion-grid>
    </ion-content>
  `,
  styles: `

  Ion-grid {
    display:grid;
    gap:10;
    padding-left: 24px;
    padding-right:24px;
  }

    Ion-row {
      display: flex;
      justify-content:center;
    }
    .pokename{
      font-size: 60px;
      text-align: center;
      font-weight: bolder;
    }

    Ion-icon {
      color: var(--ion-color-danger);
      font-size: 44px;
    }

    .icon--test {
      color: green;
      font-size:70px;
    }

  `,
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
    IonLabel,
    IonRow,
    IonGrid,
    IonIcon,
  ],
})
export class PokedetailsPage implements OnInit {
  pokemon = signal<Pokemon | undefined>(undefined);
  pokemonDetail = signal<Details | undefined>(undefined);

  private router = inject(Router);
  private pokemonService = inject(PokemonService);
  constructor() {
    // Necessário para se
    // conseguir ver os icons nos componentes standalone
    addIcons({
      airplaneOutline,
      alarmOutline,
      airplane,
    });

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
