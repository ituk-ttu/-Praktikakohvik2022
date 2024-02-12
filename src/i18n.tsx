import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './assets/locales/en.json'
import et from './assets/locales/et.json'
import i18n from 'i18next'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'et',
        resources: {
            en: {
                translation: en
            },
            et: {
                translation: et
            }
        }
    });
