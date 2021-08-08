import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@NgModule({
  declarations: [
    UsersComponent,
    TableComponent,
  ],
  imports: [
    UsersRoutingModule,
  ],
  providers: []
})
export class UsersModule { }
