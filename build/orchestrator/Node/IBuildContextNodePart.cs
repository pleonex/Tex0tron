namespace BuildSystem.Node;

using Cake.Core;

public interface IBuildContextNodePart : ICakeContext
{
    NodeBuildContext NodeContext { get; }
}
