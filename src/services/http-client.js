import axios from "axios";
import store from "@/store/store";
import { HttpStatusCodes } from "@/utils/constants";

axios.defaults.withCredentials = true;

class HttpClient {
  static instance;

  get axios() {
    return this._axios;
  }

  constructor(axios) {
    this._axios = axios;
    this._axios = this.registerInterceptors(
      axios.create({
        withCredentials: true,
        baseUrl: window.location.origin
      })
    );
  }

  registerInterceptors(axios) {
    axios.interceptors.response.use(
      r => r,
      error => {
        if (HttpStatusCodes.UNAUTHORIZED === error.response.status) {
          store.dispatch("auth/setLogged", false);
        }

        return Promise.reject(error);
      }
    );

    return axios;
  }

  static getInstance() {
    return this.instance || (this.instance = new this(axios));
  }
}

export default HttpClient.getInstance().axios;
