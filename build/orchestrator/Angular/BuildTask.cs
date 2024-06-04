namespace BuildSystem.Angular;

using System.Text;
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
        context.Log.Information(
            $"Building Angular project '{projectName}' " +
            $"with base href {context.GitHubContext.RepositoryName}");

        string commandExtension = context.IsRunningOnWindows() ? ".cmd" : "";
        string arguments = new StringBuilder()
            .Append("ng build")
            .Append(" --configuration ").Append(context.AngularContext.Configuration)
            .Append(" --output-path ").Append(outputPath)
            .AppendFormat(" --base-href /{0}/", context.GitHubContext.RepositoryName)
            .ToString();
        int retcode = context.StartProcess(
            "npx" + commandExtension,
            new Cake.Core.IO.ProcessSettings {
                Arguments = arguments,
                WorkingDirectory = context.NodeContext.NodeProjectPath,
            });
        if (retcode != 0) {
            throw new CakeException($"Angular build failed with {retcode}");
        }
    }
}