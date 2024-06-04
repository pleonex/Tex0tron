namespace BuildSystem.Node;

using Cake.Common;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

[TaskName("BuildSystem.Node.NpmRestore")]
[TaskDescription("Restore node dependencies")]
public class NpmRestoreTask : FrostingTask<IBuildContextNodePart>
{
    public override void Run(IBuildContextNodePart context)
    {
        string installArg = context.NodeContext.ExactRestore ? "ci" : "install";
        context.Log.Information($"Restoring node dependencies with '{installArg}'");

        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        int retcode = context.StartProcess(
            "npm" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = installArg,
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retcode != 0) {
            throw new CakeException($"'npm ci' failed with {retcode}");
        }
    }
}