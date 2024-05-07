import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonImg,
} from '@ionic/angular/standalone';
import { Component, OnInit, inject, input, signal } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ChampionShip, Player } from '../interfaces/player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-img [src]="championShip()?.logo" />
        </ion-card-header>
      </ion-card>
    </ion-content>
  `,
  styles: [``],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonImg,
  ],
})
export class TestPage implements OnInit {
  constructor() {}

  championShipID = input.required<number>({ alias: 'id' });
  championShip = signal<ChampionShip | undefined>(undefined);
  player = signal<Player | undefined>(undefined);

  playersService = inject(PlayersService);
  activeRoute = inject(ActivatedRoute);

  async getPlayer(playerID: number) {
    try {
      const player = await this.playersService.players(playerID);
      this.player.set(player);
    } catch (error) {
      console.log(`MSA 🔊 error:`, error);
    }
  }

  async getChampionShip() {
    try {
      const championShip = await this.playersService.championsShip(
        this.championShipID()
      );
      this.championShip.set(championShip);
    } catch (error) {
      console.log(`MSA 🔊 error:`, error);
    }
  }

  ngOnInit(): void {
    if (this.championShipID()) {
      this.getChampionShip();
    }
  }
}
