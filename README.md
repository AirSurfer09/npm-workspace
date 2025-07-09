# NPM Workspace Starter Template

A starter template for creating npm packages with a monorepo structure using pnpm workspaces. This template provides a modular library with core utilities, React components, and vanilla TypeScript components.

## Structure

```
├── packages/
│   └── my-lib/          # Your main library package
│       ├── src/
│       │   ├── core/    # Core utilities
│       │   ├── react/   # React components and hooks
│       │   ├── vanilla/ # Vanilla TypeScript components
│       │   └── index.ts # Main entry point
│       └── dist/        # Build output
│           ├── types/   # Core utilities (ESM + CJS)
│           ├── react/   # React components (ESM)
│           └── vanilla/ # Vanilla components (ESM + UMD)
├── examples/
│   ├── react-app/       # React example app
│   └── vanilla-app/     # Vanilla TypeScript example app
├── package.json         # Workspace root
└── pnpm-workspace.yaml  # Workspace configuration
```

## Build Output

The library builds into three separate outputs for optimal tree shaking:

- **`dist/types/`** - Core utilities (ESM + CJS)
- **`dist/react/`** - React components (ESM only)
- **`dist/vanilla/`** - Vanilla components (ESM + UMD)

## Usage

### Core Utilities
```typescript
import { generateId, formatNumber, capitalize } from 'my-lib';
```

### React Components
```typescript
import { Button, useLocalStorage } from 'my-lib/react';
```

### Vanilla Components
```typescript
import { createButton, useLocalStorage } from 'my-lib/vanilla';
```

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Build the library:**
   ```bash
   pnpm --filter my-lib build
   ```

3. **Run examples:**
   ```bash
   # React example (localhost:3000)
   pnpm --filter react-example-app dev
   
   # Vanilla example (localhost:3001)
   pnpm --filter vanilla-example-app dev
   ```

## Development

- **Build:** `pnpm --filter my-lib build`
- **Watch:** `pnpm --filter my-lib dev`
- **Type check:** `pnpm --filter my-lib typecheck`

## Workspace Configuration

The `pnpm-workspace.yaml` includes both packages and examples:
```yaml
packages:
  - "packages/*"
  - "examples/*"
```

This ensures proper workspace linking for development and testing.

## TypeScript Configuration

Example apps are configured with:
- `moduleResolution: "bundler"` for Vite compatibility
- Path mappings for workspace packages
- Proper type declarations for subpath imports

## Customization

1. Rename `packages/my-lib` to your package name
2. Update package.json files with your details
3. Modify the library structure in `packages/my-lib/src/`
4. Update examples to match your API
5. Adjust build configuration in `tsup.config.ts`

## Publishing

```bash
cd packages/my-lib
pnpm publish
``` 