import { defineConfig } from 'vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  root: 'src',
  server: {
    host: true,
    port: 8000,
  },
  plugins: [
    yaml(),
  ],
});
