import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

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
  `,
  styles: [``],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
})
export class TestPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('TestPage');
  }
}
