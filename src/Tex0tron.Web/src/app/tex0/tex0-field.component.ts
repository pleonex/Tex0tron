import { Component, computed, input } from "@angular/core";
import { ITex0Field } from "./tex0-field";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PixelStorageFormat, PixelStorageFormat2Label } from "./tex0";
import { PascalCasePipe } from "../shared/pascalcase.pipe";

@Component({
  selector: "tex0-field",
  templateUrl: "./tex0-field.component.html",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PascalCasePipe],
})
export class Tex0FieldComponent {
  fieldInfo = input.required<ITex0Field>();
  parentForm = input.required<FormGroup>();
  formControl = computed(() => this.parentForm().controls[this.fieldInfo().name]);

  pixelStorageFormats: PixelStorageFormat[];
  PixelStorageFormat2Label = PixelStorageFormat2Label;

  constructor() {
    this.pixelStorageFormats = Object.values(PixelStorageFormat)
      .filter(v => !isNaN(Number(v)))
      .map(v => v as number);
  }

  get isValid() {
    return this.formControl().valid;
  }

  hasError(validatorName: string): boolean {
    return this.formControl().hasError(validatorName);
  }
}
