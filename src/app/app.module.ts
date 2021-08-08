import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PermissionDirective } from './directives/permission.directive';
import { GenderPipe } from './pipe/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PermissionDirective,
    GenderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
