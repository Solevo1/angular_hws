import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, first, map, tap } from 'rxjs/operators';
import { DEFAULT_FAMILIES } from '../constants';
import { Family } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private readonly families$ = new BehaviorSubject<Family[]>(DEFAULT_FAMILIES);
  public addFamily$(family: Family) {
    const families = this.families$.getValue();
    return of(families.length + 1)
      .pipe(
        delay(1000),
        tap((id: number) => {
          this.families$.next([
            ...families,
            {
              ...family, id,
            }
          ]);
        }),
        tap(() => alert(`${family.name} Family Added`))
      )
  }

  public editFamily$(family: Family) {
    return of(null)
      .pipe(
        delay(1000),
        tap(() => {
          const families = this.families$.getValue().map(f => {
            if (f.id === family.id) {
              return {...f, ...family};
            }
            return {...f}
          });
          this.families$.next(families);
        }),
        tap(() => alert(`${family.name} Family Updated`))
      );
  }

  public getFamilies$() {
    return this.families$.asObservable();
  }

  public getFamily$(id: number) {
    return this.families$.pipe(
      map(families => families.find(f => f.id === id)),
      first(),
    );
  }
}
