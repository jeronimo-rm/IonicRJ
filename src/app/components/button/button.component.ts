import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <ion-button
      [ngClass]="{ background: changeButtonBackgroundColor() }"
      (click)="onClick()"
      [expand]="expand()"
      [fill]="fill()"
      [shape]="shape()"
    >
      {{ buttonTitle() | titlecase }}
    </ion-button>
  `,
  styles: [
    `
      Ion-button {
        color: red;
        --background: white;
      }

      .background {
        --background: grey;
      }
    `,
  ],
  imports: [IonButton, TitleCasePipe, NgClass],
})
export class ButtonComponent {
  buttonTitle = input.required<string>();
  expand = input<string>();
  fill = input<string>();
  shape = input<string>();

  changeButtonBackgroundColor = input<boolean>(false);

  clickEvent = output<boolean>();

  constructor() {}

  onClick() {
    return this.clickEvent.emit(true);
  }
}
