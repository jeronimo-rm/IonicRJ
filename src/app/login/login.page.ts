import {
  Component,
  OnInit
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="login-box container">
      <form [formGroup]="loginForm" (ngSubmit)="login()">
        <ion-item class="user-box">
          <ion-text class="text-cl">Email:</ion-text>
          <ion-input
            class="input"
            type="email"
            name="email"
            formControlName="email"
          />
        </ion-item>

        @if(loginForm.controls.email.touched && loginForm.controls.email.invalid ) {
            @if(true) {
              <ion-text class="error" color="salmon-pink"> {{ 'This field is required' }} </ion-text>
            }
          }

        <ion-item class="user-box">
          <ion-text class="text-cl">Password:</ion-text>
          <ion-input
            class="input"
            type="password"
            name="password"
            formControlName="password"
          />
        </ion-item>

        <ion-button class="main-btn" type="submit" href="./home" [disabled]="loginForm.invalid" >
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </ion-button>
      </form>
    </ion-content>
  `,
  styles: [
    `
      body {
        font-family: sans-serif;
      }

      ion-content {
        --background: #243b55;
        ion-item {
          --background: #243b55;
        }

      form {
        display: grid;
        justify-content: center;
        margin-top: 30vh;
      }
      }

      .login-box {
        background: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
      }

      .user-box {
        z-index: 9999;
        position: relative;
        margin-bottom: 30px;
        font-weight: 500;
      }

      .text-cl {
        margin-right: 20px;
        color: #9c9ea1;
      }

      .login-box form .main-btn {
        --background: #243b55;
      }

      .login-box form a {
        position: relative;
        display: inline-block;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        letter-spacing: 4px;
        transition: all 0.3s ease;
        padding: 10px;
      }

      .login-box a span {
        position: absolute;
        display: block;
      }

      .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }

      @keyframes btn-anim1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes btn-anim2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }

      .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: 0.5s;
      }

      @keyframes btn-anim3 {
        0% {
          right: -100%;
        }
        50%,
        100% {
          right: 100%;
        }
      }

      .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: 0.75s;
      }

      @keyframes btn-anim4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    `,
  ],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonButton,
    IonText,
    ReactiveFormsModule,
    IonInput,
  ],
})
export class LoginPage implements OnInit {

  emailRegEx = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    console.log('t');
  }

  login() {
    console.log('form', this.loginForm);
  }
}