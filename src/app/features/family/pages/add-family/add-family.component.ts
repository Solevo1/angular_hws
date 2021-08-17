import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'lab-js-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss']
})
export class AddFamilyComponent implements OnInit {
  public familyForm: FormGroup;
  public get children() {
    return this.familyForm.get('children') as FormArray;
  }
  public constructor(
    private readonly familyService: FamilyService
  ) {

  }
  public ngOnInit(): void {}
  public addChild() {}
  public removeChild(index: number) {}
  public submit() {}
}
