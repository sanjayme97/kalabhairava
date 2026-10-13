import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Published on GitHub Pages at https://bhairava.manakathuru.com/
// (the old address, sanjayme97.github.io/kalabhairava/, redirects here).
export default defineConfig({
  site: 'https://bhairava.manakathuru.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'kn', locales: { kn: 'kn-IN', en: 'en-IN' } },
    }),
  ],
});
