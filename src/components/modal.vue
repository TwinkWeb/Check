<template>
  <div v-if="open" class="modal" :class="{ transparent }">
    <div class="bg" @click="hide"></div>
    <div class="modalContent" :class="{ small }">
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      open: false,
      transparent: true
    };
  },
  methods: {
    show() {
      this.open = true;
      setTimeout(() => {
        this.transparent = false;
      });
    },
    hide() {
      this.transparent = true;
      setTimeout(() => {
        this.open = false;
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  .bg {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
  &.transparent {
    opacity: 0;
  }
  .modalContent {
    background: #22222b;
    border-radius: 20px;
    width: 570px;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    overflow: hidden;
    position: relative;
    z-index: 2;
    &:before {
      content: "";
      width: 100%;
      height: 20px;
      background-image: url("/icons/IconOrnamenHorizontal.svg");
      color: red;
    }
    &:after {
      content: "";
      width: 100%;
      height: 20px;
      background-image: url("/icons/IconOrnamenHorizontal.svg");
      color: red;
    }
    &.small {
      width: 370px;
      padding: 12px 0;
      &:before,
      &:after {
        height: 10px;
        background-size: auto 100%;
      }
      .body {
        padding: 34px 38px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .body {
    padding: 180px 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: center;
    color: $white;
    font-weight: 500;
    line-height: 23px;
    font-size: 16px;
  }
}
</style>
