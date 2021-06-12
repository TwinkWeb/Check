<template>
  <div :class="{ buttonSwitcher: true, disabled: disabled }">
    <router-link
      to="/"
      class="btn"
      :class="{ inactive: $route.path !== '/shopping' }"
    >
      {{ $t("sell-bot.sell-skins") }}
    </router-link>
    <router-link
      to="/bots"
      class="btn"
      :class="{
        inactive: $route.path !== '/bots/rate'
      }"
    >
      {{ $t("sell-bot.sell-bot") }}
    </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path !== "/bots/rate");
  },
  props: {
    value: {},
    disabled: Boolean
  }
};
</script>

<style lang="scss">
.buttonSwitcher {
  display: flex;
  position: relative;
  background-color: $black;
  border-radius: 10px;
  width: 348px;
  margin: 0 auto 30px auto;
  z-index: 3;
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
  .btn {
    min-width: 174px;
    height: 44px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 10px;
    text-decoration: unset;
    &.inactive {
      background-color: transparent;
      color: rgba(255, 255, 255, 0.3);
      &:hover {
        box-shadow: unset;
        color: $white;
      }
    }
  }
}
</style>
