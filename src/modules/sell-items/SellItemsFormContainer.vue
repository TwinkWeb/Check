<template>
  <div class="sell-bot-forms">
    <wheel-container v-bind:disable="false"> </wheel-container>
    <inventorySlider class="inventorySlider"></inventorySlider>
  </div>
</template>
<script>
import WheelContainer from "@/modules/WheelContainer";
import inventorySlider from "@/components/inventorySlider";

export default {
  name: "SellItemsFormContainer",
  components: { WheelContainer, inventorySlider }
};
</script>
<style lang="scss">
.sell-bot-forms {
  .inventorySlider {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
