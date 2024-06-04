namespace BuildSystem.Angular;

using Cake.Core;
using Cake.Frosting.PleOps.Recipe;

public class AngularBuildContext
{
    public AngularBuildContext()
    {
        Configuration = "production";
    }

    public string Configuration { get; set; }

    public void ReadArguments(ICakeContext context)
    {
        context.Arguments.SetIfPresent("angular-configuration", x => Configuration = x);
    }
}