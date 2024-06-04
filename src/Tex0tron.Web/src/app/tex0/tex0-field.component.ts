import { Component, computed, input } from "@angular/core";
import { ITex0Field } from "./tex0-field";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { PixelStorageFormat } from "./tex0";

@Component({
  selector: "tex0-field",
  templateUrl: "./tex0-field.component.html",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TitleCasePipe],
})
export class Tex0FieldComponent {
  fieldInfo = input.required<ITex0Field>();
  parentForm = input.required<FormGroup>();
  formControl = computed(() => this.parentForm().controls[this.fieldInfo().name]);

  pixelStorageFormats: string[];

  constructor() {
    this.pixelStorageFormats = Object.values(PixelStorageFormat)
      .filter(v => isNaN(Number(v)))
      .map(v => v as string);
  }

  get isValid() {
    return this.formControl().valid;
  }

  hasError(validatorName: string): boolean {
    return this.formControl().hasError(validatorName);
  }
}
