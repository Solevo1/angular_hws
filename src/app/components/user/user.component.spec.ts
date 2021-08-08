import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { GenderPipe } from 'src/app/pipe/gender.pipe';
import { Gender, User, UserService } from 'src/app/services/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  const stubUser: User = {
    id: 0,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    gender: Gender.MALE,
  };
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: UserService;
  let pipe: GenderPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, GenderPipe ],
      providers: [ UserService, GenderPipe ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    service = TestBed.inject(UserService);
    pipe = TestBed.inject(GenderPipe);
    spyOn(service, 'getCurrentUser$').and.returnValue(of(stubUser));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user id', waitForAsync(() => {
    const id = fixture.debugElement.query(By.css('.user-id'))?.nativeElement.innerText;
    fixture.whenStable().then(() => {
      expect(id).toBe(stubUser.id.toString());
    });
  }));

  it('should display user first name', waitForAsync(() => {
    const firstName = fixture.debugElement.query(By.css('.user-first-name'))?.nativeElement.innerText;
    fixture.whenStable().then(() => {
      expect(firstName).toBe(stubUser.firstName);
    });
  }));

  it('should display user last name', waitForAsync(() => {
    const lastName = fixture.debugElement.query(By.css('.user-last-name'))?.nativeElement.innerText;
    fixture.whenStable().then(() => {
      expect(lastName).toBe(stubUser.lastName);
    });
  }));

  it('should display user gender', waitForAsync(() => {
    const gender = fixture.debugElement.query(By.css('.user-gender'))?.nativeElement.innerText;
    const stubUserGender = pipe.transform(stubUser.gender);
    fixture.whenStable().then(() => {
      expect(gender).toBe(stubUserGender);
    });
  }));
});
