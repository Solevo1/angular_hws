import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Family } from '../../models';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'lab-js-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent implements OnInit {
  public families$: Observable<Family[]>
  public constructor(
    private readonly familyService: FamilyService,
  ) { }

  public ngOnInit(): void {
    this.families$ = this.familyService.getFamilies$();
  }

}
