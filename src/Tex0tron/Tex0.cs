namespace Tex0tron;

public class Tex0
{
    public uint TextureBasePointer { get; set; }
    public int TextureBufferWidth { get; set; }
    public PixelStorageFormat TexturePixelFormat { get; set; }
    public int Width { get; set; }
    public int Height { get; set; }
    public bool HasAlpha { get; set; }
    public byte TextureFunction { get; set; }
    public uint ClutBufferBasePointer { get; set; }
    public PixelStorageFormat ClutPixelFormat { get; set; }
    public byte ClutStorageMode { get; set; }
    public int ClutEntryOffset { get; set; }
    public byte ClutBufferLoadControl { get; set; }

    public void Deserialize(ulong data)
    {
        TextureBasePointer = (ushort)(data & 0x3FFF) * 64u;
        TextureBufferWidth = (short)((data >> 14) & 0x3F) * 64;
        TexturePixelFormat = (PixelStorageFormat)((data >> 20) & 0x3F);
        Width = 1 << (short)((data >> 26) & 0xF);
        Height = 1 << (short)((data >> 30) & 0xF);
        HasAlpha = ((data >> 34) & 0x1) == 1;
        TextureFunction = (byte)((data >> 35) & 0x3);
        ClutBufferBasePointer = (ushort)((data >> 37) & 0x3FFF) * 64u;
        ClutPixelFormat = (PixelStorageFormat)((data >> 51) & 0xF);
        ClutStorageMode = (byte)((data >> 55) & 0x1);
        ClutEntryOffset = (byte)((data >> 56) & 0x1F) * 16;
        ClutBufferLoadControl = (byte)((data >> 61) & 0x7);
    }
}
