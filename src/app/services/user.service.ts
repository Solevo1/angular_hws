import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Store } from './store';
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
export class UserService extends Store<User> {
  public constructor() {
    super();
    this.fetchUsers$().subscribe(users => {
      this.setState({entities: this.transformArray(users, 'id')});
    });
  }

  public getUsers$(): Observable<User[]> {
    return this.getState$()
      .pipe(
        map(({entities}) => Object.values(entities)),
      )
  }

  public addUser(user: User) {
    of('api/add').pipe(delay(1000)).subscribe(() => {
      const newId = Math.ceil(Math.random() * 100);
      const users = this.state$.getValue().entities;
      user = {...user, id: newId};
      let state = {
        entities: {...users, [newId]: user}
      };
      this.setState(state);
    });
  }
  public editUser(user: User) {
    of('api/edit').pipe(delay(1000)).subscribe(() => {
      const users = this.state$.getValue().entities;
      let state = {
        entities: {...users, [user.id]: user},
      };
      this.setState(state);
    });
  }
  public deletetUser(userId: number) {
    of('api/delete').pipe(delay(1000)).subscribe(() => {
      const users = {...this.state$.getValue().entities};
      delete users[userId];
      let state = {
        entities: users,
      };
      this.setState(state);
    });
  }
  private fetchUsers$(): Observable<User[]> {
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
