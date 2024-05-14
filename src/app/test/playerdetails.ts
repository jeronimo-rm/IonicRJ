import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonButton,
  IonModal,
  IonList,
  IonImg,
  IonAvatar,
  IonLabel,
} from '@ionic/angular/standalone';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-expensive',
  standalone: true,
  template: `
    <ion-header>
        <ion-toolbar>
          <ion-title>App</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-button id="open-modal" expand="block">Open Card Modal</ion-button>

      </ion-content>
  `,
  styles: `

    `,

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonButton,
    IonModal,
    IonList,
    IonImg,
    IonAvatar,
    IonLabel,
  ],
})
export class PlyerDetailsPage implements OnInit {
  ngOnInit() {
    console.log('PlayerDetailsPage');
  }
  constructor() {}
}