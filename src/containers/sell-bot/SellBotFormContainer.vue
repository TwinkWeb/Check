<template>
  <div class="sell-bot-forms">
    <wheel :disabled="true" />
    <sell-form
      @toggle-full-bot-inventory="toggleFullBotInventory"
      @sell-bot-load-inventory="loadInventory($event)"
      class="form"
    />
  </div>
</template>
<script>
import Wheel from "@/components/Wheel";
import SellForm from "@/components/sell-bot/SellForm";
import { mapActions } from "vuex";

export default {
  name: "SellBotFromContainer",
  components: { Wheel, SellForm },
  methods: {
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory"
    }),
    loadInventory(steamId) {
      console.log(steamId);
    }
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
