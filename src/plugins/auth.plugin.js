import store from "@/store/store";

const AuthPlugin = Object.create(null);

AuthPlugin.install = function(Vue, { api, redirectUrl }) {
  store.dispatch("profileState/getProfile");

  Vue.prototype.$signIn = function(provider = "steam") {
    location.assign(`${api}/${provider}?returnUrl=${redirectUrl}`);
  };

  Vue.prototype.$signOut = function() {
    store.dispatch("auth/logout");
  };
};

export default AuthPlugin;
