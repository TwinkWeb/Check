import { authService } from "@/components/services/AuthService";
import store from "@/store/store";

const AuthPlugin = Object.create(null);

AuthPlugin.install = function(Vue, { api }) {
  const tokenFromUri = authService.extractTokenFromUrl();

  if (authService.signed) {
    if (authService.expired) {
      authService.clear();
      store.dispatch("auth/logout", tokenFromUri);
    } else {
      console.info("signed user", authService.getTokenData());
      store.dispatch("auth/login", authService.accessToken);
      authService.removeTokenFromLocation();
    }
  } else {
    if (tokenFromUri != null && authService.isJWTTokenValid(tokenFromUri)) {
      authService.accessToken = tokenFromUri;
      store.dispatch("auth/login", tokenFromUri);
    } else {
      authService.clear();
    }
    authService.removeTokenFromLocation();
  }

  Vue.$authInstance = authService;

  Vue.prototype.$signIn = function(provider = "steam") {
    location.assign(`${api}/${provider}`);
    authService.loginProvider = provider;
  };

  Vue.prototype.$signOut = function() {
    authService.clear();
    store.dispatch("auth/logout");
  };
};

export default AuthPlugin;
