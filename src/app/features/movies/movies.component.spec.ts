import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent, TableComponent ],
      providers: [ MovieService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
