import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import raw from './translation/en.json';
import idn from './translation/id.json';
import jpn from './translation/jp.json';
import Session from '../session/index';
import { SESSION_STORAGE_KEY as LanguageKey } from '../language';

const userLanguage = Session.getSession(LanguageKey)?.Language ?? 'en';

const resource = {
  en: raw,
  jp: jpn,
  id: idn,
};
i18n.use(initReactI18next).init({
  resource,
  lng: `${userLanguage}`,
  fallbacklng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
