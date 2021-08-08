import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
export interface Movie {
  id: number;
  name: string;
  director: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

@Injectable()
export class MovieService {
  public getMovies$(): Observable<Movie[]> {
    return of([
      {
        id: 1,
        name: 'Inception',
        director: 'Christopher Nolan',
        rating: 5,
      },
      {
        id: 2,
        name: 'Ms Marvel',
        director: 'Anna Boden, Ryan Fleck',
        rating: 2,
      },
    ]);
  }
}
