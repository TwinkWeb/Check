import authInterceptor from "./interceptors/auth-interceptor";

function init(store) {
  authInterceptor(store);
}

export default init;
