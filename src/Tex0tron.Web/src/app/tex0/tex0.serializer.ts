import { Tex0 } from "./tex0";

export class Tex0Serializer {
  static deserialize(value: number): Tex0 {
    return {
      textureBasePointer: (value & 0x3FFF) * 64,
      textureBufferWidth: ((value >> 14) & 0x3F) * 64,
      texturePixelFormat: (value >> 20) & 0x3F,
      width: 1 << ((value >> 26) & 0xF),
      height: 1 << ((value >> 30) & 0xF),
      hasAlpha: ((value >> 34) & 0x1) == 1,
      textureFunction: (value >> 35) & 0x3,
      clutBufferBasePointer: ((value >> 37) & 0x3FFF) * 64,
      clutPixelFormat: (value >> 51) & 0xF,
      clutStorageMode: ((value >> 55) & 0x1),
      clutEntryOffset: ((value >> 56) & 0x1F) * 16,
      clutBufferLoadControl: (value >> 61) & 0x7,
    } as Tex0;
  }
}
