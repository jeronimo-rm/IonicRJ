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

} from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

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
  @for (item of topics; track item.id){
    <ion-row>
      <ion-col size="12" size-md="6" size-lg="4" *ngFor="let topic of topics">
        <ion-card>
          <img [src]="topic.imageUrl" alt="Imagem do Tópico">
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
</ion-content>
  `,
  styles: [`
  ion-card-content {
    display: flex;
    align-items: center;
  }

  ion-card-content img {
    max-width: 100px;
    border-radius: 5px;
    margin-right: 20px;
  }
  `],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle],
})
export class ExpensivePage{
  topics = [
    {
      id: 1,
      imageUrl: 'assets/img/rodri-10.png',
      title: '10 - Rodri',
      description: 'Jogador do Manchester City 27(22/06/1996) Médio Defensivo',
    },

  ];

  constructor() {}
}


