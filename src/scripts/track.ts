/**
 * Send a named event to Google Analytics. Analytics loads only on the live
 * domain, so on a local copy this quietly does nothing.
 */
type Gtag = (command: 'event', name: string, params?: Record<string, string | number>) => void;

export function track(name: string, params: Record<string, string | number> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.('event', name, params);
}

/** Clicks and taps on links and buttons across the site, sent as named events. */
export function trackClicks() {
  const page = location.pathname;
  document.addEventListener('click', (e) => {
    const el = (e.target as Element | null)?.closest('a, button');
    if (!el) return;

    if (el instanceof HTMLAnchorElement) {
      const href = el.getAttribute('href') ?? '';
      if (el.classList.contains('print-img')) {
        return track('photo_open', { photo: el.dataset.photo ?? '', page });
      }
      if (href.includes('google.com/maps')) {
        return track('directions_click', { kind: href.includes('/dir/') ? 'directions' : 'map', page });
      }
      if (href.startsWith('mailto:')) return track('email_click', { page });
      if (el.hasAttribute('hreflang')) return track('language_switch', { to: el.getAttribute('hreflang') ?? '', page });
      if (href.startsWith('#') && href.length > 1 && !el.classList.contains('skip')) {
        return track('section_jump', { target: href.slice(1), page });
      }
      return;
    }

    const b = el as HTMLButtonElement;
    if (b.hasAttribute('data-open')) return track('stone_open');
    if (b.dataset.mode) return track('stone_mode', { mode: b.dataset.mode });
    if (b.dataset.spot) return track('stone_spot', { spot: b.dataset.spot });
    if (b.hasAttribute('data-replay')) return track('wheel_replay');
  });
}
