import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
  server: {
    port: 3000,
    host: true,
  },
});