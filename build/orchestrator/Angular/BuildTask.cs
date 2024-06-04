namespace BuildSystem.Angular;

using BuildSystem.Node;
using Cake.Common;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

[TaskName(AngularTasks.BuildTaskName)]
[TaskDescription("Build Angular projects")]
[IsDependentOn(typeof(NpmRestoreTask))]
public class BuildTask : FrostingTask<Tex0tronBuildContext>
{
    public override void Run(Tex0tronBuildContext context)
    {
        string projectName = Path.GetFileName(context.NodeContext.NodeProjectPath)!;
        string outputPath = Path.Combine(context.ArtifactsPath, projectName);

        context.Log.Information($"Building Angular project '{projectName}'");
        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        int retcode = context.StartProcess(
            "npx" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = $"ng build --configuration {context.AngularContext.Configuration} --output-path {outputPath}",
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retcode != 0) {
            throw new CakeException($"Angular build failed with {retcode}");
        }
    }
}