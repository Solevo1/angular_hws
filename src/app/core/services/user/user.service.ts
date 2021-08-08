import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
}

@Injectable()
export class UserService {
  public getMovies$(): Observable<User[]> {
    return of([
      {
        id: 1,
        firstName: 'Dima',
        lastName: 'Riabov',
        gender: Gender.MALE,
      },
      {
        id: 2,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        gender: Gender.MALE,
      }
    ]);
  }
}
