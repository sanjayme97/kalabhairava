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
      kn: 'ಊರಿನ ಅತಿ ದೊಡ್ಡ ಹಬ್ಬ. ಶೃಂಗರಿಸಿದ ರಥವನ್ನು ಭಕ್ತರು ಎಳೆಯುವ ರಥೋತ್ಸವ.',
      en: 'The biggest celebration of the village: the rathotsava, when devotees pull the decorated chariot.',
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
    name: { kn: 'ಕಾರ್ತೀಕ ದೀಪೋತ್ಸವ', en: 'Karthika Deepotsava' },
    when: { kn: 'ಕಾರ್ತೀಕ ಮಾಸ (ಅಕ್ಟೋಬರ್–ನವೆಂಬರ್)', en: 'Karthika month (October–November)' },
    about: {
      kn: 'ದೀಪಾಲಂಕೃತ ದೇವಸ್ಥಾನ. ಉರಿಯುವ ಆರತಿಯನ್ನು ತಲೆಯ ಮೇಲೆ ಹೊತ್ತ ಭಕ್ತರ ದೀಪಗಳ ಮೆರವಣಿಗೆ.',
      en: 'The temple lit from top to bottom, and a procession of devotees carrying blazing aarati lamps on their heads.',
    },
    date: null,
    highlight: true,
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

/**
 * Photos. Put the image in /public/images and add an entry here.
 * `src` is the full-size file; if a smaller `-sm.jpg` version exists, set `small: true`.
 * `category` groups photos on the gallery page.
 */
export type PhotoCategory = 'deity' | 'jatre' | 'deepotsava' | 'temple' | 'inscription';

export const photoCategories: Record<PhotoCategory, T> = {
  deity: { kn: 'ಸ್ವಾಮಿಯ ದರ್ಶನ', en: 'Darshan' },
  jatre: { kn: 'ಜಾತ್ರಾ ಮಹೋತ್ಸವ', en: 'Jatra Mahotsava' },
  deepotsava: { kn: 'ಕಾರ್ತೀಕ ದೀಪೋತ್ಸವ', en: 'Karthika Deepotsava' },
  temple: { kn: 'ದೇವಸ್ಥಾನ', en: 'The temple' },
  inscription: { kn: 'ಶಾಸನ ಕಲ್ಲು', en: 'The inscription stone' },
};

export type Photo = {
  src: string;
  small?: boolean;
  w: number;
  h: number;
  category: PhotoCategory;
  alt: T;
  caption: T;
};

export const photos = {
  pushpaAlankara: {
    src: 'images/kalabhairaveshwara-pushpa-alankara.jpg',
    w: 372,
    h: 824,
    category: 'deity',
    alt: {
      kn: 'ಹೂವಿನ ಹಾರಗಳು ಮತ್ತು ದೀಪಗಳೊಂದಿಗೆ ಅಲಂಕೃತರಾದ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ, ಪಕ್ಕದಲ್ಲಿ ತ್ರಿಶೂಲ',
      en: 'Sri Kalabhairaveshwara Swamy decorated with flower garlands and lamps, with a trishula beside',
    },
    caption: { kn: 'ಪುಷ್ಪಾಲಂಕಾರದಲ್ಲಿ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ', en: 'Sri Kalabhairaveshwara in floral alankara' },
  },
  belliPrabhavali: {
    src: 'images/kalabhairaveshwara-belli-prabhavali.jpg',
    w: 553,
    h: 555,
    category: 'deity',
    alt: {
      kn: 'ಬೆಳ್ಳಿಯ ಪ್ರಭಾವಳಿ ಮತ್ತು ಮಲ್ಲಿಗೆ ಹಾರಗಳೊಂದಿಗೆ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ',
      en: 'Sri Kalabhairaveshwara Swamy with a silver prabhavali and jasmine garlands',
    },
    caption: { kn: 'ಬೆಳ್ಳಿ ಪ್ರಭಾವಳಿಯೊಂದಿಗೆ ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ', en: 'Sri Kalabhairaveshwara with the silver prabhavali' },
  },
  rathaCrowd: {
    src: 'images/rathotsava-crowd.jpg',
    small: true,
    w: 1600,
    h: 1200,
    category: 'jatre',
    alt: {
      kn: 'ಬಣ್ಣದ ಬಟ್ಟೆ, ಹೂವಿನ ಹಾರ ಮತ್ತು ತೆಂಗಿನಕಾಯಿಗಳಿಂದ ಅಲಂಕರಿಸಿದ ರಥ, ಸುತ್ತಲೂ ಭಕ್ತರ ದೊಡ್ಡ ಜನಸಂದಣಿ',
      en: 'The chariot decked with coloured cloth, flower garlands and coconuts, surrounded by a large crowd of devotees',
    },
    caption: { kn: 'ಜಾತ್ರೆಯ ರಥೋತ್ಸವ', en: 'The rathotsava (chariot festival) at the jatra' },
  },
  rathaBanana: {
    src: 'images/rathotsava-banana.jpg',
    small: true,
    w: 1200,
    h: 1600,
    category: 'jatre',
    alt: {
      kn: 'ಕೇಸರಿ ಧ್ವಜಗಳಿರುವ ಎತ್ತರದ ರಥದತ್ತ ಭಕ್ತರು ಬಾಳೆಹಣ್ಣು ಎಸೆಯುತ್ತಿರುವುದು',
      en: 'Devotees tossing bananas towards the tall chariot with saffron flags',
    },
    caption: { kn: 'ರಥಕ್ಕೆ ಬಾಳೆಹಣ್ಣು ಅರ್ಪಿಸುತ್ತಿರುವ ಭಕ್ತರು', en: 'Devotees offering bananas to the chariot' },
  },
  nightGopura: {
    src: 'images/deepotsava-gopura.jpg',
    small: true,
    w: 1200,
    h: 1600,
    category: 'deepotsava',
    alt: {
      kn: 'ದೀಪಾಲಂಕೃತ ದೇವಸ್ಥಾನದ ಮುಂಭಾಗ; ತಲೆಯ ಮೇಲೆ ಉರಿಯುವ ಆರತಿ ಹೊತ್ತ ಭಕ್ತರು',
      en: 'The illuminated temple front at night, with devotees carrying blazing aarati lamps on their heads',
    },
    caption: { kn: 'ಕಾರ್ತೀಕ ದೀಪೋತ್ಸವ: ಆರತಿ ಹೊತ್ತ ಭಕ್ತರು', en: 'Karthika Deepotsava: devotees carrying aarati' },
  },
  nightGopura2: {
    src: 'images/deepotsava-gopura-2.jpg',
    small: true,
    w: 1200,
    h: 1600,
    category: 'temple',
    alt: {
      kn: 'ಬಣ್ಣದ ದೀಪಗಳಿಂದ ಬೆಳಗುವ ದೇವಸ್ಥಾನದ ಗೋಪುರ ಮತ್ತು ಕೇಸರಿ ಧ್ವಜ; ಕೆಳಗೆ ಆರತಿ ಮೆರವಣಿಗೆ',
      en: 'The temple tower glowing with coloured lights under a saffron flag, with the aarati procession below',
    },
    caption: { kn: 'ದೀಪೋತ್ಸವಕ್ಕೆ ದೀಪಾಲಂಕೃತ ದೇವಸ್ಥಾನ', en: 'The temple lit up for the Deepotsava' },
  },
  nightAarati: {
    src: 'images/deepotsava-aarati.jpg',
    small: true,
    w: 1200,
    h: 1600,
    category: 'deepotsava',
    alt: {
      kn: 'ದೇವಸ್ಥಾನದ ಬಾಗಿಲಿನ ಮುಂದೆ ಉರಿಯುವ ಆರತಿಗಳನ್ನು ಹೊತ್ತು ಸಾಗುತ್ತಿರುವ ಭಕ್ತರು',
      en: 'Devotees carrying flaming aarati past the temple entrance',
    },
    caption: { kn: 'ದೀಪಗಳ ಮೆರವಣಿಗೆ', en: 'The procession of lamps' },
  },
  nightProcession: {
    src: 'images/deepotsava-procession.jpg',
    small: true,
    w: 1600,
    h: 1200,
    category: 'deepotsava',
    alt: {
      kn: 'ದೀಪಗಳಿಂದ ಅಲಂಕೃತ ದೇವಸ್ಥಾನದ ಮೆಟ್ಟಿಲುಗಳಿಂದ ಕಾಣುವ, ಬೀದಿಯುದ್ದಕ್ಕೂ ಸಾಗುವ ಆರತಿಗಳ ಸಾಲು',
      en: 'A long line of lit aarati moving down the street, seen from the steps of the illuminated temple',
    },
    caption: { kn: 'ಬೀದಿಯುದ್ದಕ್ಕೂ ಆರತಿಗಳ ಸಾಲು', en: 'A river of lamps down the village street' },
  },
  nightLights: {
    src: 'images/deepotsava-lights.jpg',
    small: true,
    w: 1200,
    h: 1600,
    category: 'deepotsava',
    alt: {
      kn: 'ಸಾವಿರಾರು ದೀಪಗಳಿಂದ ಅಲಂಕರಿಸಿದ ದೇವಸ್ಥಾನದ ಗೋಪುರದ ಪಕ್ಕದಲ್ಲಿ ಆರತಿ ಮೆರವಣಿಗೆ',
      en: 'The aarati procession beside the temple tower strung with thousands of lights',
    },
    caption: { kn: 'ದೀಪಗಳ ಬೆಳಕಿನಲ್ಲಿ ಗೋಪುರ', en: 'The tower in festival lights' },
  },
  templeNight: {
    src: 'images/temple-night-view.jpg',
    small: true,
    w: 1600,
    h: 1200,
    category: 'temple',
    alt: {
      kn: 'ದೂರದಿಂದ ಕಾಣುವ ದೀಪಾಲಂಕೃತ ದೇವಸ್ಥಾನ, ರಾತ್ರಿಯ ಹೊತ್ತು',
      en: 'The temple glowing with festival lights, seen from a distance at night',
    },
    caption: { kn: 'ರಾತ್ರಿಯಲ್ಲಿ ದೇವಸ್ಥಾನ', en: 'The temple by night' },
  },
  stone: {
    src: 'images/shasana-stone.jpg',
    small: true,
    w: 720,
    h: 1600,
    category: 'inscription',
    alt: {
      kn: 'ದೇವಸ್ಥಾನದ ಆವರಣದಲ್ಲಿ ಕಪ್ಪು ಕಲ್ಲಿನ ಪೀಠದ ಮೇಲೆ ನಿಲ್ಲಿಸಿರುವ, ಕಮಾನಿನಾಕಾರದ ಮೇಲ್ಭಾಗವಿರುವ ಹೊಯ್ಸಳ ಕಾಲದ ಶಾಸನ ಕಲ್ಲು',
      en: 'The Hoysala-period inscription stone with its arched top, standing on a black stone base at the temple',
    },
    caption: { kn: 'ಮನಕತ್ತೂರಿನ ಶಾಸನ ಕಲ್ಲು (ಕ್ರಿ.ಶ. ೧೧೦೧)', en: 'The Manakathuru inscription stone (1101 CE)' },
  },
  stoneRelief: {
    src: 'images/shasana-relief.jpg',
    small: true,
    w: 1500,
    h: 1000,
    category: 'inscription',
    alt: {
      kn: 'ಶಾಸನ ಕಲ್ಲಿನ ಮೇಲ್ಭಾಗದ ಶಿಲ್ಪ: ನಡುವೆ ಶಿವಲಿಂಗ, ಎಡಕ್ಕೆ ಕುಳಿತ ಭಕ್ತ, ಬಲಕ್ಕೆ ಕರುವಿನೊಂದಿಗೆ ಹಸು, ಮೇಲೆ ಚಂದ್ರ ಸೂರ್ಯರು; ಕಮಾನಿನ ಅಂಚಿನಲ್ಲಿ ಅಕ್ಷರಗಳು',
      en: 'Sculpted panel at the top of the stone: a Shiva linga in the centre, a seated worshipper to the left, a cow with her calf to the right, the moon and sun above, and letters running along the arch',
    },
    caption: { kn: 'ಮೇಲ್ಭಾಗದ ಶಿಲ್ಪ ಮತ್ತು ಕಮಾನಿನ ಸಾಲು', en: 'The sculpted panel and the arched first line' },
  },
  stoneSide: {
    src: 'images/shasana-stone-side.jpg',
    small: true,
    w: 720,
    h: 1600,
    category: 'inscription',
    alt: {
      kn: 'ಶಾಸನ ಕಲ್ಲಿನ ಸಮೀಪ ನೋಟ — ಕಲ್ಲಿನ ಮೈಮೇಲೆ ಸಾಲು ಸಾಲಾಗಿ ಕೆತ್ತಿದ ಹಳಗನ್ನಡ ಅಕ್ಷರಗಳು',
      en: 'A closer view of the stone — rows of Old Kannada letters carved across its face',
    },
    caption: { kn: 'ಕಲ್ಲಿನ ಮೇಲಿನ ಅಕ್ಷರಗಳು', en: 'The carved letters' },
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

/** Order of photos on the gallery page. */
export const galleryOrder: PhotoId[] = [
  'nightGopura',
  'rathaCrowd',
  'pushpaAlankara',
  'nightProcession',
  'rathaBanana',
  'belliPrabhavali',
  'nightGopura2',
  'templeNight',
  'nightLights',
  'nightAarati',
  'stone',
  'stoneRelief',
  'stoneSide',
];

export const tbd: T = { kn: 'ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲಿ', en: 'To be updated' };
