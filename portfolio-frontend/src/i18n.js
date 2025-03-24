import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

i18n
  .use(LocalStorageBackend)
  .use(HttpBackend) // Loads translations from public/locales
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Enables i18next in React
  .init({
    fallbackLng: "fr", // Default language
    debug: true, // Debugging (disable in production)
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
