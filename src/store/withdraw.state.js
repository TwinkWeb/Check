import * as types from "@/store/mutation-types";

export const payment = {
  namespaced: true,
  state: () => ({
    currencyPayment: "QIWI",
    paymentTransactionLength: 1,
    paymentTransactions: [],
    disabledState: false,
    loader: false,
    currentTransaction: 1,
    paymentWays: {
      qiwi: "QIWI",
      yomoney: "YOMONEY",
      thether: "Tether",
      Etherium: "Etherium",
      md: "Md",
      bitc: "BITC",
      pm: "PM",
      mdUah: "MdUAH"
    }
  }),

  actions: {
    setNewPayTransaction({ commit }) {
      commit(types.SET_NEW_TRANSACTION);
    },
    setCurrentPayment({ commit }, name) {
      commit(types.SET_CURRENT_PAYMENT, name);
    },
    setDisabledState({ commit }, payload) {
      commit(types.SET_DISABLED_STATE, payload);
    },
    sendRequest({ commit }) {
      commit(types.SET_DISABLED_STATE, true);
      commit(types.SET_LOADER, true);

      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 5000);
      });

      p.then(() => {
        commit(types.SET_LOADER, false);
        setTimeout(() => {
          commit(types.CLEAR_TRANSACTIONS);
          commit(types.SET_DISABLED_STATE, false);
        }, 600);
      }).catch(() => {
        commit(types.SET_DISABLED_STATE, false);
        commit(types.SET_LOADER, false);
      });
    },

    setPaymentTransactions({ commit }, payload) {
      commit(types.SET_PAYMENT_TRANSACTION, payload);
    }
  },
  getters: {
    offerData: s => s.offerData,
    currentTransaction: s => s.currentTransaction,
    validationState: s => {
      const transaction = s.paymentTransactions.find(
        i => i.validation === false
      );
      return transaction || s.paymentTransactions.length === 0 ? true : false;
    },
    currencyPayment: s => s.currencyPayment,
    disabledState: s => s.disabledState,
    loader: s => s.loader,
    paymentWays: s => s.paymentWays,
    paymentTransactionLength: s => s.paymentTransactionLength,
    payTransactions: s => s.paymentTransactions,
    sumPaymentWithCommission: s =>
      s.paymentTransactions.reduce(function(acc, current) {
        if (current.paymentWay === s.paymentWays.qiwi) {
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
      if (transaction) {
        state.currencyPayment = transaction.paymentWay;
      }
    },

    [types.CLEAR_TRANSACTIONS](state) {
      state.paymentTransactions = [];
    },

    [types.SET_CURRENT_PAYMENT](state, payment) {
      payment.num ? (state.currentTransaction = payment.num) : "";

      if (payment.paymentWay) {
        state.currencyPayment = payment.paymentWay;

        state.paymentTransactions[state.currentTransaction - 1].paymentWay =
          payment.paymentWay;
      }
      state.validationError = "";
    },
    [types.SET_LOADER](state, payload) {
      state.loader = payload;
    },

    [types.SET_VALIDATION_ERROR](state, messageError) {
      state.validationError = messageError;
    },

    [types.SET_PAYMENT_TRANSACTION](state, payload) {
      state.currentTransaction = payload.id;
      let filteredTransactions = state.paymentTransactions.filter(
        c => c.id != payload.id
      );

      const paymentTransaction = {
        purse: payload.purse,
        sum: payload.sum,
        id: payload.id,
        validation: payload.validation,
        paymentWay: state.currencyPayment
      };
      filteredTransactions.push(paymentTransaction);
      let sortTransactions = filteredTransactions.sort((a, b) => a.id - b.id);
      state.paymentTransactions = sortTransactions;
    },

    [types.SET_DISABLED_STATE](state, payload) {
      state.disabledState = payload;
    }
  }
};
