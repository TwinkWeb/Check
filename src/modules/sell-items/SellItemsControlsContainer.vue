<template>
  <shopping-card-component
    :dealStatus="dealStatus"
    :buttonState="buttonState"
    :price="23.45"
    @toggle-full-bot-inventory="toggleFullBotInventory($event)"
  />
</template>
<script>
import ShoppingCardComponent from "@/components/shopping-card/ShoppingCardComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SellItemsControlsContainer",
  methods: {
    ...mapActions({
      toggleInventory: "commonLayoutModule/toggleFullBotInventory"
    }),
    toggleFullBotInventory(state) {
      this.toggleInventory(state);
    }
  },

  computed: {
    ...mapGetters({
      buttonState: "commonLayoutModule/buttonState",
      dealStatus: "sellBot/dealStatus"
    })
  },
  components: { ShoppingCardComponent }
};
</script>
