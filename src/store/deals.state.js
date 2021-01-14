import * as types from "@/store/mutation-types";

export const dealsState = {
  namespaced: true,
  state: () => ({
    queueSize: 12,
    deals: []
  }),
  mutations: {
    [types.GET_DEALS_ADD](state, payload) {
      if (state.deals.length === state.queueSize) {
        state.deals.shift();
      }
      state.deals.push(payload);
    },

    [types.GET_DEALS_ERROR](state) {
      state.loading = false;
      state.loaded = false;
    },

    [types.GET_DEALS_CHANGE_QUEUE_SIZE](state, size) {
      state.queueSize = size;
      state.deals = [];
    }
  },
  actions: {
    addDealItem({ commit }, deal) {
      commit(types.GET_DEALS_ADD, deal);
    },
    changeQueueSize({ commit }, size) {
      commit(types.GET_DEALS_CHANGE_QUEUE_SIZE, size);
    }
  }
};
