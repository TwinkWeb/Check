<template>
  <div class="wheel-with-slider">
    <wheel-container v-bind:disable="disabled"></wheel-container>
    <div v-if="!disabled">
      <inventory-slider
        @show-filters="showFiltersDialog()"
        class="slider"
      ></inventory-slider>
    </div>
    <div v-else>
      <div class="slider">
        <div class="col">
          <div class="btn mw">Начать торговать</div>
        </div>
      </div>
    </div>

    <!--    <filters v-if="showFilters" @close-filters="showFilters = false"></filters>-->
  </div>
</template>

<script>
import inventorySlider from "./inventorySlider";
import Filters from "./filter/filters";
import { create } from "vue-modal-dialogs";
import WheelContainer from "@/modules/WheelContainer";

const confirm = create(Filters);

export default {
  components: { WheelContainer, inventorySlider },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showFiltersDialog() {
      confirm({
        from: 1000,
        to: 10000
      })
        .then(value => console.log(value))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss">
.wheel-with-slider {
  display: flex;
  position: relative;

  .slider {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
