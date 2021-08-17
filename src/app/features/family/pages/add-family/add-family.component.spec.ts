import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { FamilyService } from '../../services/family.service';

import { AddFamilyComponent } from './add-family.component';

describe('AddFamilyComponent', () => {
  let component: AddFamilyComponent;
  let fixture: ComponentFixture<AddFamilyComponent>;
  let service: FamilyService;
  const isControlRequired = (control: AbstractControl | null): boolean => {
    if (control?.validator) {
      const validator = control.validator({} as AbstractControl);
      return validator && validator.required;
    }
    return false;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilyComponent);
    service = TestBed.inject(FamilyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should create a family form', () => {
      component.ngOnInit();
      const familyForm = component.familyForm;

      expect(familyForm?.get('name') instanceof FormControl).toBeTrue();
      expect(familyForm?.get('father') instanceof FormGroup).toBeTrue();
      expect(familyForm?.get('mother') instanceof FormGroup).toBeTrue();
      expect(familyForm?.get('children') instanceof FormArray).toBeTrue();
    });
    it('should create a family form with required name', () => {
      component.ngOnInit();
      const familyForm = component.familyForm;
      const isNameRequired = isControlRequired(familyForm?.get('name'));
      expect(isNameRequired).toBeTrue();
    });
    it('should create a family form with required father name and age', () => {
      component.ngOnInit();
      const fatherGroup = component.familyForm?.get('father') as FormGroup;
      const isNameRequired = isControlRequired(fatherGroup?.get('name'));
      const isAgeRequired = isControlRequired(fatherGroup?.get('age'));
      expect(isNameRequired).toBeTrue();
      expect(isAgeRequired).toBeTrue();
    });
    it('should create a family form with required mother name and age', () => {
      component.ngOnInit();
      const motherGroup = component.familyForm?.get('mother') as FormGroup;
      const isNameRequired = isControlRequired(motherGroup?.get('name'));
      const isAgeRequired = isControlRequired(motherGroup?.get('age'));
      expect(isNameRequired).toBeTrue();
      expect(isAgeRequired).toBeTrue();
    });
    it('should create a family form with required child name and age', () => {
      component.ngOnInit();
      const childrenArray = component.familyForm?.get('children') as FormArray;
      const childGroup = childrenArray?.get('0') as FormGroup;
      const isNameRequired = isControlRequired(childGroup?.get('name'));
      const isAgeRequired = isControlRequired(childGroup?.get('age'));
      expect(isNameRequired).toBeTrue();
      expect(isAgeRequired).toBeTrue();
    });
  });

  describe('addChild', () => {
    it('should add a child to the form', () => {
      component.ngOnInit();
      component.addChild();
      const childrenArray = component.familyForm?.get('children') as FormArray;
      const childGroup = childrenArray?.get('1') as FormGroup;
      expect(childGroup instanceof FormGroup).toBeTrue();
    });
    it('should add a child to the form with required name and age', () => {
      component.ngOnInit();
      component.addChild();
      const childrenArray = component.familyForm?.get('children') as FormArray;
      const childGroup = childrenArray?.get('1') as FormGroup;
      const isNameRequired = isControlRequired(childGroup?.get('name'));
      const isAgeRequired = isControlRequired(childGroup?.get('age'));
      expect(isNameRequired).toBeTrue();
      expect(isAgeRequired).toBeTrue();
    });
  });

  describe('removeChild', () => {
    it('should remove child from the form', () => {
      component.ngOnInit();
      component.removeChild(0);
      const childrenArray = component.familyForm?.get('children') as FormArray;
      expect(childrenArray?.controls?.length).toBe(0);
    });
  });

  describe('submit', () => {
    it('should call FamilyService.addFamily$ with family as a parameter', () => {
      spyOn(service, 'addFamily$').and.callFake(() => of(0));
      component.ngOnInit();
      component.submit();
      expect(service.addFamily$).toHaveBeenCalledWith(component.familyForm?.value);
    });
  });

});
