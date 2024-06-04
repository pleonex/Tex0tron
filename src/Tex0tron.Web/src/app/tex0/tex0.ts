export enum PixelStorageFormat {
  PsmCt32 = 0x00,
  PsmCt24 = 0x01,
  PsmCt16 = 0x02,
  PsmCt16S = 0x0A,
  PsmT8 = 0x13,
  PsmT4 = 0x14,
  PsmT8H = 0x1B,
  PsmT4HL = 0x24,
  PsmT4HH = 0x2C,
  PsmZ32 = 0x30,
  PsmZ24 = 0x31,
  PsmZ16 = 0x32,
  PsmZ16S = 0x3A
}

export const PixelStorageFormat2Label: Record<PixelStorageFormat, string> = {
  [PixelStorageFormat.PsmCt32]: "PSM-CT32",
  [PixelStorageFormat.PsmCt24]: "PSM-CT24",
  [PixelStorageFormat.PsmCt16]: "PSM-CT16",
  [PixelStorageFormat.PsmCt16S]: "PSM-CT16S",
  [PixelStorageFormat.PsmT8]: "PSM-T8",
  [PixelStorageFormat.PsmT4]: "PSM-T4",
  [PixelStorageFormat.PsmT8H]: "PSM-T8H",
  [PixelStorageFormat.PsmT4HL]: "PSM-T4HL",
  [PixelStorageFormat.PsmT4HH]: "PSM-T4HH",
  [PixelStorageFormat.PsmZ32]: "PSM-Z32",
  [PixelStorageFormat.PsmZ24]: "PSM-Z24",
  [PixelStorageFormat.PsmZ16]: "PSM-Z16",
  [PixelStorageFormat.PsmZ16S]: "PSM-Z16S",
};

export interface Tex0 {
  textureBasePointer: number;
  textureBufferWidth: number;
  texturePixelFormat: PixelStorageFormat;
  width: number;
  height: number;
  hasAlpha: boolean;
  textureFunction: number;
  clutBufferBasePointer: number;
  clutPixelFormat: PixelStorageFormat;
  clutStorageMode: number;
  clutEntryOffset: number;
  clutBufferLoadControl: number;
}
