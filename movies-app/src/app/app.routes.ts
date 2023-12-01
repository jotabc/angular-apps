import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Movies',
    loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent)
  }
];
