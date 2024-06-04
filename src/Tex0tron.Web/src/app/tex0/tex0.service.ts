import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Tex0 } from "./tex0";
import { Tex0Serializer } from "./tex0.serializer";

@Injectable({
  providedIn: 'root'
})
export class Tex0Service {
  private _tex0Value = new BehaviorSubject<number>(0);

  tex0Value$ = this._tex0Value.asObservable();
  tex0$: Observable<Tex0> = this._tex0Value.asObservable()
    .pipe(map(v => Tex0Serializer.deserialize(v)));

  updateObject(newTex0: Tex0): void {
    const newValue = Tex0Serializer.serialize(newTex0);
    this._tex0Value.next(newValue);
  }

  updateValue(newValue: number): void {
    this._tex0Value.next(newValue);
  }
}
