import * as types from "@/store/mutation-types";

export const commonLayoutModule = {
  namespaced: true,
  state: () => ({
    collapsed: true,
    fullBotInventory: {
      open: false
    }
  }),
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      state.collapsed = !state.collapsed;
    },
    [types.TOGGLE_FULL_BOT_INVENTORY](state) {
      state.fullBotInventory.open = !state.fullBotInventory.open;
    }
  },
  actions: {
    toggle({ commit }) {
      commit(types.TOGGLE_SIDEBAR);
    },
    toggleFullBotInventory({ commit }) {
      commit(types.TOGGLE_FULL_BOT_INVENTORY);
    }
  },
  getters: {
    collapsed(state) {
      return state.collapsed;
    },
    fullBotInventoryOpened(state) {
      return state.fullBotInventory.open;
    }
  }
};
