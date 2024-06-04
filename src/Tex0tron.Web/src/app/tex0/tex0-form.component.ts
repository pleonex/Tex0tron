import { Component, OnInit, computed, model } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Tex0Serializer } from "./tex0.serializer";
import { Tex0FieldComponent } from "./tex0-field.component";
import { Tex0FieldService } from "./tex0-field.service";
import { ITex0Field } from "./tex0-field";

@Component({
  selector: "tex0-form",
  templateUrl: "./tex0-form.component.html",
  standalone: true,
  imports: [ReactiveFormsModule, Tex0FieldComponent]
})
export class Tex0FormComponent implements OnInit {
  fields: ITex0Field[];
  fieldsByColumns: ITex0Field[][];

  tex0Form!: FormGroup;

  constructor(fieldService: Tex0FieldService) {
    this.fields = fieldService.getFields();

    const maxColumns = 4;
    const perColumn = this.fields.length / maxColumns;
    this.fieldsByColumns = [];
    for (let i = 0; i < maxColumns; i++) {
      const startIdx = i * perColumn;
      const endIdx = (i + 1 === maxColumns) ? undefined : (i + 1) * perColumn;
      const group = this.fields.slice(startIdx, endIdx);
      this.fieldsByColumns.push(group);
    }
  }

  ngOnInit(): void {
    const formFields: {[id: string]: FormControl} = {};
    for (const fieldInfo of this.fields) {
      formFields[fieldInfo.name] = new FormControl();
    }

    this.tex0Form = new FormGroup(formFields);
  }
}
