import Vue from "vue";
import VueI18n from "vue-i18n";
import { browserLocale, supportedLocalesInclude } from "@/utils/browser-locale";
import numberFormats from "@/locales/number-formats";
import dateTimeFormats from "@/locales/date-formats";

Vue.use(VueI18n);

export const LOCAL_STORAGE_I18N_KEY = `i18n_storage_key`;

function loadLocaleMessages() {
  const locales = require.context(
    "../locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function getStartingLocale() {
  const _storageLocale = localStorage.getItem(LOCAL_STORAGE_I18N_KEY);
  const _browserLocale = browserLocale({ countryCodeOnly: true });
  const locale = _storageLocale || _browserLocale;

  if (supportedLocalesInclude(locale)) {
    return locale;
  } else {
    return "en";
  }
}

export default new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: "en",
  numberFormats,
  dateTimeFormats,
  messages: loadLocaleMessages()
});
