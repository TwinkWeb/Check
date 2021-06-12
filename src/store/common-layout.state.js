import * as types from "@/store/mutation-types";

export const commonLayoutModule = {
  namespaced: true,
  state: () => ({
    collapsed: true,
    buttonState: "neutral"
  }),
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      state.collapsed = !state.collapsed;
    },
    [types.TOGGLE_FULL_BOT_INVENTORY](state, payload) {
      state.buttonState = payload;
    }
  },
  actions: {
    toggle({ commit }) {
      commit(types.TOGGLE_SIDEBAR);
    },
    toggleFullBotInventory({ commit }, payload) {
      commit(types.TOGGLE_FULL_BOT_INVENTORY, payload);
    }
  },
  getters: {
    collapsed(state) {
      return state.collapsed;
    },
    buttonState(state) {
      return state.buttonState;
    }
  }
};
