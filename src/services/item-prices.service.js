import axios from "axios";

class ItemPricesService {
  getItemPrices() {
    return axios.get(`api/itemdb/itemcategories`);
  }
  getLoadInventory(steamid) {
    return axios.get(`api/itemdb/loadinventory`, { params: { steamid } });
  }
}

export { ItemPricesService };
