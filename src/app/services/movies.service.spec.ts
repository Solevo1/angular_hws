import { TestBed } from '@angular/core/testing';
import { switchMap } from 'rxjs/operators';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('addMovie$', () => {
    it('should add a new movie', (done) => {
      const newMovie = {
        name: 'New Movie',
        director: 'John Doe',
        rating: 3
      };
      service.addMovie$(newMovie)
        .pipe(
          switchMap(() => service.getMovies$())
        ).subscribe(movies => {
          const lastMovie = movies[movies.length - 1];
          expect(lastMovie).toEqual({...newMovie, id: movies.length});
          done();
        });
    })
  });
  describe('editMovie$', () => {
    it('should edit an existing movie', (done) => {
      const updatedMovie = {
        id: 1,
        name: 'New Movie',
        director: 'John Doe',
        rating: 3
      };
      service.editMovie$(updatedMovie)
        .pipe(
          switchMap(() => service.getMovies$())
        ).subscribe(movies => {
          const lastMovie = movies[0];
          expect(lastMovie).toEqual(updatedMovie);
          done();
        });
    })
  });
  describe('removeMovie$', () => {
    it('should remove an existing movie', (done) => {
      const movieId = 1;
      service.removeMovie$(movieId)
        .pipe(
          switchMap(() => service.getMovies$())
        ).subscribe(movies => {
          const deletedMovieExists = !!movies.find(movie => movie.id === movieId);
          expect(deletedMovieExists).toBeFalse();
          done();
        });
    })
  });
});
