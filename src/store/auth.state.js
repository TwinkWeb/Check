import * as types from "@/store/mutation-types";

export const auth = {
  namespaced: true,
  state: {
    logged: false
  },

  getters: {
    logged: state => state.logged
  },

  mutations: {
    [types.LOGGED](state, logged) {
      state.logged = logged;
    }
  },

  actions: {
    setLogged({ commit }, logged) {
      commit(types.LOGGED, logged);
    },
    logout({ commit }) {
      commit(types.LOGOUT);
    }
  }
};
