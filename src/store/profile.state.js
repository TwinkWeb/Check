import * as types from "@/store/mutation-types";
import * as apiService from "../../mocks/profile";

import { userManagementService } from "@/services";

export const profileState = {
  namespaced: true,
  state: () => ({
    loading: false,
    profileLoaded: false,
    historyLoaded: false,
    MultiLoaded: false,
    linkedAccounts: {
      discord: false,
      google: false,
      vkontakte: false,
      telegram: false
    },
    profileInfo: {
      id: null,
      name: null,
      email: null,
      avatarUrl: null,
      createdAt: null,
      updatedAt: null,
      role: null
    },
    account: {
      id: null,
      roles: null
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

    [types.GET_PROFILE_SUCCESS](state, profileData) {
      const {
        id,
        name,
        email,
        avatarUrl,
        createdAt,
        updatedAt,
        role
      } = profileData;

      state.loading = false;
      state.profileLoaded = true;
      state.profileInfo.id = id;
      state.profileInfo.email = email;
      state.profileInfo.name = name;
      state.profileInfo.avatarUrl = avatarUrl;
      state.profileInfo.createdAt = createdAt;
      state.profileInfo.updatedAt = updatedAt;
      state.profileInfo.role = role;
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
    getProfile({ commit, dispatch }) {
      commit(types.GET_PROFILE_REQUEST);
      userManagementService
        .me()
        .then(x => x.data)
        .then(data => {
          commit(types.GET_PROFILE_SUCCESS, data);
          dispatch("auth/setLogged", true, { root: true });
        })
        .catch(e => {
          commit(types.GET_PROFILE_ERROR, e);
        });
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
