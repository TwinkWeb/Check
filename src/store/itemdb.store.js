import * as types from "@/store/mutation-types";
import { ItemPricesService } from "@/services";
import { authService } from "@/components/services/AuthService";

const itemPricesService = new ItemPricesService();

export const itemsdb = {
  namespaced: true,
  state: {
    itemPrices: {
      loading: false,
      loaded: false,
      items: {}
    },
    inventory: {
      loading: false,
      loaded: false,
      /***
       amount: number;
       category_exterior: number;
       category_rarity: number;
       category_type: number;
       category_weapon: number;
       icon: string // base64
       name: string;
       name_color: string; // HEX
       tradable: boolean;
       */
      items: []
    }
  },

  getters: {
    itemPricesLoading: state => state.itemPrices.loading,
    itemPricesLoaded: state => state.itemPrices.loaded,
    itemPricesItems: state => state.itemPrices.items,

    inventoryLoading: state => state.inventory.loading,
    inventoryLoaded: state => state.inventory.loaded,
    inventoryItems: state => state.inventory.items
  },

  mutations: {
    // ITEM PRICES
    [types.GET_ITEM_PRICES](state) {
      state.itemPrices.loading = true;
    },
    [types.GET_ITEM_PRICES_SUCCESS](state, payload) {
      state.itemPrices.loading = false;
      state.itemPrices.loaded = true;
      state.itemPrices.items = payload;
    },
    [types.GET_ITEM_PRICES_ERROR](state, e) {
      state.itemPrices.loading = false;
    },

    // INVENTORY
    [types.GET_INVENTORY](state) {
      state.inventory.loading = true;
    },
    [types.GET_INVENTORY_SUCCESS](state, response) {
      state.inventory.loading = false;
      state.inventory.loaded = true;
      state.inventory.items = response;
    },
    [types.GET_INVENTORY_ERROR](state, e) {
      state.loading = false;
    }
  },

  actions: {
    getItemPrices({ commit }) {
      commit(types.GET_ITEM_PRICES);
      itemPricesService
        .getItemPrices()
        .then(payload => commit(types.GET_ITEM_PRICES_SUCCESS, payload.data))
        .catch(e => commit(types.GET_ITEM_PRICES_ERROR, e));
    },
    loadInventory({ commit }) {
      const id = authService.getTokenData().id;
      commit(types.GET_INVENTORY);
      itemPricesService
        .getLoadInventory(id)
        .then(payload => commit(types.GET_INVENTORY_SUCCESS, payload.data))
        .catch(e => commit(types.GET_INVENTORY_ERROR, e));
    }
  }
};
