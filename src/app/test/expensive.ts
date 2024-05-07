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
        @for (topic of topics; track topic.id){
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-card>
              <img [src]="topic.imageUrl" alt="Imagem Jogadores" />
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
      id: 1,
      imageUrl: 'assets/img/rodri-10.png',
      title: '10 - Rodri',
      description: 'Rodrigo Hernández Cascante é jogador do Manchester City 27(22/06/1996) Médio Defensivo',
    },
    {
      id: 2,
      imageUrl: 'assets/img/wirtz-9.png',
      title: '9 - Wirtz',
      description: 'Florian Richard Wirtz é jogador do Bayern Leverkusen 21(03/05/2003) Médio Ofensivo',
    },
    {
      id: 3,
      imageUrl: 'assets/img/kane-8.png',
      title: '8 - Kane',
      description: 'Harry Edward Kane é jogador do Bayern Munique 21(28/07/1993) Ponta de Lança',
    },
    {
      id: 4,
      imageUrl: 'assets/img/osimhen-7.png',
      title: '7 - Osimhen',
      description: 'Victor James Osimhen é jogador do Napoles 25(29/12/1998) Ponta de Lança',
    },
    {
      id: 5,
      imageUrl: 'assets/img/foden-6.png',
      title: '6 - Foden',
      description: 'Philip Walter Foden é jogador do Manchester City 23(28/05/2000) Extremo Direito',
    },
    {
      id: 6,
      imageUrl: 'assets/img/saka-5.png',
      title: '5 - Saka',
      description: 'Bukayo Ayoyinka Temidayo Saka é jogador do Arsenal FC 22(05/09/2001) Extremo Direito',
    },
    {
      id: 7,
      imageUrl: 'assets/img/vini-4.png',
      title: '4 - Vini Jr',
      description: 'Vinícius José Paixão de Oliveira Júnior é jogador do Real Madrid 23(12/07/2000) Extremo Esquerdo',
    },
    {
      id: 8,
      imageUrl: 'assets/img/mbappe-3.png',
      title: '3 - Mbappé',
      description: 'Kylian Mbappé Lottin é jogador do Paris Saint-Germain 25(20/12/1998) Ponta de Lança',
    },
    {
      id: 9,
      imageUrl: 'assets/img/haaland-2.png',
      title: '2 - Haaland',
      description: 'Erling Braut Haaland é jogador do Manchester City 23(21/07/2000) Ponta de Lança',
    },
    {
      id: 10,
      imageUrl: 'assets/img/bellingham-1.png',
      title: '1 - Bellingham',
      description: 'Jude Victor William Bellingham é jogador do Real Madrid 20(29/06/2003) Médio Ofensivo',
    },
  ];

  ngOnInit() {
    console.log('ExpensivePage');
  }
  constructor() {}

}
