import { API } from "@/config/api";
import { axiosInstance } from "@/services";

class LoggerTransaction {
  postTransactionInf(formData) {
    return axiosInstance
      .post(`${API.TransactionLogger}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => console.log(res));
  }
}
const loggerTransaction = new LoggerTransaction();

export { loggerTransaction };
