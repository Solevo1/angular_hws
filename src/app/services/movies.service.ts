import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, distinctUntilChanged, finalize, map, pluck, tap } from 'rxjs/operators';
import { Store } from './store';

export interface Movie {
  id: number;
  name: string;
  director: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends Store<Movie> {
  public constructor() {
    super();
    this.setState({isLoading: true});
    this.fetchMovies$()
      .subscribe(movies => this.setState({
          entities: this.transformArray(movies, 'id'),
          isLoading: false,
      }));
  }
  public getMovies$(): Observable<Movie[]> {
    return this.getState$()
      .pipe(
        pluck('entities'),
        distinctUntilChanged(),
        map((entities) => Object.values(entities))
      )
  }
  public isLoading$() {
    return this.getState$()
      .pipe(pluck('isLoading'))
  }
  public addMovie$(movie: Partial<Movie>) {
    this.setState({isLoading: true});
    return of('imagine/api/call/post')
      .pipe(
        delay(1000),
        map(() => this.generateId()),
        tap((id: number) => {
          const users = this.state$.getValue();
          this.setState({entities: {...users.entities, [id]: {...movie, id}} })
        }),
        finalize(() => this.setState({isLoading: false}))
      );
  }
  public editMovie$(movie: Movie) {
    this.setState({isLoading: true});
    return of('imagine/api/call/put')
      .pipe(
        delay(1000),
        tap(() => {
          const users = this.state$.getValue();
          this.setState({entities: {...users.entities, [movie.id]: {...movie}} })
        }),
        finalize(() => this.setState({isLoading: false})),
      );
  }
  public removeMovie$(movieId: number) {
    this.setState({isLoading: true});
    return of('imagine/api/call/delete')
      .pipe(
        delay(1000),
        tap(() => {
          const users = this.state$.getValue();
          const newState = {...users.entities};
          delete newState[movieId]; 
          this.setState({entities: {...newState} })
        }),
        finalize(() => this.setState({isLoading: false})),
      );
  }
  private fetchMovies$(): Observable<Movie[]> {
    return of([
      {
        id: 1,
        name: 'Inception',
        director: 'Chirstopher Nolan',
        rating: 5
      },
      {
        id: 2,
        name: 'Forrest Gump',
        director: 'Robert Zemeckis',
        rating: 5
      }
    ]).pipe(delay(1000));
  }
  private generateId() {
    const keys = Object.keys(this.state$.getValue().entities);
    return Number(keys[keys.length-1])+1;
  }
}
