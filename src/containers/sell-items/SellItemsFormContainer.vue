<template>
  <div class="sell-bot-forms">
    <wheel :disabled="true" />
    <sell-bot-form class="form" />
  </div>
</template>
<script>
import Wheel from "@/components/Wheel";
import SellBotForm from "@/components/sell-bot/RateForm";

export default {
  name: "SellItemsFormContainer",
  components: { Wheel, SellBotForm }
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
