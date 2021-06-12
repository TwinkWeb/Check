import { API } from "@/config/api";
import { axiosInstance } from "@/services";

class UserManagementService {
  getCurrency() {
    return axiosInstance
      .get(`${API.Usermanagement}/currency`)
      .then(res => res.data);
  }

  getItemPrices() {
    return axiosInstance.get(`api/itemdb/itemcategories`);
  }

  getLoadInventory(steamid) {
    return axiosInstance.get(`${API.Usermanagement}/users/loadinventory`, {
      params: { steamid }
    });
  }

  me() {
    return axiosInstance.get(`${API.Usermanagement}/users/me`, {
      withCredentials: true
    });
  }

  getSellItemHistory() {
    return axiosInstance.get(`${API.Usermanagement}/multi/sellitemshistory`);
  }

  getSteamIdByUrl(url) {
    if (!url) {
      return Promise.reject("No url provided");
    }
    return new Promise(resolve => {
      setTimeout(() => resolve(76561198451851552), 1500);
    });
  }
}

const userManagementService = new UserManagementService();

export { userManagementService };
