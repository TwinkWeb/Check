<template>
  <div class="sidebarHistory">
    <sidebar-history-item
      v-for="item in items"
      :card="item.cardNumber"
      :amount="item.amount"
      :date="item.date"
      :type="item.type"
      :sell-items="item.sellItems"
      :key="item.id"
      :id="item.id"
    ></sidebar-history-item>
  </div>
</template>
<script>
import sidebarHistoryItem from "./sidebar-histroy/SidebarHistoryItem";

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    sidebarHistoryItem
  }
};
</script>
