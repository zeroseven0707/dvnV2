import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isServer = typeof window === 'undefined';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: !isServer, // Enable debug only on the client-side
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: isServer ? `${process.env.BASE_URL}/locales/{{lng}}/{{ns}}.json` : '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
