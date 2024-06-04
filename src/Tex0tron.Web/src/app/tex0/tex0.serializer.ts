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

  static serialize(value: Tex0): number {
    return ((value.textureBasePointer / 64) & 0x3FFF)
      | (((value.textureBufferWidth / 64) & 0x3F) << 14)
      | ((value.texturePixelFormat & 0x3F) << 20)
      | ((Math.log2(value.width) & 0xF) << 26)
      | ((Math.log2(value.height) & 0xF) << 30)
      | ((value.hasAlpha ? 1 : 0) << 34)
      | ((value.textureFunction & 0x3) << 35)
      | (((value.clutBufferBasePointer / 64) & 0x3FFF) << 37)
      | ((value.clutPixelFormat & 0xF) << 51)
      | ((value.clutStorageMode & 0x1) << 55)
      | (((value.clutEntryOffset / 16) & 0x1F) << 56)
      | ((value.clutBufferLoadControl & 0x7) << 61);
  }
}
