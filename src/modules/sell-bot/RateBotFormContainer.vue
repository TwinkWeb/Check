<template>
  <div class="sell-bot-forms">
    <wheel-container v-bind:disable="true"></wheel-container>
    <rate-form
      :loading="steamLoading || inventoryLoading"
      :steamLink="steamLink"
      :error="error"
      @toggle-full-bot-inventory="toggleFullBotInventory"
      @load-inventory-event="load"
      @steam-link="updateSteamLink"
      class="form"
    />
  </div>
</template>
<script>
import RateForm from "@/modules/sell-bot/RateFormComponent";
import { mapActions, mapState } from "vuex";
import WheelContainer from "@/modules/WheelContainer";

export default {
  name: "RateBotFormContainer",
  components: { WheelContainer, RateForm },
  methods: {
    ...mapActions({
      loadInventory: "sellBot/loadInventory",
      setFilter: "sellBot/setFilter",
      resetFilter: "sellBot/resetFilter",
      clearInventory: "sellBot/clearInventory",
      updateTerms: "sellBot/updateTerms"
    }),
    load(identifier) {
      this.resetFilter();
      this.clearInventory();
      this.updateTerms(false);
      this.setFilter({ identifier });
      this.loadInventory();
    },
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory",
      updateSteamLink: "sellBot/updateSteamLink"
    })
  },
  computed: {
    ...mapState({
      steamLoading: state => state.sellBot.steam.loading,
      inventoryLoading: state => state.sellBot.inventory.loading,
      steamLink: state => state.sellBot.steamLink,
      error: state => state.sellBot.inventory.error
    })
  }
};
</script>
<style lang="scss">
.sell-bot-forms {
  .form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 316px;
  }
}
</style>
