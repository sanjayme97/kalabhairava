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

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main` (and, for now, to the `claude/kalabhairava-temple-website-tfr0za` branch, which is the repository's only branch). It can also be run by hand from the **Actions** tab.
One-time setup: in the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
The site will be at `https://sanjayme97.github.io/kalabhairava/`.

For a custom domain, set `site` to that domain in `astro.config.mjs` and remove `base`.

## Content notes

- Photographs are the temple’s own. No stock or unrelated temple images are used.
- The inscription content comes from the village document “ಮನಕತ್ತೂರಿನ ಕಲ್ಬರಹ: ಹೊಯ್ಸಳ ಕಾಲದ ಒಂದು ನೋಟ”, based on B. L. Rice, *Epigraphia Carnatica*, Vol. 5 (Hassan District).

## Design notes

- **Home — the Karthika Deepotsava procession** (`src/scripts/lamps.ts`): a Three.js scene of lamp flames walking up the street, drawn over the real Deepotsava night photograph. Visitors can tap to light a lamp of their own.
- **Inscription — the stone by lamplight** (`src/scripts/stone.ts`): the inscription stone in 3D, built from photographs (`public/3d/`), with a lamp you can move across it — the raking light epigraphers use to read worn letters. It is not a scan; a phone photogrammetry scan (Polycam, RealityScan) would make it exact.
- **The wheel of years**: the 60-year samvatsara cycle, spinning from Vikrama (1100–01, when the stone was carved) to Parabhava (2026–27).
- 3D loads only after the page is readable, pauses off-screen, and is skipped with Data Saver on; a still photograph shows instead.
- Kannada lettering uses **Karnata F Kittel** (`src/fonts/`), a revival of the Basel Mission Press, Mangalore type of 1830–1900 by Sanchaya, released under the SIL Open Font License 1.1 (see `src/fonts/OFL.txt`). The inscription text itself is set in Tiro Kannada, because Kittel does not yet render its old double consonants correctly.
- Hand-made details: kolam dividers that draw themselves (`src/components/Kolam.astro`), photographs shown as prints (`src/components/Print.astro`), temple-invitation frames.

## Classic version

The earlier, simpler design is kept as a static copy in `public/classic/` and is live at `/kalabhairava/classic/`.
