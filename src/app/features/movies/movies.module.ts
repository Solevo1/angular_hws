import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ],
  providers: []
})
export class MoviesModule { }
