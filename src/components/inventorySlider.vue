<template>
  <div class="inventorySlider" @wheel="wheelHandler">
    <div class="cell">
      <div class="btn" @click="$emit('show-filters')">
        <icon-filter></icon-filter>
        Фильтры
      </div>
    </div>
    <div class="items">
      <div
        class="item"
        :class="{
          smaller: currentItem === 1,
          smallest: currentItem > 1
        }"
      ></div>
      <div
        class="item"
        :class="{
          small: currentItem === 1,
          smaller: currentItem === 2,
          smallest: currentItem > 2
        }"
      ></div>
      <div
        v-for="i in items"
        :key="i"
        class="item"
        :class="{
          small: i - 1 === currentItem || i + 1 === currentItem,
          smaller: i - 2 === currentItem || i + 2 === currentItem,
          smallest: currentItem + 2 < i || currentItem - 2 > i
        }"
        @click="currentItem = i"
      >
        <img
          src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
          alt="item"
        />
      </div>
      <div
        class="item"
        :class="{
          small: currentItem === items,
          smaller: currentItem === items - 1,
          smallest: currentItem < items - 1
        }"
      ></div>
      <div
        class="item"
        :class="{
          smaller: currentItem === items,
          smallest: currentItem < items
        }"
      ></div>
    </div>
    <div class="bg" :class="{ scroll }">
      <img src="/img/wheel/trails.png" alt="trails" />
    </div>
    <div class="cell">
      <div class="name">desert eagle</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: 1,
      items: 20,
      scroll: false,
      timeOut: null,
      allowScroll: true
    };
  },
  methods: {
    next() {
      if (this.currentItem >= this.items) {
        return;
      }
      this.scroll = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.scroll = false;
      }, 300);
      this.currentItem++;
    },
    prev() {
      if (this.currentItem <= 1) {
        return;
      }
      this.scroll = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.scroll = false;
      }, 300);
      this.currentItem--;
    },
    wheelHandler($event) {
      $event.preventDefault();
      if (!this.allowScroll) {
        return;
      }
      this.allowScroll = false;
      setTimeout(() => {
        this.allowScroll = true;
      }, 120);
      if ($event.deltaY > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
};
</script>

<style lang="scss">
.inventorySlider {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 218px;
    height: 218px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(72, 113, 232, 0.15) 0%,
      rgba(71, 112, 231, 0.01) 89.06%
    );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &.scroll {
      opacity: 0.2;
      img {
        width: 0%;
        height: 0%;
      }
    }
    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
      object-position: center;
      animation-name: rotate;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transition: 0.3s ease-in-out;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  .name {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: rgba(212, 217, 227, 0.6);
  }
  .btn {
    svg {
      margin-right: 6px;
    }
  }
  .cell {
    width: calc((100% - 120px) / 2);
    display: flex;
    justify-content: center;
    z-index: 3;
  }
  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    position: relative;
    z-index: 2;
    width: 120px;
    .item {
      width: 120px;
      height: 120px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      position: relative;
      user-select: none;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &.small {
        opacity: 0.5;
        width: 80px;
        height: 80px;
      }
      &.smaller {
        opacity: 0.2;
        width: 60px;
        height: 60px;
      }
      &.smallest {
        width: 0;
        height: 0;
        opacity: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: contain;
      }
    }
  }
}
</style>
