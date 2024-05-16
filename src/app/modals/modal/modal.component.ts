import { NgStyle } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
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

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
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
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonImg,
    IonModal,
    IonIcon,
    NgStyle,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalComponent implements OnInit {
  @Input() topic: any;

  modalCtrl = inject(ModalController);

  constructor() {}

  ngOnInit() {
    console.log('topic', this.topic);
  }
}
