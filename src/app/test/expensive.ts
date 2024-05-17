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
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-expensive',
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Top 10 Mais Caros</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        @for (topic of topics; track topic.id){
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-card
              button
              id="{{ 'open-modal' + topic.id }}"
              (click)="openModal(topic)"
            >
              <img [src]="topic.imageUrl" alt="Imagem Jogadores" />
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

        <!-- <ion-modal
          #modal
          trigger="{{ 'open-modal' + topic.id }}"
          [breakpoints]="[0, 0.5, 0.9]"
          initialBreakpoint="0.9"
        >
          <ng-template>
            <ion-header>
              <ion-toolbar>
                <ion-icon
                  slot="start"
                  name="close"
                  (click)="modalCtrl.dismiss()"
                />
                <ion-title>{{ topic.title }} </ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              @switch (topic.id) { @case (1) {
              <swiper-container
                slides-per-view="1"
                speed="100"
                loop="false"
                css-mode="true"
                navigation="false"
                pagination="true"
              >
                <swiper-slide class="sld-pd">
                  <img class="crn-rdd" src="assets/slides/rodri-slide1.png" />
                  <ion-text>
                    Rodri começou a sua carreira profissional no
                    <a href="https://villarrealcf.es/"
                      >Villarreal Club de Fútbol</a
                    >, onde ficou 5 anos. Rodri fez sua estreia no time
                    principal em 17 de dezembro de 2015, começando com uma
                    vitória em casa por 2-0 contra o
                    <a href="https://www.sdhuesca.es/en">SD Huesca</a> para a
                    <a
                      style="color: rgb(255, 255, 204);!important"
                      href="https://www.laliga.com/en-GB/other-competitions/copa-del-rey"
                      >Copa del Rey</a
                    >
                    daquela temporada. Sua primeira aparição na La Liga foi em
                    17 de abril de 2016, quando entrou como substituto no
                    segundo tempo para Denis Suárez, na derrota fora de casa por
                    2-1 contra o
                    <a href="https://www.rayovallecano.es/">Rayo Vallecano</a>.
                  </ion-text>
                </swiper-slide>

                <swiper-slide class="sld-pd">
                  <img class="crn-rdd" src="assets/slides/rodri-slide2.png" />
                  <ion-text
                    >No dia 24 de maio de 2018, Rodri regressou ao
                    <a href="https://en.atleticodemadrid.com/"
                      >Atlético Madrid</a
                    >
                    depois de o clube ter chegado a acordo com o
                    <a href="https://villarrealcf.es/">Villarreal</a> para a sua
                    transferência. Ele assinou um contrato de cinco anos com o
                    clube, por uma taxa de cerca de 20 milhões de euros, mais 5
                    milhões de euros de objetivos. Ele fez sua estreia em 15 de
                    agosto na
                    <a
                      style="color: rgb(255, 255, 204);!important"
                      href="https://www.uefa.com/uefasupercup/history/2018/"
                      >SuperTaça Europeia de 2018</a
                    >, em Tallinn, jogando os primeiros 71 minutos de uma
                    vitória por 4-2 na prorrogação sobre o rival da cidade, o
                    <a href="https://www.realmadrid.com/es-ES">Real Madrid</a>.
                  </ion-text>
                </swiper-slide>

                <swiper-slide class="sld-pd">
                  <img class="crn-rdd" src="assets/slides/rodri-slide3.png" />
                  <ion-text
                    >Em 3 de julho de 2019, o
                    <a href="https://www.mancity.com/">Manchester City</a>
                    cumpriu os termos da cláusula de rescisão de £62,6 milhões
                    de Rodri(70M€), permitindo-lhe comprar o restante de seu
                    contrato com o
                    <a href="https://en.atleticodemadrid.com/"
                      >Atlético Madrid</a
                    >
                    e deixar o clube. A transferência foi uma nova taxa recorde.
                    Ele assinou um contrato de cinco anos. No dia 10 de junho,
                    ele marcou o único gol da final da
                    <a
                      style="color: rgb(255, 255, 204);!important"
                      href="https://www.uefa.com/uefachampionsleague/history/seasons/2023/"
                      >Liga dos Campeões</a
                    >
                    contra o
                    <a href="https://www.inter.it/en">Inter de Milão</a>,
                    garantindo a vitória do City pelo primeiro título da
                    competição e completando a tripla continental. Rodri foi
                    eleito o melhor em campo e eleito o
                    <a
                      href="https://www.mancity.com/news/mens/rodrigo-uefa-champions-league-player-of-the-year-63822101"
                      >Jogador da Temporada do torneio.</a
                    >
                  </ion-text>
                </swiper-slide>

                <swiper-slide class="sld-pd">
                  <img class="crn-rdd" src="assets/slides/rodri-slide4.png" />
                  <ion-text
                    >Depois de jogar pela
                    <a href="https://rfef.es/es">Espanha</a> nas categorias
                    sub-16, sub-19 e sub-21, Rodri foi convocado pela primeira
                    vez pela seleção completa em 16 de março de 2018 para dois
                    amistosos contra
                    <a href="https://www.dfb.de/en/en-start/">Alemanha</a> e
                    <a href="https://www.afa.com.ar/es/">Argentina</a> Rodri foi
                    incluído na seleção espanhola para a
                    <a
                      style="color: rgb(255, 255, 204);!important"
                      href="https://www.fifa.com/fifaplus/pt/tournaments/mens/worldcup/qatar2022"
                      >Copa do Mundo FIFA de 2022</a
                    >. Rodri foi titular na final da
                    <a
                      style="color: rgb(255, 255, 204);!important"
                      href="https://www.uefa.com/uefanationsleague/news/026e-1372acedf4a0-4cf2bf8d3c1b-1000--uefa-nations-league-roll-of-honour/"
                      >UEFA Nations League de 2023</a
                    >, frente à
                    <a href="https://hns.family/en/">Croácia</a> depois de um
                    empate sem gols, a Espanha venceu a partida nos pênaltis,
                    com Rodri convertendo o pênalti. Ele foi eleito o
                    <a
                      href="https://www.uefa.com/uefanationsleague/news/0282-1849de0ccdfe-e28eb8d71909-1000--rodri-named-2023-uefa-nations-league-player-of-the-finals/"
                      >melhor jogador do torneio</a
                    >.
                  </ion-text>
                </swiper-slide>
              </swiper-container>
              } @case (2) { slide 2 } }
            </ion-content>
          </ng-template>
        </ion-modal> -->
        }
      </ion-grid>
    </ion-content>
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
      .crn-rdd{
        padding: 10px;
        border-radius: 20px;
      }
      swiper-slide ion-text{
        line-height: 125%;
        padding: 0px 20px;
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
      }
      swiper-slide ion-text a{
        color: #FFFFFF;
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
    IonIcon,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpensivePage implements OnInit {
  topics = [
    {
      id: 1,
      imageUrl: 'assets/img/rodri-10.png',
      title: '10 - Rodri',
      marketvalue: '110,00 M €',
      description:
        'Rodrigo Hernández Cascante é jogador do Manchester City  27(22/06/1996) Médio Defensivo',
      icnflag: 'assets/icon/spain.png',
      slides: [
        {
          imagem: 'assets/slides/rodri-slide1.png',
          text: `Rodri começou a sua carreira profissional no
      <a href="https://villarrealcf.es/">Villarreal Club de Fútbol</a>, onde ficou 5 anos. Rodri fez sua
      estreia no time
      principal em 17 de dezembro de 2015, começando com uma
      vitória em casa por 2-0 contra o
      <a href="https://www.sdhuesca.es/en">SD Huesca</a> para a
      <a [ngStyle]="{'color: rgb(255, 255, 204) !important': true}"
        href="https://www.laliga.com/en-GB/other-competitions/copa-del-rey">Copa del Rey</a>
      daquela temporada. Sua primeira aparição na La Liga foi em
      17 de abril de 2016, quando entrou como substituto no
      segundo tempo para Denis Suárez, na derrota fora de casa por
      2-1 contra o
      <a href="https://www.rayovallecano.es/">Rayo Vallecano</a>.`,
        },
        {
          imagem: 'assets/slides/rodri-slide2.png',
          text: `No dia 24 de maio de 2018, Rodri regressou ao
          <a href="https://en.atleticodemadrid.com/"
            >Atlético Madrid</a
          >
          depois de o clube ter chegado a acordo com o
          <a href="https://villarrealcf.es/">Villarreal</a> para a sua
          transferência. Ele assinou um contrato de cinco anos com o
          clube, por uma taxa de cerca de 20 milhões de euros, mais 5
          milhões de euros de objetivos. Ele fez sua estreia em 15 de
          agosto na
          <a
            style="color: rgb(255, 255, 204);!important"
            href="https://www.uefa.com/uefasupercup/history/2018/"
            >SuperTaça Europeia de 2018</a
          >, em Tallinn, jogando os primeiros 71 minutos de uma
          vitória por 4-2 na prorrogação sobre o rival da cidade, o
          <a href="https://www.realmadrid.com/es-ES">Real Madrid</a>.`,
        },
      ],
    },
    {
      id: 2,
      imageUrl: 'assets/img/wirtz-9.png',
      title: '9 - Wirtz',
      marketvalue: '115,00 M €',
      description:
        'Florian Richard Wirtz é jogador do Bayern Leverkusen 21(03/05/2003) Médio Ofensivo',
      icnflag: 'assets/icon/germany.png',
      slides: [],
    },
    {
      id: 3,
      imageUrl: 'assets/img/kane-8.png',
      title: '8 - Kane',
      marketvalue: '118,00 M €',
      description:
        'Harry Edward Kane é jogador do Bayern Munique 21(28/07/1993) Ponta de Lança',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 4,
      imageUrl: 'assets/img/osimhen-7.png',
      title: '7 - Osimhen',
      marketvalue: '118,50 M €',
      description:
        'Victor James Osimhen é jogador do Napoles 25(29/12/1998) Ponta de Lança',
      icnflag: 'assets/icon/nigeria.png',
    },
    {
      id: 5,
      imageUrl: 'assets/img/foden-6.png',
      title: '6 - Foden',
      marketvalue: '130,00 M €',
      description:
        'Philip Walter Foden é jogador do Manchester City 23(28/05/2000) Extremo Direito',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 6,
      imageUrl: 'assets/img/saka-5.png',
      title: '5 - Saka',
      marketvalue: '135,00 M €',
      description:
        'Bukayo Ayoyinka Temidayo Saka é jogador do Arsenal FC 22(05/09/2001) Extremo Direito',
      icnflag: 'assets/icon/england.png',
    },
    {
      id: 7,
      imageUrl: 'assets/img/vini-4.png',
      title: '4 - Vini Jr',
      marketvalue: '150,00 M €',
      description:
        'Vinícius José Paixão de Oliveira Júnior é jogador do Real Madrid 23(12/07/2000) Extremo Esquerdo',
      icnflag: 'assets/icon/brazil.png',
    },
    {
      id: 8,
      imageUrl: 'assets/img/mbappe-3.png',
      title: '3 - Mbappé',
      marketvalue: '175,00 M €',
      description:
        'Kylian Mbappé Lottin é jogador do Paris Saint-Germain 25(20/12/1998) Ponta de Lança',
      icnflag: 'assets/icon/france.png',
    },
    {
      id: 9,
      imageUrl: 'assets/img/haaland-2.png',
      title: '2 - Haaland',
      marketvalue: '180,00 M €',
      description:
        'Erling Braut Haaland é jogador do Manchester City 23(21/07/2000) Ponta de Lança',
      icnflag: 'assets/icon/norway.png',
    },
    {
      id: 10,
      imageUrl: 'assets/img/bellingham-1.png',
      title: '1 - Bellingham',
      marketvalue: '185,00 M €',
      description:
        'Jude Victor William Bellingham é jogador do Real Madrid 20(29/06/2003) Médio Ofensivo',
      icnflag: 'assets/icon/england.png',
      imgpopup: 'assets/img/kane-8.png',
    },
  ];

  modalCtrl = inject(ModalController);

  ngOnInit() {
    console.log('ExpensivePage');
  }
  constructor() {
    addIcons({
      close,
    });
  }

  async openModal(topic: any) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { topic },
      breakpoints: [0, 0.5, 0.9],
      initialBreakpoint: 0.9,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(`MSA 🔊 data:`, data);

    if (role === 'confirm') {
    }
  }
}
