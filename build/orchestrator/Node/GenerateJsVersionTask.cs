namespace BuildSystem.Node;

using System.Text;
using Cake.Common;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

[TaskName("BuildSystem.Node.GenerateJsVersion")]
[TaskDescription("Generate a JS with the version")]
[IsDependentOn(typeof(NpmRestoreTask))]
[IsDependentOn(typeof(NpmSetVersionTask))]
public class GenerateJsVersionTask : FrostingTask<Tex0tronBuildContext>
{
    public override void Run(Tex0tronBuildContext context)
    {
        context.Log.Information("Generating version file");

        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        string arguments = new StringBuilder()
            .Append("genversion")
            .Append(" --esm")
            .Append(" --semi")
            .Append(" --property name,version")
            .AppendFormat(" \"{0}\"", context.NodeContext.JsVersionFile)
            .ToString();

        int retCode = context.StartProcess(
            "npx" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = arguments,
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retCode != 0) {
            throw new CakeException($"'genversion' failed with {retCode}");
        }
    }
}