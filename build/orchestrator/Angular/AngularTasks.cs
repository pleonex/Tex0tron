namespace BuildSystem.Angular;

using BuildSystem.Node;
using Cake.Frosting;

public static class AngularTasks
{
    /// <summary>
    /// Gets the module name.
    /// </summary>
    public const string ModuleName = "BuildSystem.Angular";

    /// <summary>
    /// Gets the name of the build task.
    /// </summary>
    public const string BuildTaskName = ModuleName + ".Build";

    /// <summary>
    /// Gets the name of the linting task.
    /// </summary>
    public const string LintTaskName = ModuleName + ".Lint";


    /// <summary>
    /// Run tasks to build and test projects.
    /// </summary>
    [TaskName(ModuleName + ".BuildProject")]
    [IsDependentOn(typeof(NpmRestoreTask))]
    [IsDependentOn(typeof(BuildTask))]
    [IsDependentOn(typeof(LintTask))]
    public class BuildProjectTask : FrostingTask
    {
    }
}
