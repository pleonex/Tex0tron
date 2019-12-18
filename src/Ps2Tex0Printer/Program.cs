// Copyright (c) 2019 Benito Palacios Sánchez
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
namespace Ps2Tex0Printer
{
    using System;
    using System.Globalization;

    public static class Program
    {
        static void Main(string[] args)
        {
            string textValue;
            if (args.Length == 0) {
                Console.Write("TEX0 64-bits hex command: ");
                textValue = Console.ReadLine();
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
        }
    }
}
