import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Tex0 } from "./tex0";
import { Tex0Serializer } from "./tex0.serializer";

@Injectable({
  providedIn: 'root'
})
export class Tex0Service {
  private _tex0Value = new BehaviorSubject<number>(0);
  private _tex0 = new Subject<Tex0>();

  tex0Value$ = this._tex0Value.asObservable();
  tex0$ = this._tex0.asObservable();

  updateObject(newTex0: Tex0): void {
    const newValue = Tex0Serializer.serialize(newTex0);
    this._tex0Value.next(newValue);
    this._tex0.next(newTex0);
  }

  updateValue(newValue: number): void {
    const newTex0 = Tex0Serializer.deserialize(newValue);
    this._tex0Value.next(newValue);
    this._tex0.next(newTex0);
  }
}
