namespace BuildSystem;

using BuildSystem.Angular;
using BuildSystem.Node;
using Cake.Core;
using Cake.Frosting.PleOps.Recipe;

public class Tex0tronBuildContext : PleOpsBuildContext, IBuildContextAngularPart
{
    public Tex0tronBuildContext(ICakeContext context) : base(context)
    {
        NodeContext = new NodeBuildContext();
        AngularContext = new AngularBuildContext();
    }

    public NodeBuildContext NodeContext { get; }

    public AngularBuildContext AngularContext { get; }

    public override void ReadArguments()
    {
        base.ReadArguments();

        NodeContext.ReadArguments(this);
        AngularContext.ReadArguments(this);
    }
}
