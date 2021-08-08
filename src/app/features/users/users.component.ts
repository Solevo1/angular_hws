import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'lab-js-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;
  public columnNames: (keyof User)[] = [
    'id',
    'firstName',
    'lastName',
  ];
  public constructor(
    private readonly userService: UserService
  ) { }

  public ngOnInit(): void {
    this.users$ = this.userService.getMovies$();
  }

}
