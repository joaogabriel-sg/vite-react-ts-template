import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    reporters: ['verbose'],
    bail: 1,
    setupFiles: ['.test/setup.ts'],
  },
});
