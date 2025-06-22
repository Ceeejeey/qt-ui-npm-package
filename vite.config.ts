import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import dts from 'vite-plugin-dts';
  import { resolve } from 'path';
  import postcssTailwind from '@tailwindcss/postcss';

  export default defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true, include: ['src/index.ts', 'src/components/**/*.{ts,tsx}'] })],
    css: {
      postcss: {
        plugins: [postcssTailwind],
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'qt-ui',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        // Keep external, but ensure demo provides React
        external: ['react', 'react-dom', 'tailwindcss'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          assetFileNames: 'style.css',
        },
      },
      sourcemap: true,
    },
    
  });