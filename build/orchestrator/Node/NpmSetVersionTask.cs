namespace BuildSystem.Node;

using System.Text;
using Cake.Common;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

[TaskName("BuildSystem.Node.NpmSetVersion")]
[TaskDescription("Set the version to the project")]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Common.SetGitVersionTask))]
public class NpmSetVersionTask : FrostingTask<Tex0tronBuildContext>
{
    public override void Run(Tex0tronBuildContext context)
    {
        context.Log.Information($"Setting the version to '{context.Version}'");

        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        string arguments = new StringBuilder()
            .AppendFormat("version {0}", context.Version)
            .Append(" --allow-same-version")
            .Append(" --no-git-tag-version")
            .ToString();

        int retCode = context.StartProcess(
            "npm" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = arguments,
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retCode != 0) {
            throw new CakeException($"'npm version' failed with {retCode}");
        }
    }
}
