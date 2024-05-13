import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'test/:id',
    loadComponent: () => import('./test/test').then((m) => m.TestPage),
  },
  {
    path: 'expensive',
    loadComponent: () =>
      import('./test/expensive').then((m) => m.ExpensivePage),
  },
  {
    path: 'pokemon',
    loadComponent: () =>
      import('./pages/pokemon/pokemon.page').then((m) => m.PokemonPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pokedetails',
    loadComponent: () =>
      import('./pages/pokedetails/pokedetails.page').then(
        (m) => m.PokedetailsPage
      ),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'test-css',
    loadComponent: () => import('./test-css/test-css.page').then( m => m.TestCssPage)
  },




];
