import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonImg,
} from '@ionic/angular/standalone';
import { Component, OnInit, inject, input, signal } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ChampionShip, Player } from '../interfaces/player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expensive',
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>10 Jogadores Mais Caros 2024</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        @for (topic of topics; track topic.id){
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-card>
              <img [src]="topic.imageUrl" alt="Imagem do Tópico" />
              <ion-card-header>
                <ion-card-title>{{ topic.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ topic.description }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        }
      </ion-grid>

      <ion-card>
        <ion-card-header>
          <ion-img [src]="championShip()?.logo" />
        </ion-card-header>
      </ion-card>
    </ion-content>
  `,
  styles: [
    `
      ion-card-content {
        display: flex;
        align-items: center;
      }

      ion-card-content img {
        max-width: 100px;
        border-radius: 5px;
        margin-right: 20px;
      }
    `,
  ],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonImg,
  ],
})
export class ExpensivePage implements OnInit {
  topics = [
    {
      id: 564,
      imageUrl: 'assets/img/rodri-10.png',
      title: '10 - Rodri',
      description: 'Jogador do Manchester City 27(22/06/1996) Médio Defensivo',
    },
  ];

  championShipID = input.required<number>({ alias: 'id' });
  championShip = signal<ChampionShip | undefined>(undefined);
  player = signal<Player | undefined>(undefined);

  playersService = inject(PlayersService);
  activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    if (this.championShipID()) {
      this.getChampionShip();
    }
  }

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
}
