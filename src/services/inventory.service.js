import { API } from "@/config/api";
import { axiosInstance } from "@/services";
import { X_TOTAL_COST_HEADER_KEY } from "@/utils/constants";

class InventoryService {
  getInventory(filter) {
    return axiosInstance
      .get(`${API.Steaminventoryloader}/inventory`, {
        params: filter
      })
      .then(res => {
        const total = res.headers[X_TOTAL_COST_HEADER_KEY] || 0;

        return [res.data, isNaN(total) ? 0 : Number(total)];
      });
  }
}

const inventoryService = new InventoryService();

export { inventoryService };
