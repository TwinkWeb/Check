<template>
  <shopping-card-component
    :opened="fullBotInventoryOpened"
    :price="23.45"
    @toggle-full-bot-inventory="toggleFullBotInventory"
  ></shopping-card-component>
</template>

<script>
import ShoppingCardComponent from "../components/ShoppingCardComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShopingCardContainer",
  components: {
    ShoppingCardComponent
  },
  computed: {
    ...mapGetters({
      fullBotInventoryOpened: "commonLayoutModule/fullBotInventoryOpened"
    })
  },
  methods: {
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory"
    })
  }
};
</script>
