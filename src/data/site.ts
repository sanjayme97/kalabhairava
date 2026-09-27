/**
 * Temple details shown across the site.
 *
 * ► To update the site, edit the values in this file.
 *   Any value set to `null` is shown on the site as "To be updated / ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲಿ".
 */
import type { Lang } from '../i18n';

type T = Record<Lang, string>;

export const temple = {
  name: {
    kn: 'ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ',
    en: 'Sri Kalabhairaveshwara Swamy Temple',
  } as T,
  shortName: { kn: 'ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ', en: 'Sri Kalabhairaveshwara' } as T,
  place: { kn: 'ಮನಕತ್ತೂರು', en: 'Manakathuru' } as T,
  region: {
    kn: 'ಅರಸೀಕೆರೆ ತಾಲ್ಲೂಕು, ಹಾಸನ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ',
    en: 'Arsikere Taluk, Hassan District, Karnataka',
  } as T,
  invocation: { kn: 'ಓಂ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರಾಯ ನಮಃ', en: 'Om Sri Kalabhairaveshwaraya Namah' } as T,

  /** Contact details — fill these in when available. */
  contact: {
    phone: null as string | null, // e.g. '+91 98xxxxxxx'
    whatsapp: null as string | null,
    email: null as string | null,
    committee: null as T | null, // e.g. { kn: 'ದೇವಸ್ಥಾನ ಸಮಿತಿ', en: 'Temple Committee' }
    facebook: 'https://www.facebook.com/kalabhairaveshwara.manakathur/',
  },

  /** Google Maps search link. Replace with an exact pin link once available. */
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kalabhairaveshwara+Temple+Manakathur+Arsikere',
  /** Optional Google Maps embed URL (Share → Embed a map → copy the src="..." value). */
  mapEmbed: null as string | null,
};

/** Daily pooja timings. Replace `null` with the real times, e.g. { kn: 'ಬೆಳಿಗ್ಗೆ ೭:೦೦', en: '7:00 am' }. */
export const timings: { label: T; time: T | null }[] = [
  { label: { kn: 'ದೇವಸ್ಥಾನ ತೆರೆಯುವ ಸಮಯ', en: 'Temple opens' }, time: null },
  { label: { kn: 'ಬೆಳಗಿನ ಪೂಜೆ', en: 'Morning pooja' }, time: null },
  { label: { kn: 'ಮಧ್ಯಾಹ್ನ ಮಹಾಮಂಗಳಾರತಿ', en: 'Midday mahamangalarati' }, time: null },
  { label: { kn: 'ಸಂಜೆ ಪೂಜೆ', en: 'Evening pooja' }, time: null },
  { label: { kn: 'ದೇವಸ್ಥಾನ ಮುಚ್ಚುವ ಸಮಯ', en: 'Temple closes' }, time: null },
];

/**
 * Festivals and special days. `when` describes the traditional timing; `date` can hold
 * this year's exact date once the committee confirms it.
 */
export const festivals: { name: T; when: T; about: T; date: T | null; highlight?: boolean }[] = [
  {
    name: { kn: 'ವಾರ್ಷಿಕ ಜಾತ್ರಾ ಮಹೋತ್ಸವ', en: 'Annual Jatra Mahotsava' },
    when: { kn: 'ದಿನಾಂಕವನ್ನು ದೇವಸ್ಥಾನ ಸಮಿತಿ ಪ್ರಕಟಿಸುತ್ತದೆ', en: 'Dates announced by the temple committee' },
    about: {
      kn: 'ಊರಿನ ಅತಿ ದೊಡ್ಡ ಹಬ್ಬ — ವಿಶೇಷ ಅಲಂಕಾರ, ಉತ್ಸವ ಮತ್ತು ಊರಿನವರೆಲ್ಲ ಸೇರುವ ಸಂಭ್ರಮ.',
      en: 'The biggest celebration of the village — special alankara, the utsava procession and the whole village coming together.',
    },
    date: null,
    highlight: true,
  },
  {
    name: { kn: 'ಕಾಲಾಷ್ಟಮಿ', en: 'Kalashtami' },
    when: { kn: 'ಪ್ರತಿ ತಿಂಗಳ ಕೃಷ್ಣಪಕ್ಷ ಅಷ್ಟಮಿ', en: 'Every month, eighth day of the waning moon (Krishna Paksha Ashtami)' },
    about: {
      kn: 'ಕಾಲಭೈರವನಿಗೆ ಮೀಸಲಾದ ತಿಂಗಳ ವಿಶೇಷ ದಿನ.',
      en: 'The monthly day sacred to Kalabhairava.',
    },
    date: null,
  },
  {
    name: { kn: 'ಕಾಲಭೈರವ ಜಯಂತಿ', en: 'Kalabhairava Jayanti' },
    when: { kn: 'ಮಾರ್ಗಶಿರ ಮಾಸ ಕೃಷ್ಣಪಕ್ಷ ಅಷ್ಟಮಿ (ನವೆಂಬರ್–ಡಿಸೆಂಬರ್)', en: 'Margashira Krishna Ashtami (November–December)' },
    about: {
      kn: 'ಶ್ರೀ ಕಾಲಭೈರವನ ಅವತಾರ ದಿನವೆಂದು ಆಚರಿಸಲಾಗುತ್ತದೆ.',
      en: 'Celebrated as the day Sri Kalabhairava manifested.',
    },
    date: null,
  },
  {
    name: { kn: 'ಕಾರ್ತೀಕ ಸೋಮವಾರಗಳು', en: 'Karthika Mondays' },
    when: { kn: 'ಕಾರ್ತೀಕ ಮಾಸದ ಸೋಮವಾರಗಳು (ಅಕ್ಟೋಬರ್–ನವೆಂಬರ್)', en: 'Mondays of Karthika month (October–November)' },
    about: { kn: 'ದೀಪೋತ್ಸವ ಮತ್ತು ವಿಶೇಷ ಪೂಜೆ.', en: 'Lamps and special poojas.' },
    date: null,
  },
  {
    name: { kn: 'ಮಹಾಶಿವರಾತ್ರಿ', en: 'Maha Shivaratri' },
    when: { kn: 'ಮಾಘ ಮಾಸ ಕೃಷ್ಣಪಕ್ಷ ಚತುರ್ದಶಿ (ಫೆಬ್ರವರಿ–ಮಾರ್ಚ್)', en: 'Magha Krishna Chaturdashi (February–March)' },
    about: { kn: 'ರಾತ್ರಿಯಿಡೀ ಜಾಗರಣೆ ಮತ್ತು ಅಭಿಷೇಕ.', en: 'Night-long vigil and abhisheka.' },
    date: null,
  },
  {
    name: { kn: 'ಯುಗಾದಿ', en: 'Ugadi' },
    when: { kn: 'ಚೈತ್ರ ಶುದ್ಧ ಪಾಡ್ಯ (ಮಾರ್ಚ್–ಏಪ್ರಿಲ್)', en: 'Chaitra Shuddha Padya (March–April)' },
    about: { kn: 'ಹೊಸ ವರ್ಷದ ವಿಶೇಷ ಪೂಜೆ.', en: 'New Year special pooja.' },
    date: null,
  },
];

/** Gallery photos. Add new photos to /public/images and list them here. */
export const photos: { src: string; w: number; h: number; alt: T; caption: T }[] = [
  {
    src: 'images/kalabhairaveshwara-pushpa-alankara.jpg',
    w: 372,
    h: 824,
    alt: {
      kn: 'ಹೂವಿನ ಹಾರಗಳು ಮತ್ತು ದೀಪಗಳೊಂದಿಗೆ ಅಲಂಕೃತರಾದ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ, ಪಕ್ಕದಲ್ಲಿ ತ್ರಿಶೂಲ',
      en: 'Sri Kalabhairaveshwara Swamy decorated with flower garlands and lamps, with a trishula beside',
    },
    caption: { kn: 'ಪುಷ್ಪಾಲಂಕಾರದಲ್ಲಿ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ', en: 'Sri Kalabhairaveshwara in floral alankara' },
  },
  {
    src: 'images/kalabhairaveshwara-belli-prabhavali.jpg',
    w: 553,
    h: 555,
    alt: {
      kn: 'ಬೆಳ್ಳಿಯ ಪ್ರಭಾವಳಿ ಮತ್ತು ಮಲ್ಲಿಗೆ ಹಾರಗಳೊಂದಿಗೆ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ',
      en: 'Sri Kalabhairaveshwara Swamy with a silver prabhavali and jasmine garlands',
    },
    caption: { kn: 'ಬೆಳ್ಳಿ ಪ್ರಭಾವಳಿಯೊಂದಿಗೆ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ', en: 'Sri Kalabhairaveshwara with the silver prabhavali' },
  },
];

export const tbd: T = { kn: 'ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲಿ', en: 'To be updated' };
