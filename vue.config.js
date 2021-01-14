module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_colors.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    }
  },
  devServer: {
    proxy: {
      "^/api/multi": {
        target: "https://usermanagement.lu13dev.fun",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/multi": "/multi"
        }
      },
      "^/api/profile": {
        target: "https://usermanagement.lu13dev.fun",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/profile": "/profile"
        }
      },
      "^/api/auth": {
        target: "https://usermanagement.lu13dev.fun",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/auth": "/auth"
        }
      },
      "^/api/user": {
        target: "https://usermanagement.lu13dev.fun",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/user": "/user"
        }
      },
      "^/api/itemdb": {
        target: "https://itemprices.lu13dev.fun",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/itemdb": "itemdb"
        }
      }
    }
  }
};
