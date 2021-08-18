import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FamilyService } from '../../services/family.service';
import { ageValidator } from '../../validators/age.validator';

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
  public ngOnInit(): void {
    this.initForm();
  }
  public addChild() {
    const child = this.generateFamilyMember();
    (this.familyForm.get('children') as FormArray).push(child);
  }
  public removeChild(index: number) {
    (this.familyForm.get('children') as FormArray).removeAt(index);
  }
  public generateFamilyMember() {
    return new FormGroup({
      name: new FormControl(null,[Validators.required]),
      age: new FormControl(null,[Validators.required, ageValidator]),
    });
  }
  public submit() {
    this.familyService.addFamily$(this.familyForm.value);
  }
  private initForm() {
    this.familyForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      father: this.generateFamilyMember(),
      mother: this.generateFamilyMember(),
      children: new FormArray([this.generateFamilyMember()])
    })
  }
}
