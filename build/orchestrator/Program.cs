using BuildSystem;
using BuildSystem.Angular;
using BuildSystem.Node;
using Cake.Core;
using Cake.Frosting;
using Cake.Frosting.PleOps.Recipe;
using Cake.Frosting.PleOps.Recipe.Dotnet;

return new CakeHost()
    .AddAssembly(typeof(Cake.Frosting.PleOps.Recipe.PleOpsBuildContext).Assembly)
    .UseContext<Tex0tronBuildContext>()
    .UseLifetime<BuildLifetime>()
    .Run(args);

public sealed class BuildLifetime : FrostingLifetime<Tex0tronBuildContext>
{
    public override void Setup(Tex0tronBuildContext context, ISetupContext info)
    {
        context.WarningsAsErrors = false;

        context.ReadArguments();

        context.NodeContext.NodeProjectPath = "./src/Tex0tron.Web";
        context.DotNetContext.ApplicationProjects.Add(new ProjectPublicationInfo(
            "./src/Tex0tron.Console", [ "win-x64", "linux-x64", "osx-x64" ], "net8.0"));

        context.Print();
    }

    public override void Teardown(Tex0tronBuildContext context, ITeardownContext info)
    {
        // Save the info from the existing artifacts for the next execution (e.g. deploy job)
        context.DeliveriesContext.Save();
    }
}

[TaskName("Default")]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Common.SetGitVersionTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Common.CleanArtifactsTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Dotnet.DotnetTasks.BuildProjectTask))]
[IsDependentOn(typeof(NpmRestoreTask))]
public sealed class DefaultTask : FrostingTask
{
}

[TaskName("Bundle")]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Common.SetGitVersionTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.GitHub.ExportReleaseNotesTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Dotnet.DotnetTasks.BundleProjectTask))]
public sealed class BundleTask : FrostingTask
{
}

[TaskName("Deploy")]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Common.SetGitVersionTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.Dotnet.DotnetTasks.DeployProjectTask))]
[IsDependentOn(typeof(Cake.Frosting.PleOps.Recipe.GitHub.UploadReleaseBinariesTask))]
public sealed class DeployTask : FrostingTask
{
}
