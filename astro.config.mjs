import { defineConfig } from 'astro/config'
import image from '@astrojs/image'

import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
    react(),
  ],
})
