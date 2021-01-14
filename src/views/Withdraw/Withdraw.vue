<template>
  <div class="sell-bots">
    <button-switcher :disabled="true"></button-switcher>
    <div class="root-container">
      <div class="content-side">
        <side-bar></side-bar>
      </div>
      <div class="content-mid">
        <router-view />
      </div>
      <div class="content-side">
        <router-view name="controls" />
      </div>
    </div>
    <reviews></reviews>
  </div>
</template>

<script>
export default {
  name: "sellBots"
};
</script>

<style lang="scss">
@import "src/styles/common-view-content";
@import "src/components/botInventory/bot-inventory-style-helper";

.sell-bots {
  @include common-view-content();
}
</style>
