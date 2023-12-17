# Tex0tron

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://github.com/pleonex/Tex0tron/releases">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/pleonex/Tex0tron">
  </a>
  &nbsp;
  <a href="https://github.com/pleonex/Tex0tron/actions/workflows/build-and-release.yml">
    <img alt="Build and release" src="https://github.com/pleonex/Tex0tron/actions/workflows/build-and-release.yml/badge.svg?branch=main" />
  </a>
  &nbsp;
  <a href="https://choosealicense.com/licenses/mit/">
    <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" />
  </a>
  &nbsp;
</p>

Utility to inspect TEX0 command data from PS2 GPU. It allows to unpack and pack
the information from TEX0 GPU commands.

## Get started

Get the terminal-based or desktop version of the utility in the
[GitHub release](https://github.com/pleonex/Tex0tron/releases).

Feel free to ask any question in the
[project discussion](https://github.com/pleonex/Tex0tron/discussions).

## Build

The project requires to build .NET 8.0 SDK.

To build, test and generate artifacts run:

```sh
# Build and run tests (with code coverage!)
dotnet run --project build/orchestrator

# (Optional) Create bundles (nuget, zips, docs)
dotnet run --project build/orchestrator -- --target=Bundle
```

## Release

Create a new GitHub release with a tag `v{Version}` (e.g. `v2.4`) and that's it!
This triggers a pipeline that builds and deploy the project.
