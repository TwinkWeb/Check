import axios from "axios";

function setup(store) {
  axios.interceptors.request.use(
    function(config) {
      const token = store.state.auth.session.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}

export default setup;
