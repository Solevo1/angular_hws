import { AbstractControl, ValidationErrors } from "@angular/forms";

export const ageValidator = (control: AbstractControl): ValidationErrors | null => {
  const age = Number(control.value);
  if(isNaN(age) || age <= 0 || age >= 100) {
    return {
      age:'Age should be a positive number'
    }
  }
  return null;
}