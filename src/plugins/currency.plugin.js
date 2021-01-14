import store from "@/store/store";

const { currencyService } = require("@/services/currency.service");

const CurrencyPlugin = Object.create(null);

CurrencyPlugin.install = function(Vue) {
  currencyService
    .getCurrency()
    .then(data => {
      store.dispatch("currency/addCurrencies", data);
      store.dispatch("currency/setLoaded", true);
    })
    .catch(() => store.dispatch("currency/setLoaded", false));

  Vue.prototype.$currency = function(value) {
    const data = store.getters["currency/currencyData"];
    if (data) {
      const { symbol, factor } = data;
      return symbol + value * factor;
    } else {
      return value;
    }
  };
};

export default CurrencyPlugin;
