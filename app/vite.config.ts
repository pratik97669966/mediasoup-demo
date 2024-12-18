import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const extensions = [
  '.mjs',
  '.tsx',
  '.ts',
  '.jsx',
  '.js',
  '.css',
  '.scss',
  '.json',
]

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions,
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      jsx: 'automatic',
      loader: { '.js': 'jsx' },
    },
  },
  build: {
    chunkSizeWarningLimit: Infinity,
  },
  server: {
    port: 3000,
  },
})
