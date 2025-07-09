# My Library

A modular TypeScript library with core utilities, React components, and vanilla components.

## Installation

```bash
npm install my-lib
```

## Usage

### Core Utilities

```typescript
import { generateId, formatNumber, capitalize } from 'my-lib';

const id = generateId(); // "abc123def"
const formatted = formatNumber(1234567); // "1,234,567"
const capitalized = capitalize('hello world'); // "Hello world"
```

### React Components

```typescript
import { Button, useLocalStorage } from 'my-lib/react';

function App() {
  const [value, setValue] = useLocalStorage('key', 'default');
  
  return (
    <Button onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```

### Vanilla Components

```typescript
import { createButton } from 'my-lib/vanilla';

const button = createButton({
  text: 'Click me!',
  color: 'primary',
  onClick: () => alert('Clicked!')
});

document.body.appendChild(button);
```

### Vanilla Hooks

```typescript
import { useLocalStorage } from 'my-lib/vanilla';

const storage = useLocalStorage('key', 'default');
console.log(storage.value); // "default"
storage.setValue('new value');
```

## Build Structure

The library is built into 3 separate folders for optimal tree shaking:

```
dist/
├── types/          # Core utilities (ESM + CJS)
│   ├── index.mjs   # ESM bundle
│   ├── index.js    # CommonJS bundle
│   └── index.d.ts  # Type declarations
├── react/          # React components (ESM only)
│   ├── index.mjs   # ESM bundle
│   └── index.d.ts  # Type declarations
└── vanilla/        # Vanilla components (UMD for browser)
    ├── index.global.js  # UMD bundle
    └── index.d.ts       # Type declarations
```

### Tree Shaking Benefits

- **React apps**: Only import from `my-lib/react` - only React components are bundled
- **Vanilla apps**: Only import from `my-lib/vanilla` - only vanilla components are bundled
- **Core utilities**: Import from `my-lib` - only utilities are bundled

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm --filter my-lib build

# Run examples
pnpm --filter react-example-app dev    # http://localhost:3000
pnpm --filter vanilla-example-app dev  # http://localhost:3001
```

## Structure

```
src/
├── core/           # Core utilities and types
├── react/          # React components and hooks (ESM)
├── vanilla/        # Vanilla TypeScript components and hooks (UMD)
└── index.ts        # Main entry point (core only)
``` 