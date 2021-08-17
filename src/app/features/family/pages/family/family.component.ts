import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Family } from '../../models';

@Component({
  selector: 'lab-js-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  public family: Family;
  public constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.family = this.activatedRoute.snapshot.data.family;
  }

}
