# Sri Kalabhairaveshwara Swamy Temple, Manakathuru

Bilingual (ಕನ್ನಡ / English) website for the Sri Kalabhairaveshwara Swamy Temple in Manakathuru village, Arsikere Taluk, Hassan District — with a dedicated page on the Hoysala-period stone inscription (1101 CE) kept at the temple.

Built with [Astro](https://astro.build) as a fast static site. Kannada is the default language (`/`), English lives under `/en/`.

## Updating content

| What | Where |
| --- | --- |
| Pooja timings, festivals, contact details, map link, photo list | `src/data/site.ts` |
| Inscription text, people, word notes, timeline | `src/data/inscription.ts` |
| Page wording (both languages side by side) | `src/views/*.astro` — each file starts with a `kn` / `en` content block |
| Photos | Add the file to `public/images/`, then list it in `photos` in `src/data/site.ts` |

Any value set to `null` in `src/data/site.ts` appears on the site as “ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲಿ / To be updated”.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/kalabhairava/
npm run build    # outputs to dist/
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: in the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
The site will be at `https://sanjayme97.github.io/kalabhairava/`.

For a custom domain, set `site` to that domain in `astro.config.mjs` and remove `base`.

## Content notes

- Photographs are the temple’s own. No stock or unrelated temple images are used.
- The inscription content comes from the village document “ಮನಕತ್ತೂರಿನ ಕಲ್ಬರಹ: ಹೊಯ್ಸಳ ಕಾಲದ ಒಂದು ನೋಟ”, based on B. L. Rice, *Epigraphia Carnatica*, Vol. 5 (Hassan District).
