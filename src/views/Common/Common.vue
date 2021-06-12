<template>
  <div class="common-view">
    <button-switcher :disabled="false"></button-switcher>
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
  name: "CommonLayout"
};
</script>

<style lang="scss">
@import "../../styles/common-view-content";
@import "src/components/botInventory/bot-inventory-style-helper";

.common-view {
  @include common-view-content();
}
</style>
