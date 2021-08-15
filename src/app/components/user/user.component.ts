import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'lab-js-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user$: Observable<User>;
  public data:User;
  public constructor(
    private readonly userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser$();
    this.user$.subscribe((value:User) => this.data=value);
  }

}
