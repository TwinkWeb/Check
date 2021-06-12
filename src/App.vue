<template>
  <div id="app">
    <vue-extend-layouts />
    <mobile-side-bar />
    <dialogs-wrapper></dialogs-wrapper>
  </div>
</template>
<script>
import VueExtendLayouts from "vue-extend-layout";
import { NAV_CONFIG } from "@/config/app.config";

export default {
  name: "App",
  components: { VueExtendLayouts },
  provide() {
    return {
      getConfig: this.getConfig
    };
  },
  methods: {
    getConfig() {
      return NAV_CONFIG;
    },
    mountJivoSite() {
      if (process.env.NODE_ENV === "development") {
        return;
      }
      const tag = document.createElement("script");
      tag.src = NAV_CONFIG.jivoUrl;
      tag.defer = true;
      document.head.appendChild(tag);
    }
  },

  computed: {
    signed() {
      return this.$store.state.auth.session.logged;
    }
  },
  created() {
    this.mountJivoSite();
  }
};
</script>
