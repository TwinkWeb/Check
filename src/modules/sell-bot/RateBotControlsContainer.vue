<template>
  <shopping-card-component
    :items="inventoryItems"
    :loadedState="loadedState"
    :agreeTerms="agreeTermsAndConditions"
    :loading="inventoryLoading"
    :filter="filter"
    :buttonState="buttonState"
    :loggerValidationState="loggerValidationState"
    @clearInventory="clearInventoryItems"
    @resetLogger="resetLoggerAction"
    @toggle-full-bot-inventory="toggleFullBotInventory($event)"
    @shopping-card-submit="submit"
    @agree-terms="updateTerms"
    @set-filter="loadMore"
    @select-game="selectGame"
    @showItemsShadow="shadowItem($event)"
  ></shopping-card-component>
</template>
<script>
import ShoppingCardComponent from "@/components/shopping-card/ShoppingCardComponent.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { resetFilter } from "@/modules/sell-bot/sell-bot.store";

export default {
  name: "RateBotControlsContainer",

  methods: {
    ...mapActions({
      toggleInventory: "commonLayoutModule/toggleFullBotInventory",
      updateTerms: "sellBot/updateTerms",
      setFilter: "sellBot/setFilter",
      clearInventory: "sellBot/clearInventory",
      loadInventory: "sellBot/loadInventory",
      showItemsShadow: "sellBot/showItemsShadow",
      displayShadow: "sellBot/displayShadow",
      resetLogger: "sellBot/resetLogger"
    }),
    clearInventoryItems() {
      this.clearInventory();
    },
    resetLoggerAction() {
      this.resetLogger();
    },
    toggleFullBotInventory(state) {
      this.toggleInventory(state);
    },
    shadowItem(index) {
      this.showItemsShadow(index);
    },

    submit() {
      this.$router.push("/bots/sell");
    },
    loadMore(filter) {
      this.setFilter(filter);
      this.loadInventory();
    },
    selectGame(game) {
      this.clearInventory();
      this.setFilter({
        ...resetFilter,
        game,
        identifier: this.filter.identifier
      });
      this.loadInventory();
    }
  },

  computed: {
    ...mapGetters({
      loadedState: "sellBot/loaded",
      filter: "sellBot/filter",
      loggerValidationState: "sellBot/loggerValidationState",
      buttonState: "commonLayoutModule/buttonState"
    }),
    ...mapState({
      steamLoading: state => state.sellBot.steam.loading,
      inventoryLoading: state => state.sellBot.inventory.loading,
      inventoryItems: state => state.sellBot.inventory.items,
      agreeTermsAndConditions: state => state.sellBot.agreeTermsAndConditions
    })
  },
  components: { ShoppingCardComponent }
};
</script>
