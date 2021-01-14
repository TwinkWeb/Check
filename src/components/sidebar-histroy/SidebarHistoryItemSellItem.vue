<template>
  <div class="sidebar-history-item-sell-item">
    <img :src="src" alt="img" />
  </div>
</template>

<script>
export default {
  name: "SidebarHistoryItemSellItem",
  props: {
    src: String
  }
};
</script>

<style lang="scss">
.sidebar-history-item-sell-item {
  width: 52px;
  display: inline-block;
  margin: 2px 2px 0 2px;
  img {
    width: 100%;
    height: 36px;
    object-fit: contain;
    object-position: center;
  }
}
</style>
