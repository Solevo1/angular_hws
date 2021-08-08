import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getCurrentUser$(): Observable<User> {
    return of({
      id: 1,
      firstName: 'Dima',
      lastName: 'Riabov',
      gender: Gender.MALE
    });
  }
}
