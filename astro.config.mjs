import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname
      }
    }
  }
});
