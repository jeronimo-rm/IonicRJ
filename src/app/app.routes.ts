import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test').then((m) => m.TestPage),
  },
  {
    path: 'expensive',
    loadComponent: () => import('./test/expensive').then((m) => m.ExpensivePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
