import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ispp-rooma.github.io',
  base: '/landing-rooma', 
  output: 'static',
  integrations: [
    react() 
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});