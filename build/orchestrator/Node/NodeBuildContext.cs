namespace BuildSystem.Node;

using Cake.Common.Build;
using Cake.Core;

public class NodeBuildContext
{
    public NodeBuildContext()
    {
        ExactRestore = false;
        NodeProjectPath = "";
    }

    public bool ExactRestore { get; set; }

    public string NodeProjectPath { get; set; }

    public void ReadArguments(ICakeContext context)
    {
        ExactRestore = !context.BuildSystem().IsLocalBuild;
    }
}
