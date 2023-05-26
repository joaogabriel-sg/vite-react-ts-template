import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@public': resolve(__dirname, './public'),
    },
  },
});
