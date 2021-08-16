import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie, MoviesService } from '../../services/movies.service';

@Component({
  selector: 'lab-js-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieForm: FormGroup;
  public movies$: Observable<Movie[]>;
  public loading$: Observable<boolean>;
  public constructor(
    private readonly moviesService: MoviesService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.movies$ = this.moviesService.getMovies$();
    this.loading$ = this.moviesService.isLoading$();
  }

  public submit() {
    const movie = this.movieForm.value;
    if (movie.id) {
      return this.editMovie(movie);
    }
    return this.addMovie(movie);
  }

  public setMovie(movie: Movie) {
    this.movieForm.setValue(movie);
  }
  public onRemove(event: Event, movieId: number) {
    event.stopPropagation();
    this.removeMovie(movieId);
  }

  private editMovie(movie: Movie) {
    this.moviesService.editMovie$(movie).subscribe();
  }

  private addMovie(movie: Movie) {
    this.moviesService.addMovie$(movie).subscribe();
  }

  private removeMovie(movieId: number) {
    this.moviesService.removeMovie$(movieId).subscribe();
  }

  private initForm() {
    this.movieForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(),
      director: new FormControl(),
      rating: new FormControl(),
    });
  }

}
