<template>
  <div class="live-drop">
    <div class="drop-content">
      <div v-if="!minWidth" class="text upper">
        {{ $t("common.deals") }}
      </div>
      <div class="items">
        <div class="slider" id="slider">
          <transition-group name="list-complete" tag="div">
            <template v-for="item in items">
              <deals-item-component
                class="list-complete-item"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :quality="item.quality"
                :id="item.id"
                :key="item.id"
              />
            </template>
          </transition-group>
        </div>
      </div>
    </div>
    <div v-if="loading" class="full-loader">
      <loader-spinner />
    </div>
  </div>
</template>

<script>
import DealsItemComponent from "./DealsItemComponent";
import { MIN_DEVICE_WIDTH } from "@/utils/constants";
export default {
  name: "DealsComponent",

  props: {
    loading: Boolean,
    loaded: Boolean,
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    minWidth() {
      return this.$resize && !this.$mq.above(MIN_DEVICE_WIDTH);
    }
  },

  components: { DealsItemComponent }
};
</script>

<style lang="scss">
@import "../../../node_modules/include-media/dist/include-media";
@import "../../styles/variables";
.live-drop {
  width: 100%;
  height: 78px;
  background-color: $liveDrop;
  background-image: url("/icons/IconOrnamenHorizontal.svg");
  background-position: center;
  background-repeat: repeat-x;
  background-size: auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
  position: relative;
  z-index: 2;
  .drop-content {
    background-color: $liveDrop;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $max-width-live-drop;
    height: 100%;
    padding: 0 24px;
  }
  .items {
    display: flex;
    flex-grow: 1;
    padding: 0 0 10px 30px;
    overflow: hidden;
    position: relative;
    .slider + div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 0 0;
      grid-template-areas: ". . . . . . . . . . . .";
      width: 100%;
      transition: 0.2s ease-in-out;
    }
    .slider {
      width: 100%;
    }
  }
  .noTransition {
    transition: 0s !important;
  }
  .text {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .list-complete-item {
    transition: all 0.3s;
    display: inline-block;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: scale(0, 0) translateX(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
}

@mixin small-screens() {
  .live-drop {
    .drop-content {
      padding: 0;
      .items {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        .slider {
          display: flex;
          justify-content: center;
          & > div {
            width: 380px;
          }
        }
      }
    }
  }
}

@include media("≤phone") {
  @include small-screens;
}

@include media("≤tablet") {
  @include small-screens;
}
</style>
