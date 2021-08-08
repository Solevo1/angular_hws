import { Component } from '@angular/core';
import { Permission } from './services/permission.service';

@Component({
  selector: 'lab-js-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public permission = Permission
}
