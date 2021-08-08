import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@NgModule({
  declarations: [
    MoviesComponent,
    TableComponent,
  ],
  imports: [
    MoviesRoutingModule,
  ],
  providers: []
})
export class MoviesModule { }
