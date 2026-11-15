/**
 * The site as an app: offline support, the "add to your phone" offer, and
 * small fixes for when it runs from the home screen.
 */
import { track } from './track';

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };

const DISMISS_KEY = 'install-dismissed';
const SEEN_KEY = 'pages-seen';
const DISMISS_DAYS = 30;

const standalone = () =>
  matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
// iPhone and iPad Safari: no install prompt, so we show the steps instead
const iosSafari = () => {
  const ua = navigator.userAgent;
  const ios = /iP(hone|od|ad)/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1);
  return ios && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
};
const store = {
  get: (k: string) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* private mode: just don't remember */
    }
  },
};

export function startApp() {
  // ── offline support ──
  if ('serviceWorker' in navigator) {
    addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }

  if (standalone()) {
    openPhotosInPlace();
    return; // already installed: no offer needed
  }

  const banner = document.querySelector<HTMLElement>('[data-install]');
  const sheet = document.querySelector<HTMLElement>('[data-ios]');
  const openers = document.querySelectorAll<HTMLButtonElement>('[data-install-open]');
  let deferred: InstallPrompt | null = null;

  const recentlyDismissed = () => {
    const t = Number(store.get(DISMISS_KEY) || 0);
    return Date.now() - t < DISMISS_DAYS * 864e5;
  };
  const available = () => deferred !== null || iosSafari();

  const showOpeners = () => openers.forEach((b) => (b.hidden = !available()));

  // offer it once the visitor has looked around a little: a second page, or 20 seconds
  const maybeOffer = () => {
    if (!banner || !available() || recentlyDismissed() || document.documentElement.classList.contains('is-locked')) return;
    banner.hidden = false;
    track('install_offer');
  };
  let seen = 0;
  try {
    seen = Number(sessionStorage.getItem(SEEN_KEY) || 0) + 1;
    sessionStorage.setItem(SEEN_KEY, String(seen));
  } catch {
    /* ignore */
  }
  const schedule = () => {
    if (seen >= 2) setTimeout(maybeOffer, 1500);
    else setTimeout(maybeOffer, 20000);
  };

  const install = async (from: string) => {
    track('install_click', { from });
    if (deferred) {
      const p = deferred;
      deferred = null;
      await p.prompt();
      const { outcome } = await p.userChoice;
      track('install_result', { outcome });
      if (banner) banner.hidden = true;
      showOpeners();
    } else if (iosSafari() && sheet) {
      sheet.hidden = false;
      if (banner) banner.hidden = true;
      track('install_ios_help');
    }
  };

  addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // we show our own, gentler offer
    deferred = e as InstallPrompt;
    showOpeners();
    schedule();
  });
  addEventListener('appinstalled', () => {
    track('app_installed');
    if (banner) banner.hidden = true;
    openers.forEach((b) => (b.hidden = true));
  });
  if (iosSafari()) {
    showOpeners();
    schedule();
  }

  banner?.querySelector('[data-install-yes]')?.addEventListener('click', () => install('banner'));
  banner?.querySelector('[data-install-no]')?.addEventListener('click', () => {
    banner.hidden = true;
    store.set(DISMISS_KEY, String(Date.now()));
    track('install_dismiss');
  });
  openers.forEach((b) => b.addEventListener('click', () => install(b.dataset.installOpen || 'menu')));
  sheet?.querySelector('[data-ios-close]')?.addEventListener('click', () => (sheet.hidden = true));
}

/**
 * From the home screen there is no browser back button on an iPhone, so a
 * full-size photo opens over the page instead of leaving it.
 */
function openPhotosInPlace() {
  const box = document.querySelector<HTMLDialogElement>('[data-photo-box]');
  const img = box?.querySelector('img');
  if (!box || !img || typeof box.showModal !== 'function') return;
  const close = () => box.open && box.close();
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a.print-img');
    if (!a || !/\.(jpe?g|png|webp)$/i.test(a.getAttribute('href') || '')) return;
    e.preventDefault();
    img.src = a.href;
    img.alt = a.querySelector('img')?.alt || '';
    box.showModal();
    history.pushState({ photo: true }, '');
  });
  box.addEventListener('click', (e) => {
    if (e.target === box || (e.target as Element).closest('[data-photo-close]')) history.back();
  });
  box.addEventListener('cancel', (e) => {
    e.preventDefault();
    history.back();
  });
  addEventListener('popstate', close);
}
