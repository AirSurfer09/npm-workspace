import { defineConfig } from 'tsup';

export default defineConfig([
  // Core utilities (ESM + CJS) - goes to types/
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    outDir: 'dist/types',
  },
  // React components (ESM only) - goes to react/
  {
    entry: ['src/react/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
    treeshake: true,
    outDir: 'dist/react',
    outExtension: () => ({
      js: '.mjs',
    }),
  },
  // Vanilla components (ESM + UMD) - goes to vanilla/
  {
    entry: ['src/vanilla/index.ts'],
    format: ['esm', 'iife'],
    dts: true,
    sourcemap: true,
    globalName: 'MyLib',
    treeshake: true,
    outDir: 'dist/vanilla',
    outExtension: ({ format }) => ({
      js: format === 'esm' ? '.mjs' : '.global.js',
    }),
  },
]); 