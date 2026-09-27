/**
 * The Manakathuru stone inscription (Hoysala period, Śaka 1022 / 1101 CE).
 *
 * Source for everything in this file: the village document "ಮನಕತ್ತೂರಿನ ಕಲ್ಬರಹ: ಹೊಯ್ಸಳ ಕಾಲದ ಒಂದು ನೋಟ",
 * which is based on B. L. Rice, Epigraphia Carnatica, Vol. 5 (Hassan District).
 * The text below is the original Old Kannada rendered in modern Kannada script, as given in that document.
 */
import type { Lang } from '../i18n';

type T = Record<Lang, string>;

/** Line 1 is carved in an arch at the top of the stone (see note in the source document). */
export const lines: string[] = [
  'ಶ್ರೀ ಮೂಲಸ್ತಾನದೇವರ ಪಾದಾರಾದಕ ಮೂಲಸ್ತಾನದೇವರ ದೇವಾಲ್ಯವಂ ಕಳಸನಿರ್ಮ್ಮಾಣ ಮಾಡಿದ ಕರ್ತ್ತಾರಜೀಯರ ಸು[ಪು]ತ್ರ ಈಸಾನ್ಯಪಣ್ಡಿತದೇವರು',
  'ನಮಸ್ತುಂಗ ಶಿರಸ್ತುಂಬಿ ಚಂದ್ರ ಚಾಮರ ಚಾರವೇ ತ್ರೈಳೋಕ್ಯ ನಗರಾರಂಬಮೂಲಸ್ತಂಭಾಯ ಶಂಭವೇ ||',
  'ಸ್ವಸ್ತಿ ಸಮಧಿಗತ ಪಂಚಮಹಾಶಬ್ದ ಮಹಾಮಂಡಳೇಶ್ವರಂ | ದ್ವಾರವ',
  '-ತೀಪುರ ವರಾಧೀಶ್ವರಂ | ಯದುಕುಳ ಕುವಳಯಸುದಾಕರಂ ಸತ್ಯ ರತ್ನಾಕರಂ |',
  'ಯಾದವನಾರಾಯಣಂ | ಚತುರ ಯುವತೀ ಚಾರಾಯಣಂ | ಚಕ್ರಕೂಟ ಕೋಟಾಟ',
  'ವೀದಾವಾನಳಂ | ರಿಪುಬಳಜಳಧಿಬಡವಾನಳಂ | ಶೌರ್ಯ್ಯಮೃಗರಾಜಂ |',
  'ಮಲೆರಾಜರಾಜಂ | ಕಳಪಾಳ ಕಪಾಳ ಶೈಳೋಪ[ಲ]ವಜ್ರದಣ್ಡ ಮಲೆಪರೊ',
  '-ಳ್ಗಣ್ಡ | ನೃಪಕುಳಕರಿಕಳಭಯೂಥನಾಥಂ | ಗಣ್ಡಗಿರಿನಾಥಂ | ಉದ್ದಂಡಪ್ರಚಂಡಪಾ',
  '-ಣ್ಡ್ಯ ಗರ್ವ್ವಪರ್ವ್ವತಪಾಕಶಾಸನಂ | ವಿವೇಕ ಕಮಳಾಸನಂ | ಜಗದ್ದೇವಪ್ರಬಳಪನ್ನಗವೈನತೇ',
  '-ಯಂ | ಭುಜಬಳರೌಹಿಣೇಯಂ | ನರಸಿಂಹಬ್ರಹ್ಮಭೂರಿಭೂರುಹ ಕಠೋರ ಕು',
  '-ಠಾರಂ | ಚಾರುವಿಚಾರಂ | ಇರುಂಗೊಳಮದಮರಾಳಮೇಘಾರವಂ | ಪುರುಷಾರ್ತ್ಥಪುರೂರವಂ | ವಿಜಯಲಕ್ಷ್ಮೀಭವನ',
  'ಮಂಗಳಮಣಿತೋರಣಂ | ಆದಿಯಮನಿವಾರಣ | ಮಣ್ಡಳಿಕ ಘಟಸರ್ಪ್ಪ | ರೂಪ ಕಂದರ್ಪ್ಪ | ಕೌಸ್ತು',
  'ಭಾಭರಣಸ್ಮರಣಪರಿಣತಾನ್ತಃಕರಣ | ವಿಕ್ರಮಾಭರಣ | ತಳಕಾಡುಗೊಂಡಗಂಡ | ಕದನ ಪ್ರಚಂಡ',
  'ಬೆಂಗಿರಿಮತಂಗಚಾರಿಸರಭ | ಆದಿರಾಜಸನ್ನಿಭ | ವಾಸನ್ತಿಕಾದೇವೀಲಬ್ಧವರಪ್ರಸಾದಂ | ಮೃಗಮದಾಮೋದಂ | ನಾ',
  '-ಮಾದಿ ಸಮಸ್ತಪ್ರ[ಶ]ಸ್ತಿ ಸಹಿತಂ | ಶ್ರೀಮನ್ಮಹಾಮಂಡಳೇಶ್ವರ | ತಳಕಾಡುಕೊಂಗುನಂಗಲಿ',
  'ಗಂಗವಾಡಿ ನೊಳಂಬವಾಡಿ ಬನವಾಸೆ ಹಾನುಂಗಲ್ಲುಗೊಂಡ ಭುಜಬಳವೀರಗಂಗ ಕಡಂಬ ವಿಷ್ಣುವರ್ಧನದೇವರು ಗಂಗವಾ',
  '-ಡಿ ತೊಂಬತ್ತಾರುಸಾಯಿರಮಂ ನೊಣಂಬವಾಡಿ ಮೂವತ್ತಿರ್ಛಾಸಿರಮಂ ಹಾನುಂಗಲ್ಲ ಯ್ನೂರಮಂ ದುಷ್ಟನಿಗ್ರಹಶಿಷ್ಟಪ್ರ',
  '-ತಿಪಾಳನದಿ ನಾಳುತ್ತುಂ ಸುಖ ಸಂಕಥಾವಿನೋದದಿಂ | ವಿಜಯರಾಜ್ಯಂಗೆಯ್ಯುತ್ತಮಿರೆ | ಸ್ವಸ್ತಿ ಸಮಸ್ತ',
  'ಕಾಲಾತೀತ ಶಕವರಿಶ ೧೦೨೨ ವಿಕ್ರಮಸಂವತ್ಸರ | ಇಪ್ಪತ್ತೆರಡೆನೆಯಾ ಯುವಸಂವತ್ಸರ ಸ್ವಸ್ತಿ',
  'ಸಮಸ್ತ ಮಹಾಪ್ರಭು ಚಾಮಗಾಉಣ್ಡಂ ಮನಗತೂರಂ ಮಾಡಿ ಅಡಳಗಟ್ಟವಂ ಕಟ್ಟಿಸಿ ಚಾ',
  '-ವೇಸ್ವರದೇವರ ಪ್ರತಿಷ್ಟೆಯಂ ಮಾಡಿ ಧರ್ಮ್ಮಶ್ಚಿತ್ತನಾಗಿ ಹೋದಿಂ ಬಳಿಕ || ಸ್ವಸ್ತಿ ಶ್ರೀಮನ್ಮಹಾ',
  '-ಪ್ರಭು ಸಂಕಗಾವುಣ್ಡನುಂ ಚಟ್ಟಗಾವುಣ್ಡನುಂ ಮನಗತ್ತೂರಂ ಮಾಡಿ ಧರ್ಮಶ್ಚಿತ್ತರಾ',
  '-ಗಿ ಆ ಚಟ್ಟಗಾವುಣ್ಡ | ಚಾವೇಸ್ವರದೇವರ ದೇವಾಲ್ಯವಂ ಗೆಯ್ಸಿ ಕಳಸ ನಿರ್ಬ್ಬಾ',
  '-ಣ ಮಾಡಿ ಆ ಧರ್ಮ್ಮವಂ ಪ್ರತಿಪಾಳಿಸಿ | ಪೂರ್ವ್ವಮರಿಯಾದೆಯಿಂ ಬಿಟ್ಟ ದತ್ತಿ | ಸ್ವಸ್ತಿ ಶ್ರೀಮ',
  '-ನ್ಮಹಾಗುಣ ಸಂಪುಂನ್ಯ ಬಡಗಿ ಚಿಕ್ಕೋಜನ ಮಗ ಮಸಣೋಜ ಚಿಕ್ಕೇಸ್ವರ ದೇವರ ಪ್ರತಿ',
  '-ಷ್ಟೆಯಂ ಮಾಡಿ ಧರ್ಮ್ಮಚಿತ್ತನಾಗಿ || ಚಾವೇಸ್ವರ ದೇವರಿಗೆ ಅಂಗ ಭೋಗಕ್ಕಂ ಸ್ನಾನ ನಿವೇದ್ಯಕಂ |',
  'ನಂದಾದೀವಿಗೆಗಂ ಬಿಟ್ಟ ದತ್ತಿ | ಹಿರಿಯ ಕೆರೆಯ ಕೆಳಗೆ ಗದ್ದೆ ಸಲಗೆ ೨ | ಅದಳ',
  'ಗಟ್ಟದ ಕೆಳಗೆ ಗದ್ದೆ ಸಲಗೆ ೨ | ಬೆದಲೆ ಮೂಲಸ್ತಾನದೇವರಿಗೆ ದೇವಾಲ್ಯದ ಮುಂದೆ ಗದ್ದೆ ಸಲಗೆ ೨ |',
  'ಎರೆಯ ಗದ್ದೆ ಸಲಗೆ ೨ | ಬೆದ್ದಲೆ ತೊರೆಯ ಬಳಿಯ್ದ ಮತ್ತರು ೨ | ಊರ ತೆಂಕಣ',
  'ಹಾಳಕೆಯಿ ಮತ್ತರು ೨ | ಹಡುವಣ ಹೊಲವೇರೆಯ ತಾಱಿಯ ಬಾಗು ಮ',
  '-ತ್ತರು ೧ | ಚಿಕ್ಕೇಸ್ವರದೇವರಿಗೆ ಹಿರಿಯ ಕೆರೆಯ ಕೆಳಗೆ ಗದೆ ಸಲಗೆ ೨ |',
  'ಬೆದ್ದಲೆ ಮತ್ತರು ೧ | ಬ್ರಹ್ಮಪುರಿಯ ಬ್ರಾಹ್ಮಣರಿಗೆ ಗದ್ದೆ ಸಲಗೆ ೧ | ಬೆದ್ದಲೆ ಮತ್ತರು ೭',
  'ಸಂಕಿಮೋಜರಿಗೆ ಗದ್ದೆ ಕೊಳಗ ೧೦ | ಬೆದ್ದಲೆ ಕಂಬ ೧೦೦ | ಇಂತೀ ಸ್ತಾನವಂ | ಹೋಮನೇ',
  '-ಮ ಜಪಸಮಾಧಿಸೀಲಗುಣಸಂಪನ್ನ ರಪ್ಪ ಕರ್ತ್ತಾರಜೀಯರ ಕಾಲಂ ಕಚ್ಚಿ ಧಾರಾ',
  'ಪೂರ್ವ್ವಕ್ಕಂ ಮಾಡಿ ಕೊಟ್ಟರು | ಫಾಲ್ಗುಣ ಸುದ್ಧ ಪಂಚಮೀ ಸೋಮವಾರ ವಿತಿಯಪಾ',
  '-ತ ಉತ್ತರಾಯಣ ಸಂಕ್ರಮಾಣದಲಿಂನ್ತೀ ದರ್ಮ್ಮವಂ ಸಲಿಸಿದಂ ಗಂಗೆ ಗುರುಕ್ಷೇ',
  '-ತ್ರ ವಾರಣಾಸಿಯಲು ಸಹಸ್ರ ಕವಿಲೆಯಂ ಕೋಡು ಕೊಳಗುವಂ ಸುವರ್ನ್ನದಲು ಕಟ್ಟಿಸಿ ಚ',
  '-ತುರ್ವ್ವೇದಪಾಲಕರಪ್ಪ ಬ್ರಾಹ್ಮಣರಿಗೆ ಹಿರಂಣ್ಯ ಸಹಿತ ದಾನಂ ಕೊಟ್ಟ ಫಳವಕ್ಕು',
  'ಇಂತೀ ಧರ್ಮ್ಮವಂ ನಾವನೋರ್ವ್ವ ನಳಿದನಪ್ಪಡೆ ಆ ಕವಿಲೆಯನಾ ಬ್ರಾಹ್ಮಣರಂ ಕೊಂದ ಪಾತಕ',
  'ನಕ್ಕು ಸ್ವದತ್ತಂ ಪರದತ್ತಂ ವಾ ಯೋ ಹರೀ ವಸುಂಧರಾ ಷಷ್ಠಿರ್ವ್ವರಿಷ ಸಹಸ್ರಾಣಿ ಪ್ರರ್ದ ಚಾಯತೇ ಕ್ರಿಮಿ ||',
  'ಚಾವೇಸ್ವರ ದೇವರ ನಂದಾದೀವಿಗೆಗಂ ಬಿಟ್ಟ ಎತ್ತು ಗಾಣ ೧ | ಹಿರಿಯ ಕೆರೆಯ ಕೆಳಗೆ',
  'ಗೌಡುಗಳಿಗೆ ಕೊಡಂಗಿ ಗದ್ದೆ ಸಲಗೆ ೧೨ ಗವುಡಗಟ್ಟ ೨೦ || ಸ್ವಯಂ ಬೆದ್ದಲು ಮತ್ತರು ೧೫',
  'ಇಂನ್ತೀ ಸಾಸನವ ಬರೆದ ಸೇನಭೋವ ಕಾಳಿಮಯ್ಯ | ಬರೆದೆಂ ಮಾರೋಜ',
  'ಮಂಗಳಂ ಮಹಾ ಶ್ರೀ ||',
];

/** How the 44 lines divide up. Line numbers are 1-based and inclusive. */
export const sections: { from: number; to: number; title: T; summary: T }[] = [
  {
    from: 1,
    to: 1,
    title: { kn: 'ಕಮಾನಿನ ಸಾಲು', en: 'The arched heading' },
    summary: {
      kn: 'ಮೂಲಸ್ಥಾನ ದೇವಾಲಯ ಕಟ್ಟಿಸಿ ಕಳಸವಿಟ್ಟ ಈಸಾನ್ಯ-ಪಂಡಿತದೇವರನ್ನು ಹೆಸರಿಸುತ್ತದೆ.',
      en: 'Names Isanya-panditadeva, who built the Moolasthana temple and set up its kalasa.',
    },
  },
  {
    from: 2,
    to: 2,
    title: { kn: 'ಮಂಗಳ ಶ್ಲೋಕ', en: 'Invocation' },
    summary: {
      kn: '“ನಮಸ್ತುಂಗ ಶಿರಸ್ತುಂಬಿ…” — ಶಿವನಿಗೆ ನಮಸ್ಕಾರ; ಕನ್ನಡ ಶಾಸನಗಳ ಆರಂಭದಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಕಾಣುವ ಶ್ಲೋಕ.',
      en: '“Namas tunga-śiras-cumbi…” — a salutation to Shiva (Shambhu), the verse that opens a great many Kannada inscriptions.',
    },
  },
  {
    from: 3,
    to: 18,
    title: { kn: 'ರಾಜನ ಬಿರುದಾವಳಿ', en: "The king's titles (praśasti)" },
    summary: {
      kn: 'ಹೊಯ್ಸಳ ವಿಷ್ಣುವರ್ಧನನ ಬಿರುದುಗಳು ಮತ್ತು ಅವನು ಆಳುತ್ತಿದ್ದ ನಾಡುಗಳು — ಗಂಗವಾಡಿ ೯೬,೦೦೦, ನೊಳಂಬವಾಡಿ ೩೨,೦೦೦, ಹಾನುಂಗಲ್ ೫೦೦.',
      en: 'The titles of the Hoysala Vishnuvardhana and the provinces he ruled — Gangavadi 96,000, Nolambavadi 32,000 and Hanungal 500.',
    },
  },
  {
    from: 18,
    to: 19,
    title: { kn: 'ದಿನಾಂಕ', en: 'The date' },
    summary: {
      kn: 'ಶಕ ವರ್ಷ ೧೦೨೨, ವಿಕ್ರಮ ಸಂವತ್ಸರ; ಜೊತೆಗೆ ಯುವ ಸಂವತ್ಸರದ ಉಲ್ಲೇಖ.',
      en: 'Śaka year 1022, the year named Vikrama; the year Yuva is also mentioned.',
    },
  },
  {
    from: 20,
    to: 26,
    title: { kn: 'ಊರು ಮತ್ತು ದೇವಾಲಯಗಳ ನಿರ್ಮಾಣ', en: 'Founding the village and its temples' },
    summary: {
      kn: 'ಚಾಮ-ಗಾವುಂಡನು ಮನಗತ್ತೂರನ್ನು ಕಟ್ಟಿ, ಅಡಲಗಟ್ಟ ಕಟ್ಟಿಸಿ, ಚಾವೇಶ್ವರನನ್ನು ಪ್ರತಿಷ್ಠಿಸಿದನು. ನಂತರ ಸಂಕ-ಗಾವುಂಡ, ಚಟ್ಟ-ಗಾವುಂಡರು; ಬಡಗಿ ಮಸಣೋಜನು ಚಿಕ್ಕೇಶ್ವರನನ್ನು ಪ್ರತಿಷ್ಠಿಸಿದನು.',
      en: 'Chama-gavunda founds Managatur, builds the Adalagatta and installs Chaveshvara. Then Sanka-gavunda and Chatta-gavunda; the carpenter Masanoja installs Chikkeshvara.',
    },
  },
  {
    from: 26,
    to: 35,
    title: { kn: 'ದತ್ತಿಗಳು', en: 'The grants' },
    summary: {
      kn: 'ದೇವರ ಪೂಜೆ, ಅಭಿಷೇಕ, ನೈವೇದ್ಯ ಮತ್ತು ನಂದಾದೀವಿಗೆಗೆ ಗದ್ದೆ, ಬೆದ್ದಲು (ಒಣ ಭೂಮಿ) ದಾನ; ಫಾಲ್ಗುಣ ಶುದ್ಧ ಪಂಚಮಿ, ಸೋಮವಾರ.',
      en: 'Wet and dry land given for worship, bathing, food offerings and a perpetual lamp; dated Phalguna śuddha pañcamī, Monday.',
    },
  },
  {
    from: 35,
    to: 40,
    title: { kn: 'ಪುಣ್ಯ ಮತ್ತು ಶಾಪ', en: 'Blessing and curse' },
    summary: {
      kn: 'ದತ್ತಿಯನ್ನು ಕಾಪಾಡಿದವರಿಗೆ ಪುಣ್ಯ, ಅಳಿಸಿದವರಿಗೆ ಪಾಪ — ಶಾಸನಗಳ ಸಾಂಪ್ರದಾಯಿಕ ಮುಕ್ತಾಯ.',
      en: 'Merit for those who protect the grant, sin for those who destroy it — the customary close of a grant.',
    },
  },
  {
    from: 41,
    to: 44,
    title: { kn: 'ಹೆಚ್ಚುವರಿ ದತ್ತಿ ಮತ್ತು ಬರೆದವರು', en: 'Further grants and the makers' },
    summary: {
      kn: 'ನಂದಾದೀವಿಗೆಗೆ ಎತ್ತಿನ ಗಾಣ, ಗೌಡರಿಗೆ ಭೂಮಿ; ಬರೆದವನು ಸೇನಬೋವ ಕಾಳಿಮಯ್ಯ, ಕೆತ್ತಿದವನು ಮಾರೋಜ.',
      en: 'An ox-driven oil press for the lamp, land for the gaudas; written by Senabova Kalimayya, engraved by Maroja.',
    },
  },
];

export const people: { name: T; role: T; lines: string }[] = [
  {
    name: { kn: 'ಚಾಮ-ಗಾವುಂಡ', en: 'Chama-gavunda' },
    role: {
      kn: 'ಮಹಾಪ್ರಭು. ಮನಗತ್ತೂರನ್ನು ಕಟ್ಟಿ (ಸ್ಥಾಪಿಸಿ), ಅಡಲಗಟ್ಟವನ್ನು ನಿರ್ಮಿಸಿ, ಚಾವೇಶ್ವರ ದೇವರನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಿದವನು.',
      en: 'A mahaprabhu (chief). Founded Managatur, built the Adalagatta and installed the god Chaveshvara.',
    },
    lines: '20–21',
  },
  {
    name: { kn: 'ಸಂಕ-ಗಾವುಂಡ ಮತ್ತು ಚಟ್ಟ-ಗಾವುಂಡ', en: 'Sanka-gavunda & Chatta-gavunda' },
    role: {
      kn: 'ಇವರೂ ಮನಗತ್ತೂರನ್ನು ಕಟ್ಟಿದರೆಂದು ಶಾಸನ ಹೇಳುತ್ತದೆ. ಚಟ್ಟ-ಗಾವುಂಡನು ಚಾವೇಶ್ವರ ದೇವಾಲಯ ಕಟ್ಟಿಸಿ, ಕಳಸವಿಟ್ಟು, ಹಿಂದಿನ ದತ್ತಿಗಳನ್ನು ನವೀಕರಿಸಿದನು.',
      en: 'Also said to have built Managatur. Chatta-gavunda built the Chaveshvara temple, placed its kalasa and renewed the earlier grants.',
    },
    lines: '21–24',
  },
  {
    name: { kn: 'ಈಸಾನ್ಯ-ಪಂಡಿತದೇವ', en: 'Isanya-panditadeva' },
    role: {
      kn: 'ಕರ್ತ್ತಾರ-ಜೀಯರ ಮಗ. ಮೂಲಸ್ಥಾನ ದೇವಾಲಯವನ್ನು ಕಟ್ಟಿಸಿ ಕಳಸ ಸ್ಥಾಪಿಸಿದವರು.',
      en: 'Son of Karttara-jiya. Built the Moolasthana temple and set up its kalasa.',
    },
    lines: '1',
  },
  {
    name: { kn: 'ಕರ್ತ್ತಾರ-ಜೀಯ', en: 'Karttara-jiya' },
    role: {
      kn: 'ಹೋಮ, ನೇಮ, ಜಪ, ಸಮಾಧಿ, ಶೀಲ ಗುಣಗಳಿಂದ ಕೂಡಿದವರು; ದತ್ತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಿದವರು.',
      en: 'Praised for homa, discipline, japa, meditation and virtue; the receiver of the grants.',
    },
    lines: '1, 34',
  },
  {
    name: { kn: 'ಮಸಣೋಜ', en: 'Masanoja' },
    role: {
      kn: 'ಬಡಗಿ ಚಿಕ್ಕೋಜನ ಮಗ. ಚಿಕ್ಕೇಶ್ವರ ದೇವರನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಿ ದಾನ ಮಾಡಿದವನು.',
      en: 'A carpenter, son of Chikkoja. Installed the god Chikkeshvara and made gifts.',
    },
    lines: '25–26',
  },
  {
    name: { kn: 'ಕಾಳಿಮಯ್ಯ ಮತ್ತು ಮಾರೋಜ', en: 'Kalimayya & Maroja' },
    role: {
      kn: 'ಸೇನಬೋವ (ಊರಿನ ಲೆಕ್ಕಿಗ) ಕಾಳಿಮಯ್ಯ ಶಾಸನವನ್ನು ಬರೆದನು; ಮಾರೋಜ ಅದನ್ನು ಕಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಿದನು.',
      en: 'Kalimayya, the senabova (village accountant), composed the record; Maroja carved it in stone.',
    },
    lines: '43',
  },
];

/** Word notes. `fromDoc` marks meanings given in the village document itself. */
export const glossary: { term: T; meaning: T; fromDoc?: boolean }[] = [
  {
    term: { kn: 'ಸಲಗೆ', en: 'salage' },
    meaning: { kn: '೧/೪ ಮಾನ — ಕಾಳುಗಳನ್ನು ಅಳೆಯುವ ಒಂದು ಅಳತೆ; ಗದ್ದೆಯನ್ನು ಬಿತ್ತುವ ಬೀಜದ ಅಳತೆಯಲ್ಲಿ ಹೇಳಲಾಗಿದೆ.', en: '¼ mana — a grain measure; wet land is measured by the seed it takes.' },
    fromDoc: true,
  },
  {
    term: { kn: 'ಮತ್ತರು', en: 'mattar' },
    meaning: { kn: 'ನೆಲವನ್ನು ಅಳೆಯಲು ಬಳಸುವ ಅಳತೆ.', en: 'A unit for measuring land.' },
    fromDoc: true,
  },
  {
    term: { kn: 'ದ್ವಾರವತೀಪುರ', en: 'Dvaravatipura' },
    meaning: { kn: 'ಬೇಲೂರು ಅಥವಾ ಹಳೇಬೀಡು — ಹೊಯ್ಸಳರ ರಾಜಧಾನಿ.', en: 'Belur or Halebidu — the Hoysala capital.' },
    fromDoc: true,
  },
  {
    term: { kn: 'ಗದ್ದೆ / ಬೆದ್ದಲು', en: 'gadde / beddalu' },
    meaning: { kn: 'ಗದ್ದೆ = ನೀರಾವರಿ ಭೂಮಿ; ಬೆದ್ದಲು = ಮಳೆಯಾಶ್ರಿತ ಒಣ ಭೂಮಿ.', en: 'gadde = wet (irrigated) land; beddalu = dry, rain-fed land.' },
  },
  {
    term: { kn: 'ನಂದಾದೀವಿಗೆ', en: 'nandadivige' },
    meaning: { kn: 'ದೇವರ ಮುಂದೆ ಸದಾ ಉರಿಯುವ ದೀಪ (ನಂದಾದೀಪ).', en: 'A perpetual lamp kept burning before the deity.' },
  },
  {
    term: { kn: 'ಗಾವುಂಡ / ಗೌಡ', en: 'gavunda / gauda' },
    meaning: { kn: 'ಊರಿನ ಮುಖ್ಯಸ್ಥ.', en: 'Village headman.' },
  },
  {
    term: { kn: 'ಸೇನಬೋವ', en: 'senabova' },
    meaning: { kn: 'ಊರಿನ ಲೆಕ್ಕ ಬರೆಯುವವನು (ಶಾನುಭೋಗ).', en: 'Village accountant and record-keeper (later shanubhoga).' },
  },
  {
    term: { kn: 'ಕಳಸ', en: 'kalasa' },
    meaning: { kn: 'ದೇವಾಲಯದ ಶಿಖರದ ಮೇಲಿನ ಪವಿತ್ರ ಕುಂಭ.', en: 'The sacred pot-shaped finial set on top of a temple.' },
  },
  {
    term: { kn: 'ಧಾರಾಪೂರ್ವಕ', en: 'dharapurvaka' },
    meaning: { kn: 'ನೀರೆರೆದು ದಾನ ಮಾಡುವುದು; “ಕಾಲಂ ಕಚ್ಚಿ” (ಕರ್ಚು = ತೊಳೆ) = ಸ್ವೀಕರಿಸುವವರ ಪಾದ ತೊಳೆದು.', en: 'Giving with a pouring of water; “kalam kacchi” = after washing the receiver’s feet.' },
  },
];

export const timeline: { year: T; text: T }[] = [
  {
    year: { kn: 'ಸು. ಕ್ರಿ.ಶ. ೧೦೯೫', en: 'c. 1095 CE' },
    text: { kn: 'ಶಾಸನದಲ್ಲಿ ಉಲ್ಲೇಖಿತ ಯುವ ಸಂವತ್ಸರ.', en: 'The year Yuva, also mentioned in the record.' },
  },
  {
    year: { kn: 'ಕ್ರಿ.ಶ. ೧೧೦೧', en: '1101 CE' },
    text: {
      kn: 'ಶಕ ೧೦೨೨ ಫಾಲ್ಗುಣ ಶುದ್ಧ ಪಂಚಮಿ — ಶಾಸನದ ದಿನಾಂಕ.',
      en: 'Śaka 1022, Phalguna śuddha pañcamī — the date of the inscription.',
    },
  },
  {
    year: { kn: 'ಕ್ರಿ.ಶ. ೧೯೦೨', en: '1902' },
    text: {
      kn: 'ಬಿ. ಎಲ್. ರೈಸ್ ಅವರ “ಎಪಿಗ್ರಾಫಿಯಾ ಕರ್ನಾಟಿಕಾ, ಸಂಪುಟ ೫ (ಹಾಸನ ಜಿಲ್ಲೆ)” ಪ್ರಕಟಣೆ, ಇದರಲ್ಲಿ ಈ ಶಾಸನ ದಾಖಲಾಗಿದೆ.',
      en: 'B. L. Rice publishes Epigraphia Carnatica, Vol. 5 (Hassan District), which records this inscription.',
    },
  },
  {
    year: { kn: '೧೯೬೦–೭೦ರ ದಶಕ', en: '1960s–70s' },
    text: {
      kn: 'ಮನಕತ್ತೂರು ಕೆರೆಯ ಹಳೆಯ ಕೋಡಿಯ ಬಳಿ ಇದ್ದ ಕಲ್ಲನ್ನು ಊರಿನ ಜನರು ದೇವಸ್ಥಾನಕ್ಕೆ ತಂದು ಕಾಪಾಡಿದರು.',
      en: 'Villagers move the stone from near the old outlet (kodi) of the Manakathuru tank to the temple for safekeeping.',
    },
  },
  {
    year: { kn: 'ಇಂದು', en: 'Today' },
    text: {
      kn: 'ಶ್ರೀ ಕಾಲಭೈರವೇಶ್ವರ ದೇವಸ್ಥಾನದ ಆವರಣದಲ್ಲಿ ಸಂರಕ್ಷಿತವಾಗಿದೆ.',
      en: 'Kept safe at the Sri Kalabhairaveshwara Temple.',
    },
  },
];
