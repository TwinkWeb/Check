import store from "@/store/store";

const { userManagementService } = require("@/services/usermanagement.service");

const CurrencyPlugin = Object.create(null);

CurrencyPlugin.install = function(Vue) {
  userManagementService
    .getCurrency()
    .then(data => {
      store.dispatch("currency/addCurrencies", data || []);
      store.dispatch("currency/setLoaded", true);
    })
    .catch(() => store.dispatch("currency/setLoaded", false));

  Vue.prototype.$currency = function(value) {
    const data = store.getters["currency/currencyData"];
    if (data) {
      const { symbol, factor } = data;
      return symbol + (value * factor).toFixed(2);
    } else {
      return value;
    }
  };
};

export default CurrencyPlugin;
