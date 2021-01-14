import axios from "axios";

class CurrencyService {
  getFromApi() {
    return axios.get(`api/user/currency`);
  }

  async getCurrency() {
    const { data } = await this.getFromApi().then(res => res.data);
    return data;
  }
}

const currencyService = new CurrencyService();

export { currencyService };
