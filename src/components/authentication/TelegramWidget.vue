<template>
  <div ref="rootTelegramElement" class="telegram-button-root"></div>
</template>

<script>
import { NAV_CONFIG } from "@/config/app.config";

export default {
  name: "TelegramWidget",
  methods: {
    mount() {
      const tag = document.createElement("script");
      tag.id = "telegram-widget";
      tag.src = "https://telegram.org/js/telegram-widget.js?3";
      tag.dataset["telegramLogin"] = NAV_CONFIG.telegram.login;
      tag.dataset["size"] = "large";
      tag.dataset["authUrl"] = NAV_CONFIG.telegram.authUrl;
      tag.dataset["requestAccess"] = "write";
      tag.async = true;

      this.$refs["rootTelegramElement"].appendChild(tag);
    }
  },
  mounted() {
    this.mount();
  }
};
</script>

<style lang="scss"></style>
