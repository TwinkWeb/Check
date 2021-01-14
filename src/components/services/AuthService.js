import { ACCESS_TOKEN, LOGIN_PROVIDER } from "./auth-helpers";
import jwtDecode from "jwt-decode";
import { isEpochTimeExpired } from "@/utils/helpers";

const AUTH_PARAM_NAME = "jwt";

class AuthService {
  url;

  constructor(config) {
    this.config = config;
  }

  get accessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  set accessToken(token) {
    return localStorage.setItem(ACCESS_TOKEN, token);
  }

  get loginProvider() {
    return localStorage.getItem(LOGIN_PROVIDER);
  }

  set loginProvider(provider) {
    return localStorage.setItem(LOGIN_PROVIDER, provider);
  }

  get expired() {
    return isEpochTimeExpired(this.getTokenData().exp);
  }

  get signed() {
    return this.accessToken != null;
  }

  clear() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(LOGIN_PROVIDER);
  }

  extractTokenFromUrl() {
    this.url = new URL(window.location.href);
    return this.url.searchParams.get(AUTH_PARAM_NAME);
  }

  getTokenData() {
    if (!this.accessToken) {
      throw new Error("There is no access token available!");
    }

    return jwtDecode(this.accessToken);
  }

  removeTokenFromLocation() {
    if (!this.url.searchParams.has(AUTH_PARAM_NAME)) {
      return;
    }
    this.url.searchParams.delete(AUTH_PARAM_NAME);
    window.history.replaceState(null, "test", this.url.toString());
  }

  isJWTTokenValid(token) {
    if (!token) {
      return false;
    }
    try {
      const { exp } = jwtDecode(token);
      return exp != null;
    } catch (e) {
      return false;
    }
  }
}

const authService = new AuthService();

export { authService };
