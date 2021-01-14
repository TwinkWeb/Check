import * as types from "@/store/mutation-types";

export const payment = {
  namespaced: true,
  state: () => ({
    currencyPayment: "QIWI",
    paymentTransactionLength: 1,
    paymentTransactions: [],
    disabledState: false,
    paymentWays: [
      { name: "QIWI" },
      { name: "YOMONEY" },
      { name: "Tether" },
      { name: "Etherium" },
      { name: "Md" },
      { name: "BITC" },
      { name: "PM" },
      { name: "Md UAH" }
    ]
  }),

  actions: {
    setNewPayTransaction({ commit }) {
      commit(types.SET_NEW_TRANSACTION);
    },
    setCurrentPayment({ commit }, name) {
      commit(types.SET_CURRENT_PAYMENT, name);
    },
    sendRequest({ commit }) {
      commit(types.SET_DISABLED_STATE, true);
      setTimeout(() => {
        commit(types.SET_DISABLED_STATE, false);
      }, 3000);
    },

    setPaymentTransactions({ commit }, payload) {
      commit(types.SET_PAYMENT_TRANSACTION, payload);
    }
  },
  getters: {
    offerData: s => s.offerData,
    currencyPayment: s => s.currencyPayment,
    disabledState: s => s.disabledState,
    paymentWays: s => s.paymentWays,
    paymentTransactionLength: s => s.paymentTransactionLength,
    payTransactions: s => s.paymentTransactions,
    sumPaymentWithCommission: s =>
      s.paymentTransactions.reduce(function(acc, current) {
        if (current.paymentWay === "QIWI") {
          return acc + Number(current.sum) * 0.02;
        } else {
          return acc;
        }
      }, 0),
    sumPaymentTransactions: s =>
      s.paymentTransactions.reduce(function(acc, current) {
        return acc + Number(current.sum);
      }, 0)
  },

  mutations: {
    [types.SET_NEW_TRANSACTION](state) {
      if (state.paymentTransactionLength === 3) {
        return;
      } else {
        state.paymentTransactionLength++;
      }
    },
    [types.SET_TAB_PAYMENT](state, payload) {
      const transaction = state.paymentTransactions.find(c => c.id === payload);
      console.log(transaction);
      if (transaction) {
        state.currencyPayment = transaction.paymentWay;
      }
    },
    [types.SET_CURRENT_PAYMENT](state, payment) {
      state.currencyPayment = payment;
      state.validationError = "";
    },

    [types.SET_VALIDATION_ERROR](state, messageError) {
      state.validationError = messageError;
    },

    [types.SET_PAYMENT_TRANSACTION](state, payload) {
      let filteredTransactions = state.paymentTransactions.filter(
        c => c.id != payload.id
      );

      const paymentTransaction = {
        purse: payload.purse,
        sum: payload.sum,
        id: payload.id,
        paymentWay: state.currencyPayment
      };
      filteredTransactions.push(paymentTransaction);
      state.paymentTransactions = filteredTransactions;
    },

    [types.SET_DISABLED_STATE](state, payload) {
      state.disabledState = payload;
    }
  }
};
