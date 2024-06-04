import { Injectable } from "@angular/core";
import { Tex0 } from "./tex0";
import { ITex0Field } from "./tex0-field";

const nameof = <T>(name: Extract<keyof T, string>): string => name;

@Injectable({
  providedIn: 'root',
})
export class Tex0FieldService {

  getFields(): ITex0Field[] {
    const fields: ITex0Field[] = [
      {
        name: nameof<Tex0>("textureBasePointer"),
        type: "number",
        maxValue: 0x3FFF * 64,
        multipleOf: 64,
        bitStart: 0,
        bitEnd: 13,
      },
      {
        name: nameof<Tex0>("textureBufferWidth"),
        type: "number",
        maxValue: 0x3F * 64,
        multipleOf: 64,
        bitStart: 14,
        bitEnd: 19,
      },
      {
        name: nameof<Tex0>("texturePixelFormat"),
        type: "pixel-storage",
        bitStart: 20,
        bitEnd: 25,
      },
      {
        name: nameof<Tex0>("width"),
        type: "number",
        maxValue: 1 << 0xF,
        multipleOf: "power2",
        bitStart: 26,
        bitEnd: 29,
      },
      {
        name: nameof<Tex0>("height"),
        type: "number",
        maxValue: 1 << 0xF,
        multipleOf: "power2",
        bitStart: 30,
        bitEnd: 33,
      },
      {
        name: nameof<Tex0>("hasAlpha"),
        type: "bool",
        bitStart: 34,
        bitEnd: 34,
      },
      {
        name: nameof<Tex0>("textureFunction"),
        type: "number",
        maxValue: 3,
        bitStart: 35,
        bitEnd: 36,
      },
      {
        name: nameof<Tex0>("clutBufferBasePointer"),
        type: "number",
        maxValue: 0x3FFF * 64,
        multipleOf: 64,
        bitStart: 37,
        bitEnd: 50,
      },
      {
        name: nameof<Tex0>("clutPixelFormat"),
        type: "pixel-storage",
        bitStart: 51,
        bitEnd: 54,
      },
      {
        name: nameof<Tex0>("clutStorageMode"),
        type: "number",
        maxValue: 1,
        bitStart: 55,
        bitEnd: 55,
      },
      {
        name: nameof<Tex0>("clutEntryOffset"),
        type: "number",
        maxValue: 0x1F * 16,
        multipleOf: 16,
        bitStart: 56,
        bitEnd: 60,
      },
      {
        name: nameof<Tex0>("clutBufferLoadControl"),
        type: "number",
        maxValue: 7,
        bitStart: 61,
        bitEnd: 63,
      },
    ];

    return fields;
  }
}
