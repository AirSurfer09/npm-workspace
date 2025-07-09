# Vanilla TypeScript Example App

This is an example vanilla TypeScript application that demonstrates how to use the `@my-lib/vanilla` and `@my-lib/core` packages.

## Features Demonstrated

- Vanilla Button component with variants and event handling
- useLocalStorage hook for persistent state
- Core utility functions (debounce, generateId)
- UMD build support for browser usage

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Build

```bash
pnpm build
```

## Preview

```bash
pnpm preview
```

## UMD Usage

The vanilla package also supports UMD builds for direct browser usage:

```html
<script src="https://unpkg.com/@my-lib/vanilla/dist/index.umd.js"></script>
<script>
  const { Button, createButton } = MyLibVanilla;
  // Use the library
</script>
``` 