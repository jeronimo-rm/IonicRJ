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
  IonSearchbar,
} from '@ionic/angular/standalone';
import { Details, Pokemon } from 'src/app/interfaces/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

// Metodo para adicionar icons em componentes standalone
// Url dos icons do ionic https://ionic.io/ionicons?_gl=1*1207esh*_ga*MzE4MjkzODA1LjE2NDk0MTg3ODE.*_ga_REH9TJF6KF*MTY0OTQxODc4MC4xLjAuMTY0OTQxODc4MC4w
import { addIcons } from 'ionicons';
import {
  flame,
  water,
  leaf,
  bug,
  logoFirefox,
  aperture,
  skull,
} from 'ionicons/icons';

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
        <ion-row class="fnt-sz">
          <!-- nova syntax do angular  -->
          @for (item of pokemonDetail()?.types; track item.type.name) {

          <!-- nova syntax do angular  -->
          @switch (item.type.name) { @case ('flame') {
            <ion-icon class="icn1" name="flame" />
          } @case ('water') {
            <ion-icon class="icn2" name="water" />
          } @case ('grass') {
            <ion-icon class="icn3" name="leaf" />
          } @case ('bug') {
            <ion-icon class="icn4" name="bug" />
          } @case ('flying') {
            <ion-icon class="icn5" name="logo-firefox" />
          } @case ('normal') {
            <ion-icon class="icn6" name="aperture" />
          }@case ('poison') {
            <ion-icon class="icn7" name="skull" />
          } @default { } }

          <!-- <ion-icon class="icn1" name="flame"></ion-icon>
          <ion-icon class="icn2" name="water"></ion-icon>
          <ion-icon class="icn3" name="leaf"></ion-icon>
          <ion-icon class="icn4" name="bug"></ion-icon>
          <ion-icon class="icn5" name="logo-firefox"></ion-icon>
          <ion-icon class="icn6" name="aperture"></ion-icon>
          <ion-icon class="icn7" name="skull"></ion-icon>-->

          }
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
  styles: `
  @import url('https://fonts.cdnfonts.com/css/pokemon-solid');

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
      font-family: 'Pokemon Solid', sans-serif;
      color: yellow;
    text-shadow:
        -2px -2px 0 blue,
        2px -2px 0 blue,
        -2px  2px 0 blue,
        2px  2px 0 blue;
    }
    .fnt-sz{
      font-size: 30px;
    }
    .icn1 {
      color: #e28743;
    }
    .icn2 {
      color: #42A5F5;
    }
    .icn3 {
      color: #388E3C;
    }
    .icn4 {
      color: #D4E157;
    }
    .icn5 {
      color: #ECEFF1;
    }
    .icn6 {
      color: #9E9E9E;
    }
    .icn7 {
      color: #8E24AA;
    }
    ion-content{
      --background: url('/assets/img/poke-img.png') 18% center / cover no-repeat;
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
    IonSearchbar,
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
      flame,
      water,
      leaf,
      bug,
      logoFirefox,
      aperture,
      skull,
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
