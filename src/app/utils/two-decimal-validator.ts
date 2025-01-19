import { AbstractControl, ValidationErrors } from '@angular/forms';

export function twoDecimalValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (value != null && !/^\d+(\.\d{1,2})?$/.test(value)) {
    return { twoDecimal: true };
  }
  return null;
}
