import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'lab-js-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>;
  public columnNames: (keyof Movie)[] = [
    'name',
    'director',
    'rating'
  ];
  public constructor(
    private readonly movieService: MovieService,
  ) {}

  public ngOnInit(): void {
    this.movies$ = this.movieService.getMovies$();
  }

}
