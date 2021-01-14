<template>
  <div class="deals-item-root">
    <div class="img">
      <icon-ornament-small></icon-ornament-small>
      <img :src="image" :alt="name" />
      <div class="price">{{ $n(price, "currency") }}</div>
      <div :class="classQualityClass"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deals-item-component",
  props: {
    image: String,
    name: String,
    price: Number,
    quality: Number
  },
  computed: {
    classQualityClass() {
      return `quality-${this.quality} circle`;
    }
  }
};
</script>

<style lang="scss">
.deals-item-root {
  cursor: pointer;
  margin-bottom: 5px;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  width: 44px;
  &.hide {
    transform: scale(0);
  }
  &:hover {
    .img {
      img {
        width: 160%;
        height: 160%;
      }
    }
  }
  .circle {
    position: absolute;
    right: -10px;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  .img {
    position: relative;
    width: 44px;
    height: 44px;
    .price {
      position: absolute;
      left: 50%;
      top: calc(100% + 5px);
      transform: translate(-50%, 0%);
      font-size: 10px;
      font-weight: 700;
      white-space: nowrap;
    }
    img {
      width: 140%;
      height: 140%;
      object-fit: contain;
      object-position: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: 0.3s ease-in-out;
    }
    svg {
      color: #34353c;
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .quality-1 {
    background-color: white;
  }
  .quality-2 {
    background-color: lightblue;
  }
  .quality-3 {
    background-color: darkblue;
  }
  .quality-4 {
    background-color: purple;
  }
  .quality-5 {
    background-color: #d982b5;
  }
  .quality-6 {
    background-color: red;
  }
}
</style>
