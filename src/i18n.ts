export type Lang = 'kn' | 'en';

/** Page slugs shared by both languages. Kannada lives at the root, English under /en/. */
export const pages = ['', 'temple', 'poojas', 'inscription', 'gallery', 'visit'] as const;
export type Page = (typeof pages)[number];

export const nav: Record<Lang, Record<Page, string>> = {
  kn: {
    '': 'ಮುಖಪುಟ',
    temple: 'ದೇವಾಲಯ',
    poojas: 'ಪೂಜೆ ಮತ್ತು ಉತ್ಸವ',
    inscription: 'ಶಾಸನ',
    gallery: 'ಚಿತ್ರಸಂಪುಟ',
    visit: 'ಭೇಟಿ ಮತ್ತು ಸಂಪರ್ಕ',
  },
  en: {
    '': 'Home',
    temple: 'The Temple',
    poojas: 'Poojas & Festivals',
    inscription: 'Inscription',
    gallery: 'Gallery',
    visit: 'Visit & Contact',
  },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Link to a page in the given language, e.g. href('en', 'temple') → /kalabhairava/en/temple/ */
export function href(lang: Lang, page: Page | string = ''): string {
  const parts = [lang === 'en' ? 'en' : '', page].filter(Boolean).join('/');
  return `${base}/${parts}${parts ? '/' : ''}`;
}

/** Path to a file in /public. */
export function asset(path: string): string {
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Western digits → Kannada digits. */
export function knDigits(s: string | number): string {
  return String(s).replace(/[0-9]/g, (d) => '೦೧೨೩೪೫೬೭೮೯'[Number(d)]);
}

export function num(lang: Lang, s: string | number): string {
  return lang === 'kn' ? knDigits(s) : String(s);
}
