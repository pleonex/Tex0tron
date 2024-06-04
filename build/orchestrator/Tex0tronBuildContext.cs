namespace BuildSystem;

using BuildSystem.Node;
using Cake.Core;
using Cake.Frosting.PleOps.Recipe;

public class Tex0tronBuildContext : PleOpsBuildContext, IBuildContextNodePart
{
    public Tex0tronBuildContext(ICakeContext context) : base(context)
    {
        NodeContext = new NodeBuildContext();
    }

    public NodeBuildContext NodeContext { get; }

    public override void ReadArguments()
    {
        base.ReadArguments();

        NodeContext.ReadArguments(this);
    }
}
