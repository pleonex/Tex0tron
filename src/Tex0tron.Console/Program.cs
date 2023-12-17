using System.Globalization;
using Tex0tron;

string textValue;
if (args.Length == 0) {
    Console.Write("TEX0 64-bits hex command: ");
    textValue = Console.ReadLine()!;
} else {
    textValue = args[0];
}

bool parseResult = ulong.TryParse(
    textValue,
    NumberStyles.HexNumber,
    CultureInfo.InvariantCulture,
    out ulong data);
if (!parseResult) {
    Console.WriteLine("Error: cannot parse hexadecimal number.");
    Environment.Exit(-1);
}

var tex0 = new Tex0();
tex0.Deserialize(data);

Console.WriteLine();
Console.WriteLine($"Base pointer: 0x{tex0.TextureBasePointer:X}");
Console.WriteLine($"Buffer width: 0x{tex0.TextureBufferWidth:X}");
Console.WriteLine($"Pixel format: {tex0.TexturePixelFormat}");
Console.WriteLine($"Width: {tex0.Width}");
Console.WriteLine($"Height: {tex0.Height}");
Console.WriteLine($"Has alpha: {tex0.HasAlpha}");
Console.WriteLine($"Texture function: 0x{tex0.TextureFunction:X}");
Console.WriteLine($"CLUT buffer base pointer: 0x{tex0.ClutBufferBasePointer:X}");
Console.WriteLine($"CLUT pixel format: {tex0.ClutPixelFormat}");
Console.WriteLine($"CLUT storage mode: 0x{tex0.ClutStorageMode:X}");
Console.WriteLine($"CLUT entry offset: 0x{tex0.ClutEntryOffset:X}");
Console.WriteLine($"CLUT buffer load control: 0x{tex0.ClutBufferLoadControl:X}");
