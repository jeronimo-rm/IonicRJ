import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-home',
  // templateUrl: 'home.page.html',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
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
        @for (item of objectTest; track item.id) {
        <ion-item button (click)="goTo(item.page)">
          <ion-label> {{ item.value }}</ion-label>
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
export class HomePage {
  objectTest = [
    { id: 0, value: 'test', page: 'test' },
    { id: 1, value: 'test 1', page: 'test' },
  ];

  router = inject(Router);

  constructor() {}

  goTo(page: string) {
    return this.router.navigateByUrl(page);
  }

  test(event: boolean) {
    console.log(`test ${event}`);
  }

  test1(event: boolean) {
    console.log(`test 1 ${event}`);
  }
}
