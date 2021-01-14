<template>
  <div id="app">
    <vue-extend-layouts />
    <mobile-side-bar />
    <dialogs-wrapper transition-name="fade"></dialogs-wrapper>
  </div>
</template>
<script>
import VueExtendLayouts from "vue-extend-layout";
import { NAV_CONFIG } from "@/config/app.config";
import { mapActions } from "vuex";

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
    ...mapActions({
      getProfile: "profileState/getProfile",
      getHistory: "profileState/getHistory",
      getItemPrices: "itemsdb/getItemPrices",
      loadInventory: "itemsdb/loadInventory"
    })
  },
  computed: {
    signed() {
      return this.$store.state.auth.session.logged;
    }
  },
  created() {
    if (this.signed) {
      this.getProfile();
      this.loadInventory();
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
