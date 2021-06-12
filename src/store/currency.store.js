import * as types from "@/store/mutation-types";

const currencyOptions = new Map([
  ["RUB", { id: "RUB", viewValue: "Рубль", currencySymbol: "₽" }],
  ["USD", { id: "USD", viewValue: "Dollar", currencySymbol: "$" }],
  ["CHN", { id: "CHN", viewValue: "元", currencySymbol: "¥" }]
]);

export const currency = {
  namespaced: true,
  state: {
    currency: "USD",
    loaded: false,
    items: []
  },

  getters: {
    currencyData: state => {
      if (state.loaded) {
        const data = state.items.find(item => item.currency === state.currency);
        if (data) {
          return data;
        } else {
          console.log("No currency data found by: " + state.currency);
        }
      }
    },
    currencyOptions: state =>
      state.items
        .filter(x => currencyOptions.has(x.currency))
        .map(x => currencyOptions.get(x.currency)),
    currency: state => state.currency
  },

  mutations: {
    [types.ADD_CURRENCIES](state, currencies) {
      state.items = currencies.data || [];
    },
    [types.SET_CURRENCY](state, currency) {
      state.currency = currency;
    },
    [types.SET_CURRENCY_LOADED](state, loaded) {
      state.loaded = loaded;
    }
  },

  actions: {
    addCurrencies({ commit }, payload) {
      commit(types.ADD_CURRENCIES, payload);
    },
    setCurrency({ commit }, currency) {
      commit(types.SET_CURRENCY, currency);
    },
    setLoaded({ commit }, loaded) {
      commit(types.SET_CURRENCY_LOADED, loaded);
    }
  }
};
