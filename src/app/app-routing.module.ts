import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(({UsersModule}) => UsersModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.module').then(({MoviesModule}) => MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
