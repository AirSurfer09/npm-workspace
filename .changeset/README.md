# Changesets

Hello and welcome! This folder has been automatically generated by `@changesets/cli`, a build tool that works with multi-package repos, or single-package repos to help you version and publish your packages.

## What are changesets?

A changeset is an intent to release a set of packages at particular semver bump types with a summary of the changes made.

## How to use changesets

1. **Adding a changeset**: When you make changes to the codebase, run `pnpm changeset` to add a changeset. This will prompt you to select which packages have changed and what type of change it is (major, minor, patch).

2. **Versioning**: When you're ready to release, run `pnpm version-packages` to consume all changesets and update package versions.

3. **Publishing**: Run `pnpm release` to build and publish the packages to npm.

## Changeset workflow

```bash
# Make your changes to the code
# ...

# Add a changeset
pnpm changeset

# Version packages (this updates package.json files and creates CHANGELOG.md)
pnpm version-packages

# Release packages
pnpm release
```

## Changeset types

- **patch**: Bug fixes and other minor changes
- **minor**: New features that don't break existing functionality
- **major**: Breaking changes

## Example changeset

```md
---
"my-package": minor
---

Add new Button component with multiple variants and sizes
```

For more information, see the [changesets documentation](https://github.com/changesets/changesets). 