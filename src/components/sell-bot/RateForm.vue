<template>
  <div class="sell-bot-form">
    <div class="bg"></div>
    <div class="wrap">
      <div class="headline">{{ $t("sell-bot.define-bot") }}</div>
      <div class="title">{{ $t("sell-bot.bot-link") }}</div>
      <vue-input
        class="big"
        v-model="botLink"
        placeholder="https:/steamcommunity"
      ></vue-input>
      <div class="btn big formBtn" @click="loadInventory(botLink)">
        {{ $t("sell-bot.rate") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      botLink: null
    };
  },
  methods: {
    loadInventory(botLink) {
      this.$emit("load-inventory-event", 76561199098122185);
    },
    toggleFullBotInventory() {
      this.$emit("toggle-full-bot-inventory");
    }
  }
};
</script>

<style lang="scss">
@import "sell-common";
.sell-bot-form {
  @include sell-common-styles();
}
</style>
