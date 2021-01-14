import * as types from "@/store/mutation-types";
import * as apiService from "../../mocks/profile";

import { ProfileService } from "@/services";

const profileService = new ProfileService();

export const profileState = {
  namespaced: true,
  state: () => ({
    loading: false,
    profileLoaded: false,
    historyLoaded: false,
    MultiLoaded: false,
    profileInfo: {
      avatar: null,
      name: null
    },
    statistic: {
      bonuses: 0,
      sold: 0,
      profit: 0,
      balance: 1500
    },
    tradelink: null,
    history: {
      items: []
    },
    multi: {
      items: []
    }
  }),

  getters: {
    balance: s => s.statistic.balance
  },

  mutations: {
    [types.SET_PROFILE_TRADELINK](state, link) {
      state.tradelink = link;
    },
    [types.SET_PROFILE_STATISTIC](state, stat) {
      state.statistic = { ...stat };
    },
    [types.SET_PROFILE_INFO](state, info) {
      state.profileInfo = { ...info };
    },

    // request
    [types.GET_PROFILE_REQUEST](state) {
      state.loading = true;
    },
    [types.GET_PROFILE_HISTORY_REQUEST](state) {
      state.loading = true;
    },
    [types.GET_PROFILE_MULTI_REQUEST](state) {
      state.loading = true;
    },
    [types.DELETE_PROFILE_MULTI_REQUEST](state) {
      state.loading = true;
    },

    [types.GET_PROFILE_SUCCESS](state) {
      state.loading = false;
      state.profileLoaded = true;
    },

    [types.GET_PROFILE_HISTORY_SUCCESS](state, payload) {
      state.loading = false;
      state.historyLoaded = true;
      state.history.items = payload.history.items;
    },

    [types.GET_PROFILE_MULTI_SUCCESS](state, payload) {
      state.loading = false;
      state.multiLoaded = true;
      state.multi.items = payload.multi.items;
    },

    [types.DELETE_PROFILE_MULTI_SUCCESS](state, id) {
      state.loading = false;
      state.multi.items = state.multi.items.filter(item => item.id !== id);
    },

    [types.GET_PROFILE_ERROR](state) {
      state.loading = false;
    },

    [types.GET_PROFILE_HISTORY_ERROR](state) {
      state.loading = false;
    },

    [types.GET_PROFILE_MULTI_ERROR](state) {
      state.loading = false;
    },

    [types.DELETE_PROFILE_MULTI_ERROR](state) {
      state.loading = false;
    }
  },
  actions: {
    setTradelink({ commit }, link) {
      commit(types.SET_PROFILE_TRADELINK, link);
    },
    getProfile({ commit }) {
      commit(types.GET_PROFILE_REQUEST);
      profileService
        .getUserAndAuth()
        .then(x => x.data)
        .then(data => {
          console.log(data);
          return commit(types.GET_PROFILE_SUCCESS, data);
        })
        .catch(e => commit(types.GET_PROFILE_ERROR, e));
    },
    getHistory({ commit }) {
      commit(types.GET_PROFILE_HISTORY_REQUEST);
      profileService
        .getContacts()
        .then(payload => {
          console.log(payload);
          commit(types.GET_PROFILE_HISTORY_SUCCESS, { history });
        })
        .catch(e => commit(types.GET_PROFILE_HISTORY_ERROR, e));
    },
    getMulti({ commit }) {
      commit(types.GET_PROFILE_MULTI_REQUEST);
      apiService
        .profileApi({ delay: 1500 })
        .then(({ multi }) => commit(types.GET_PROFILE_MULTI_SUCCESS, { multi }))
        .catch(e => commit(types.GET_PROFILE_MULTI_ERROR, e));
    },
    deleteMulti({ commit }, id) {
      commit(types.DELETE_PROFILE_MULTI_REQUEST);
      apiService
        .deleteMultiItem({ delay: 3000 })
        .then(() => {
          commit(types.DELETE_PROFILE_MULTI_SUCCESS, id);
        })
        .catch(e => commit(types.DELETE_PROFILE_MULTI_ERROR, e));
    }
  }
};
