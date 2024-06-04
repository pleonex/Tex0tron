namespace BuildSystem.Angular;

using BuildSystem.Node;

public interface IBuildContextAngularPart : IBuildContextNodePart
{
    AngularBuildContext AngularContext { get; }
}