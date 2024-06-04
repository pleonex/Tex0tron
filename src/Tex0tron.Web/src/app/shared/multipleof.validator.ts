import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function multipleOfValidator(multiple: number | "power2") : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const numValue = Number(control.value);
    if (isNaN(numValue)) {
      return { multipleOf: { value: control.value } };
    }

    if (multiple == "power2") {
      const log2 = Math.log2(control.value);
      return Number.isInteger(log2) ? null : { multipleOf: { value: control.value } };
    } else {
      return (numValue % multiple) == 0 ? null : { multipleOf: { value: control.value } };
    }
  }
}
