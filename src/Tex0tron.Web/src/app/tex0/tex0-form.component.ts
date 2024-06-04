import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Tex0FieldComponent } from "./tex0-field.component";
import { Tex0FieldService } from "./tex0-field.service";
import { ITex0Field } from "./tex0-field";
import { Tex0Service } from "./tex0.service";
import { Subscription } from "rxjs";
import { Tex0 } from "./tex0";

@Component({
  selector: "tex0-form",
  templateUrl: "./tex0-form.component.html",
  standalone: true,
  imports: [ReactiveFormsModule, Tex0FieldComponent]
})
export class Tex0FormComponent implements OnInit, OnDestroy {
  private _tex0Sub?: Subscription;
  private _formSub?: Subscription;
  private _lockNotifications = true;
  private _lockUpdates = false;

  fields!: ITex0Field[];
  fieldsByColumns!: ITex0Field[][];

  tex0Form!: FormGroup;

  constructor(
    private fieldService: Tex0FieldService,
    private tex0Service: Tex0Service)
  {
  }

  ngOnInit(): void {
    this.fields = this.fieldService.getFields();

    const maxColumns = 4;
    const perColumn = this.fields.length / maxColumns;
    this.fieldsByColumns = [];
    for (let i = 0; i < maxColumns; i++) {
      const startIdx = i * perColumn;
      const endIdx = (i + 1 === maxColumns) ? undefined : (i + 1) * perColumn;
      const group = this.fields.slice(startIdx, endIdx);
      this.fieldsByColumns.push(group);
    }

    const formFields: {[id: string]: FormControl} = {};
    for (const fieldInfo of this.fields) {
      formFields[fieldInfo.name] = new FormControl();
    }

    this.tex0Form = new FormGroup(formFields);

    this._formSub = this.tex0Form.valueChanges.subscribe(_ => this.notifyValueChange());
    this._tex0Sub = this.tex0Service.tex0$.subscribe(t => this.updateFormData(t));
  }

  ngOnDestroy(): void {
    this._tex0Sub?.unsubscribe();
    this._formSub?.unsubscribe();
  }

  private updateFormData(value: Tex0): void {
    if (this._lockUpdates) {
      return;
    }

    console.log("Updating form");
    this._lockNotifications = true;
    this.tex0Form.setValue(value);
    this._lockNotifications = false;
  }

  private notifyValueChange(): void {
    if (this._lockNotifications) {
      return;
    }

    if (!this.tex0Form.valid) {
      console.log("Ignoring notification change for invalid form");
      return;
    }

    console.log("Notifying change");
    this._lockUpdates = true;
    const tex0 = this.tex0Form.value;
    this.tex0Service.updateObject(tex0);
    this._lockUpdates = false;
  }
}
