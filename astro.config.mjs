// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      SECRET_DATABASE_URL: envField.string({
        context: "server", access: "secret"
      }),
      SECRET_DATABASE_TOKEN: envField.string({
        context: "server", access: "secret",
      }),
      BETTER_AUTH_URL: envField.string({
        context: "client", access: "public"
      })
    }
  },

  integrations: [react(), svelte()],
  adapter: vercel()
});
