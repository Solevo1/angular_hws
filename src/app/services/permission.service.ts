import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export enum Permission {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private readonly userPermissions$ = new BehaviorSubject<Permission[]>([
    Permission.ADMIN,
  ]);

  public getCurrentPermissions$() {
    return this.userPermissions$.asObservable();
  }
}
