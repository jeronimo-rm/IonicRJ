import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptor/interceptor';

// register Swiper custom elements para que se consiga utilizar o swipper js
import { register } from 'swiper/element/bundle';
register();

// registar o locate pt para se conseguir ter o projeto com a linguagem pretendida
// exemplo pode-mos usar o date com o formato Português
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt-PT';
registerLocaleData(localePT, 'pt');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Necessário para se conseguir usar httpClient do angular
    provideHttpClient(withInterceptors([authInterceptor])),
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
  ],
});
