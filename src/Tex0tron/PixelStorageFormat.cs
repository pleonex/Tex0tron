namespace Tex0tron;

public enum PixelStorageFormat : byte
{
    PsmCt32 = 0x00,
    PsmCt24 = 0x01,
    PsmCt16 = 0x02,
    PcmCt16S = 0x0A,
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
