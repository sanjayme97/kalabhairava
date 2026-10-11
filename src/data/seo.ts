/**
 * Search: the spellings people actually type, and structured data for Google.
 * Add a spelling here and it appears in the meta tags and the structured data.
 */
import { temple } from './site';

export const spellings = {
  village: ['Manakathuru', 'Manakathur', 'Manakatur', 'Manakaturu', 'Manakatthuru', 'Managatur', 'Managathur', 'ಮನಕತ್ತೂರು'],
  temple: [
    'Sri Kalabhairaveshwara Swamy Temple',
    'Kalabhairaveshwara Temple',
    'Kalabhairava Temple',
    'Kala Bhairaveshwara Temple',
    'Shree Kaala Byraveshwara Temple',
    'Kalabyraveshwara Temple',
    'Kalabairaveshwara Temple',
    'Kalabhairaveswara Temple',
    'ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ',
    'ಕಾಲಭೈರವೇಶ್ವರ ದೇವಸ್ಥಾನ',
  ],
  nearby: ['Banavara', 'Arsikere', 'Kadur', 'Hassan', 'ಬಾಣಾವರ', 'ಅರಸೀಕೆರೆ', 'ಹಾಸನ'],
};

export const keywords = [
  ...spellings.temple,
  ...spellings.village,
  'Manakathuru temple',
  'Manakathur temple',
  'Kalabhairava temple Arsikere',
  'Kalabhairava temple near Banavara',
  'Manakathuru inscription',
  'Manakathur shasana',
  'Hoysala inscription Arsikere',
  'ಮನಕತ್ತೂರು ಶಾಸನ',
  'ಕಾಲಭೈರವೇಶ್ವರ ಜಾತ್ರೆ',
  'ಕಾರ್ತೀಕ ದೀಪೋತ್ಸವ ಮನಕತ್ತೂರು',
].join(', ');

export const geo = { lat: 13.436204, lng: 76.170647 };

/** schema.org data for the temple, shared by every page. */
export function templeJsonLd(siteUrl: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HinduTemple',
    '@id': `${siteUrl}#temple`,
    name: temple.name.en,
    alternateName: [...spellings.temple.filter((n) => n !== temple.name.en), temple.name.kn],
    description:
      'Temple of Sri Kalabhairaveshwara in Manakathuru (also written Manakathur or Manakatur) village, near Banavara, Arsikere Taluk, Hassan District, Karnataka. Known for its annual jatra and Karthika Deepotsava, and home to a Hoysala-period stone inscription of 1101 CE.',
    url: siteUrl,
    image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manakathuru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
      streetAddress: 'Manakathuru, near Banavara, Arsikere Taluk, Hassan District',
    },
    geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
    hasMap: temple.mapUrl,
    containedInPlace: {
      '@type': 'Place',
      name: 'Manakathuru',
      alternateName: spellings.village.filter((v) => v !== 'Manakathuru'),
    },
  };
}

/** schema.org data for the inscription page. */
export function inscriptionJsonLd(pageUrl: string, siteUrl: string, image: string, lang: 'kn' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: lang === 'kn' ? 'ಮನಕತ್ತೂರಿನ ಕಲ್ಬರಹ: ಹೊಯ್ಸಳ ಕಾಲದ ಒಂದು ನೋಟ' : 'The Manakathuru Inscription: a glimpse of the Hoysala age',
    inLanguage: lang === 'kn' ? 'kn-IN' : 'en-IN',
    image,
    url: pageUrl,
    about: {
      '@type': 'CreativeWork',
      name: 'Manakathuru inscription (Manakathur shasana)',
      alternateName: ['ಮನಕತ್ತೂರಿನ ಶಾಸನ', 'ಮನಕತ್ತೂರಿನ ಕಲ್ಬರಹ', 'Manakatur inscription'],
      dateCreated: '1101',
      description:
        'Old Kannada stone inscription of Saka 1022 (1101 CE), from the time of the Hoysala king Vishnuvardhana, naming the gavundas who founded Managatur (Manakathuru). Recorded in Epigraphia Carnatica, Vol. 5 (Hassan District).',
      locationCreated: { '@id': `${siteUrl}#temple` },
    },
    isPartOf: { '@type': 'WebSite', name: temple.name.en, url: siteUrl },
  };
}
