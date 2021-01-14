<template>
  <div class="sell-bot-forms">
    <wheel :disabled="true" />
    <rate-form
      @toggle-full-bot-inventory="toggleFullBotInventory"
      @load-inventory-event="loadInventory"
      class="form"
    />
  </div>
</template>
<script>
import Wheel from "@/components/Wheel";
import RateForm from "@/components/sell-bot/RateForm";
import { mapActions } from "vuex";

export default {
  name: "RateBotFormContainer",
  components: { Wheel, RateForm },
  methods: {
    loadInventory(steamId) {
      console.log("---->", steamId);
    },
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory"
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
