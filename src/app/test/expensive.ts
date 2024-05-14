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
  IonModal,
  IonIcon,
  ModalController,
} from '@ionic/angular/standalone';
import {
  Component,
  OnInit,
  inject
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  addIcons
} from 'ionicons';
import {
  close
} from 'ionicons/icons';

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
            <ion-card button id="open-modal">
              <img
                [src]="topic.imageUrl"
                alt="Imagem Jogadores"
              />
              <ion-card-header>
                <ion-card-title
                  >{{ topic.title }}
                  <img
                    style="width: 25px;"
                    [src]="topic.icnflag"
                    alt="Imagem Jogadores"
                /></ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <p>
                  <strong style="color: #FFFFFF;">{{
                    topic.marketvalue
                  }}</strong>
                  {{ topic.description }}
                </p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        }
      </ion-grid>
    </ion-content>


    <ion-modal #modal trigger="open-modal" [breakpoints]="[0, 0.5, 0.9]" initialBreakpoint="0.9">
      <ng-template>
        <ion-header>
          <ion-toolbar>
           <ion-icon slot="start" name="close" (click)="modalCtrl.dismiss()"/>
          </ion-toolbar>
        </ion-header>

        <ion-content>



        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  styles: `
      ion-content{
        --background: #222222;
      }
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
    IonModal,
    IonIcon
  ],
})
export class ExpensivePage implements OnInit {
  topics = [{
      id: 1,
      imageUrl: 'assets/img/rodri-10.png',
      title: '10 - Rodri',
      marketvalue: '110,00 M €',
      description: 'Rodrigo Hernández Cascante é jogador do Manchester City  27(22/06/1996) Médio Defensivo',
      icnflag: 'assets/icon/spain.png',
    },
    {
      id: 2,
      imageUrl: 'assets/img/wirtz-9.png',
      title: '9 - Wirtz',
      marketvalue: '115,00 M €',
      description: 'Florian Richard Wirtz é jogador do Bayern Leverkusen 21(03/05/2003) Médio Ofensivo',
      icnflag: 'assets/icon/germany.png',
    },
    {
      id: 3,
      imageUrl: 'assets/img/kane-8.png',
      title: '8 - Kane',
      marketvalue: '118,00 M €',
      description: 'Harry Edward Kane é jogador do Bayern Munique 21(28/07/1993) Ponta de Lança',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 4,
      imageUrl: 'assets/img/osimhen-7.png',
      title: '7 - Osimhen',
      marketvalue: '118,50 M €',
      description: 'Victor James Osimhen é jogador do Napoles 25(29/12/1998) Ponta de Lança',
      icnflag: 'assets/icon/nigeria.png',
    },
    {
      id: 5,
      imageUrl: 'assets/img/foden-6.png',
      title: '6 - Foden',
      marketvalue: '130,00 M €',
      description: 'Philip Walter Foden é jogador do Manchester City 23(28/05/2000) Extremo Direito',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 6,
      imageUrl: 'assets/img/saka-5.png',
      title: '5 - Saka',
      marketvalue: '135,00 M €',
      description: 'Bukayo Ayoyinka Temidayo Saka é jogador do Arsenal FC 22(05/09/2001) Extremo Direito',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 7,
      imageUrl: 'assets/img/vini-4.png',
      title: '4 - Vini Jr',
      marketvalue: '150,00 M €',
      description: 'Vinícius José Paixão de Oliveira Júnior é jogador do Real Madrid 23(12/07/2000) Extremo Esquerdo',
      icnflag: 'assets/icon/brazil.png',
    },
    {
      id: 8,
      imageUrl: 'assets/img/mbappe-3.png',
      title: '3 - Mbappé',
      marketvalue: '175,00 M €',
      description: 'Kylian Mbappé Lottin é jogador do Paris Saint-Germain 25(20/12/1998) Ponta de Lança',
      icnflag: 'assets/icon/france.png',
    },
    {
      id: 9,
      imageUrl: 'assets/img/haaland-2.png',
      title: '2 - Haaland',
      marketvalue: '180,00 M €',
      description: 'Erling Braut Haaland é jogador do Manchester City 23(21/07/2000) Ponta de Lança',
      icnflag: 'assets/icon/norway.png',
    },
    {
      id: 10,
      imageUrl: 'assets/img/bellingham-1.png',
      title: '1 - Bellingham',
      marketvalue: '185,00 M €',
      description: 'Jude Victor William Bellingham é jogador do Real Madrid 20(29/06/2003) Médio Ofensivo',
      icnflag: 'assets/icon/england.png',
      imgpopup: 'assets/img/kane-8.png',
    },
  ];

  modalCtrl = inject(ModalController);

  ngOnInit() {
    console.log('ExpensivePage');
  }
  constructor(
    private sanitizer: DomSanitizer,
  ) {
    addIcons({
      close
    });
  }



}