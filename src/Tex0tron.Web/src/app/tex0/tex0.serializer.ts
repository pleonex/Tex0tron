import { Tex0 } from "./tex0";

export class Tex0Serializer {
  static deserialize(value: bigint): Tex0 {
    function getBits(value: bigint, bitIdx: number, bitCount: number): number {
      const smallBigValue = value >> BigInt(bitIdx);
      const intValue = Number(smallBigValue)
      const mask = (1 << bitCount) - 1;
      return intValue & mask;
    }

    return {
      textureBasePointer: getBits(value, 0, 14) * 64,
      textureBufferWidth: getBits(value, 14, 6) * 64,
      texturePixelFormat: getBits(value, 20, 6),
      width: 1 << getBits(value, 26, 4),
      height: 1 << getBits(value, 30, 4),
      hasAlpha: getBits(value, 34, 1) == 1,
      textureFunction: getBits(value, 35, 2),
      clutBufferBasePointer: getBits(value, 37, 14) * 64,
      clutPixelFormat: getBits(value, 51, 4),
      clutStorageMode: getBits(value, 55, 1),
      clutEntryOffset: getBits(value, 56, 5) * 16,
      clutBufferLoadControl: getBits(value, 61, 3),
    } as Tex0;
  }

  static serialize(value: Tex0): bigint {
    function setBits(value: bigint, bits: number, bitIdx: number, bitCount: number): bigint {
      const mask = (1 << bitCount) - 1;
      const validBits = bits & mask;

      const bigBits = BigInt(validBits) << BigInt(bitIdx);
      return value | bigBits;
    }

    let binary = 0n;
    binary = setBits(binary, value.textureBasePointer / 64, 0, 14);
    binary = setBits(binary, value.textureBufferWidth / 64, 14, 6);
    binary = setBits(binary, value.texturePixelFormat, 20, 6);
    binary = setBits(binary, Math.log2(value.width), 26, 4);
    binary = setBits(binary, Math.log2(value.height), 30, 4);
    binary = setBits(binary, value.hasAlpha ? 1 : 0, 34, 1);
    binary = setBits(binary, value.textureFunction, 35, 2);
    binary = setBits(binary, value.clutBufferBasePointer / 64, 37, 14);
    binary = setBits(binary, value.clutPixelFormat, 51, 4);
    binary = setBits(binary, value.clutStorageMode, 55, 1);
    binary = setBits(binary, value.clutEntryOffset / 16, 56, 5);
    binary = setBits(binary, value.clutBufferLoadControl, 61, 3);

    return binary;
  }
}
