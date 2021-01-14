import * as types from "@/store/mutation-types";

export const auth = {
  namespaced: true,
  state: {
    session: {
      logged: false,
      token: null
    }
  },

  getters: {
    logged: state => state.session.logged,
    token: state => state.session.token,
    session: state => state.session
  },

  mutations: {
    [types.LOGOUT](state) {
      state.session.token = null;
      state.session.logged = false;
    },

    [types.LOGIN](state, token) {
      state.session.token = token;
      state.session.logged = true;
    }
  },

  actions: {
    login({ commit }, token) {
      commit(types.LOGIN, token);
    },
    logout({ commit }) {
      commit(types.LOGOUT);
    }
  }
};
