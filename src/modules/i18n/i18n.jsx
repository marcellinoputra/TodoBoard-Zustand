import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import './translation/en.json';
// import './translation/id.json';
// import './translation/jp.json';
import session from '../session';
import { SESSION_STORAGE_KEY as LanguageKey } from '../language';

const userLanguage = session.get(LanguageKey)?.Language ?? 'en';

// console.log(`DDDDDDDDDDDD ${userLanguage}`);

// const resource = {
// //   en: raw,
// //   jp: jpn,
// //   id: idn,
// // };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      app_header: {
        Title: 'Todo List',
      },
      app_header_language: {
        English: 'English',
        Indonesia: 'Indonesia',
        Japan: 'Japan',
      },
      app_progress: {
        PLANNED: 'PLANNED',
        ONGOING: 'ONGOING',
        Done: 'DONE',
      },
    },
    id: {
      app_header: {
        Title: 'Todo List',
      },
      app_header_language: {
        English: 'English',
        Indonesia: 'Indonesia',
        Japan: 'Jepang',
      },
      app_progress: {
        PLANNED: 'Di Rencanakan',
        ONGOING: 'Sedang Dalam Proses',
        DONE: 'Selesai',
      },
    },
    jp: {
      app_header: {
        Title: 'トドリスト',
      },
      app_header_language: {
        English: '英語',
        Indonesia: 'インドネシア',
        Japan: 'ジャップ',
      },
      app_progress: {
        PLANNED: '予定',
        ONGOING: '進歩について',
        DONE: '完了',
      },
    },
  },
  lng: `${userLanguage}`,
  fallbackLng: userLanguage,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
