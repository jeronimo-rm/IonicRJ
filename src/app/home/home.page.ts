import { Component, OnInit, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonGrid,
} from '@ionic/angular/standalone';
import { ButtonComponent } from '../components/button/button.component';
import { Router } from '@angular/router';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-home',
  // templateUrl: 'home.page.html',
  template: `
    <ion-header>
      <ion-toolbar>
        <img src="/assets/img/foto-foot.png" alt="foot" />
        <ion-title>FuteNews</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-label>Latest News</ion-label>
      <!-- <ion-grid>
        <app-button
          [buttonTitle]="'Test'"
          [fill]="'outline'"
          [expand]="'block'"
          (clickEvent)="test($event)"
          [changeButtonBackgroundColor]="false"
        />

        <app-button
          [buttonTitle]="'Test 1'"
          [fill]="'clear'"
          [expand]="'full'"
          (clickEvent)="test1($event)"
        />

        <app-button
          [buttonTitle]="'Test 2'"
          [fill]="'clear'"
          [expand]="'full'"
          (clickEvent)="test1($event)"
          [changeButtonBackgroundColor]="true"
        />
      </ion-grid> -->

      <ion-list>
        @for (item of listChampionsShip(); track item.id) {
        <ion-item button (click)="goToChampionShip(item.campeonato_id)">
          <ion-label>{{ item.nome_popular }}</ion-label>
        </ion-item>
        }
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonInput,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ButtonComponent,
    IonToolbar,
    IonGrid,
  ],
})
export class HomePage implements OnInit {
  // objectTest = [
  //   { id: 0, value: '10 Jogadores Mais Caros 2024', page: 'expensive' },
  //   { id: 1, value: 'test 1', page: 'test' },
  // ];

  listChampionsShip = signal<any | undefined>(undefined);
  router = inject(Router);
  playersService = inject(PlayersService);
  constructor() {}

  ngOnInit(): void {
    this.getListChampionsShip();
  }

  async getListChampionsShip() {
    try {
      const listChampionsShip = await this.playersService.listChampionsShip();
      this.listChampionsShip.set(listChampionsShip);
    } catch (error) {
      console.log(`MSA 🔊 error:`, error);
    }
  }

  // goTo(page: string) {
  //   return this.router.navigateByUrl(page);
  // }

  goToChampionShip(championShipId: number) {
    return this.router.navigateByUrl(`expensive/${championShipId}`);
  }

  // expensive(event: boolean) {
  //   console.log(`expensive ${event}`);
  // }

  // test1(event: boolean) {
  //   console.log(`test 1 ${event}`);
  // }
}
