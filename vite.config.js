import { defineConfig } from 'vite';
import yaml from '@rollup/plugin-yaml';
import { preact } from '@preact/preset-vite';

export default defineConfig({
  root: 'src',
  server: {
    host: true,
    port: 8000,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: 'klaro.js',
      name: 'Klaro',
    },
  },
  plugins: [
    yaml(),
    preact(),
  ],
  esbuild: {
    // See github.com/vitejs/vite/issues/8644
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
