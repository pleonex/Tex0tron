import { Component, OnDestroy } from "@angular/core";
import { Tex0Service } from "./tex0.service";
import { Subscription } from "rxjs";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "tex0-value",
  templateUrl: "./tex0-value.component.html",
  standalone: true,
  imports: [FormsModule]
})
export class Tex0ValueComponent implements OnDestroy {
  private _tex0Sub?: Subscription;
  private _tex0Value!: string;

  get tex0Value(): string {
    return this._tex0Value;
  }
  set tex0Value(value: string) {
    if (!value && value !== "0") {
      console.log("Invalid value");
      return;
    }

    const prevValue = this._tex0Value;
    this._tex0Value = value;
    if (value != prevValue) {
      this.tex0Service.updateValue(BigInt(value));
    }
  }

  constructor(private tex0Service: Tex0Service) {
    this._tex0Sub = tex0Service.tex0Value$.subscribe(v => this.tex0Value = v.toString());
  }

  ngOnDestroy(): void {
    this._tex0Sub?.unsubscribe();
  }
}
