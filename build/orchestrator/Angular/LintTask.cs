namespace BuildSystem.Angular;

using BuildSystem.Node;
using Cake.Common;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

[TaskName(AngularTasks.LintTaskName)]
[TaskDescription("Lint Angular projects")]
[IsDependentOn(typeof(NpmRestoreTask))]
public class LintTask : FrostingTask<Tex0tronBuildContext>
{
    public override void Run(Tex0tronBuildContext context)
    {
        context.Log.Information("Linting Angular project");
        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        int retcode = context.StartProcess(
            "npx" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = "ng lint",
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retcode != 0) {
            if (context.WarningsAsErrors) {
                throw new CakeException($"Linting failed with {retcode}");
            } else {
                context.Log.Warning($"Linting failed with {retcode}");
            }
        }
    }
}