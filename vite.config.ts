import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' && process.env.GITHUB_ACTIONS === 'true'
    ? '/DTS-OFFICIAL-WEBISTE/'
    : '/',
  server: {
    port: 3000,
    open: false
  }
}));
