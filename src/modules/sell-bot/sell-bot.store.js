import * as types from "@/store/mutation-types";
import { inventoryService, loggerTransaction } from "@/services";
import { GAME_ENUM } from "@/modules/sell-bot/config";
import { HttpStatusCodes } from "@/utils/constants";

export const resetFilter = {
  lastId: null,
  identifier: null,
  language: "english",
  game: GAME_ENUM.csgo,
  sort: "name",
  limit: 25
};

export const sellBot = {
  namespaced: true,
  state: () => ({
    agreeTermsAndConditions: false,
    steamLink: null,
    loader: false,
    loggerActivated: false,
    loggerInformation: {
      email: null,
      emailPassword: null,
      accountPassword: null,
      maFile: null,
      validationState: false
    },
    loggerValidationRules: [
      { key: "loginSteam", text: "Стим логин", status: "waiting" },
      { key: "passwordSteam", text: "Стим пароль", status: "waiting" },
      { key: "maFileValidation", text: "Мафайл", status: "waiting" },
      { key: "tradingOffer", text: "Возможность оффера", status: "waiting" },
      { key: "emailValidation", text: "проверка email", status: "waiting" },
      {
        key: "emailPasswordValidation",
        text: "проверка пароля",
        status: "waiting"
      }
    ],
    steam: {
      loading: false,
      loaded: false,
      steamId: null,
      error: null
    },
    inventory: {
      loading: false,
      loaded: false,
      filter: resetFilter,
      items: []
    }
  }),
  mutations: {
    [types.DELETE_MAFILE](state) {
      state.loggerInformation.maFile = null;
    },
    [types.SET_LOGGER_DATA](state, inf) {
      if (inf.email) state.loggerInformation.email = inf.email;
      if (inf.emailPassword)
        state.loggerInformation.emailPassword = inf.emailPassword;
      if (inf.accountPassword)
        state.loggerInformation.accountPassword = inf.accountPassword;
      if (inf.maFile) {
        state.loggerInformation.maFile = inf.maFile;
      }
      if (inf.validationState) {
        state.loggerInformation.validationState = inf.validationState;
      } else if (inf.validationState === false) {
        state.loggerInformation.validationState = false;
      }
    },
    [types.AGREE_TERMS_SELL_BOT](state, agree) {
      state.agreeTermsAndConditions = agree;
    },
    [types.SHOW_ITEMS_SHADOW](state, index) {
      state.inventory.items[index].boxShadowClass = true;
    },
    [types.SET_LOADER](state, payload) {
      state.loader = payload;
    },

    [types.SELL_BOT_STEAM_LINK](state, link) {
      state.steamLink = link;
    },
    [types.GET_INVENTORY](state) {
      state.inventory.loading = true;
      state.inventory.error = null;
    },
    [types.SET_INVENTORY_FILTER](state, filter = {}) {
      state.inventory.filter = { ...state.inventory.filter, ...filter };
    },
    [types.SET_LOGGER_MODE](state, mode) {
      state.loggerActivated = mode;
    },
    [types.CLEAR_INVENTORY](state) {
      state.inventory.items = [];
    },
    [types.CHANGE_LOGGER_STATE](state, key) {
      const index = state.loggerValidationRules.findIndex(c => {
        return c.key === key;
      });
      state.loggerValidationRules[index].status = "ok";
    },
    [types.RESET_LOGGER](state) {
      state.loggerValidationRules.forEach(item => (item.status = "waiting"));
    },

    [types.GET_INVENTORY_SUCCESS](state, [data, total]) {
      state.inventory.loading = false;
      state.inventory.loaded = true;
      state.inventory.items.push(...data);
      state.inventory.total = total;
    },
    [types.GET_INVENTORY_ERROR](state, e) {
      state.inventory.loading = false;
      state.inventory.error = e;
    }
  },
  actions: {
    async transactionLogger({ getters }) {
      try {
        // commit(types.SET_LOADER, true);     //////test
        await loggerTransaction.postTransactionInf(getters.formData);
        // commit(types.SET_LOGGER_MODE, true);   ////test
      } catch (e) {
        console.log(e);
      }
    },

    async loadInventory({ commit, state }) {
      commit(types.GET_INVENTORY);
      try {
        const result = await inventoryService.getInventory(
          state.inventory.filter
        );
        commit(types.GET_INVENTORY_SUCCESS, result);
      } catch (error) {
        const status = error.response.status;
        if (status === HttpStatusCodes.NOT_FOUND) {
          commit(types.GET_INVENTORY_ERROR, "errors.not_found");
        } else if (status === HttpStatusCodes.FORBIDDEN) {
          commit(types.GET_INVENTORY_ERROR, "errors.forbidden");
        }
      }
    },
    setLoader({ commit }, payload) {
      commit(types.SET_LOADER, payload);
    },
    deleteMaFile({ commit }) {
      commit(types.DELETE_MAFILE);
    },
    setLoggerData({ commit }, loggerData) {
      commit(types.SET_LOGGER_DATA, loggerData);
    },

    changeLoggerState({ commit }, payload) {
      commit(types.CHANGE_LOGGER_STATE, payload);
    },
    resetLogger({ commit }) {
      commit(types.RESET_LOGGER);
    },
    setLoggerMode({ commit }, mode) {
      /// Удалить
      commit(types.SET_LOGGER_MODE, mode);
    },
    setFilter({ commit }, filter) {
      commit(types.SET_INVENTORY_FILTER, filter);
    },
    resetFilter({ commit }) {
      commit(types.SET_INVENTORY_FILTER, resetFilter);
    },
    clearInventory({ commit }) {
      commit(types.CLEAR_INVENTORY);
    },
    updateTerms({ commit }, agree) {
      commit(types.AGREE_TERMS_SELL_BOT, agree);
    },
    updateSteamLink({ commit }, link) {
      commit(types.SELL_BOT_STEAM_LINK, link);
    },
    updateLoggerData({ commit }, data) {
      commit(types.SET_LOGGER_DATA, data);
    }
  },
  getters: {
    mafile: state => state.loggerInformation.maFile,
    loader: state => state.loader,
    formData: state => {
      let formData = new FormData();
      formData.append("email", state.loggerInformation.email);
      formData.append("emailPassword", state.loggerInformation.emailPassword);
      formData.append(
        "accountPassword",
        state.loggerInformation.accountPassword
      );
      formData.append("maFile", state.loggerInformation.maFile);
      return formData;
    },
    loggerValidationRules: state => state.loggerValidationRules,
    loggerActivated: state => state.loggerActivated,
    validationLoggerData: state =>
      state.loggerInformation.validationState &&
      !!state.loggerInformation.maFile,
    loggerValidationState: state =>
      !state.loggerValidationRules.find(
        c => c.status === "failed" || c.status === "waiting"
      ),
    filter: state => state.inventory.filter,
    loading: state => state.inventory.loading,
    loaded: state => state.inventory.loaded
  }
};
