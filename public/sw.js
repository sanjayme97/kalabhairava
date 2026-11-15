/*
 * Lets the site work like an app: pages open from the phone's home screen,
 * and pages and photos already seen still open without internet.
 *
 * - Pages: from the network first, so updates show at once; the saved copy
 *   is used only when there is no connection.
 * - Built files (/_astro/), fonts, photos and the 3D stone: saved after the
 *   first use and served from the phone after that.
 * Raise VERSION to throw away everything saved by an older version.
 */
const VERSION = 'v1';
const PAGES = `pages-${VERSION}`;
const FILES = `files-${VERSION}`;
const OFFLINE = '/offline.html';
const START = ['/', '/temple/', '/poojas/', '/inscription/', '/gallery/', '/visit/', OFFLINE];
const MAX_FILES = 120;

// save the main pages, and the style files they use, so they open offline looking right
async function saveStart() {
  const pages = await caches.open(PAGES);
  await pages.addAll(START);
  const css = new Set();
  for (const url of START) {
    const res = await pages.match(url);
    const html = res ? await res.text() : '';
    for (const m of html.matchAll(/\/_astro\/[^"'\s>]+\.css/g)) css.add(m[0]);
  }
  if (css.size) await (await caches.open(FILES)).addAll([...css]);
}

self.addEventListener('install', (event) => {
  event.waitUntil(saveStart().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== PAGES && k !== FILES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// keep the saved files to a sensible size: drop the oldest first
async function trim(name, max) {
  const c = await caches.open(name);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // Analytics, maps: leave alone

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(PAGES).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(async () => (await caches.match(req, { ignoreSearch: true })) || caches.match(OFFLINE)),
    );
    return;
  }

  if (/^\/(_astro|images|3d|app)\//.test(url.pathname) || /\.(woff2|png|svg|jpg|webp)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok && res.status === 200) {
              const copy = res.clone();
              caches.open(FILES).then((c) => c.put(req, copy).then(() => trim(FILES, MAX_FILES)));
            }
            return res;
          }),
      ),
    );
  }
});
