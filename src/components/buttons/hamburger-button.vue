<template>
  <div class="hamburger-button">
    <div v-bind:class="activeClass">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hamburger-button",
  props: {
    active: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    activeClass() {
      return {
        "not-active": this.active,
        active: !this.active,
        "h-btn": true
      };
    }
  }
};
</script>

<style lang="scss">
@import "src/styles/colors";
$line-size: 9px;

.hamburger-button {
  position: relative;
  top: 27px;
  left: 30px;
  border-radius: 2px;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  .h-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    cursor: pointer;
  }

  span {
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 3px;
    background: $primary;
    transition: all 0.3s;
    position: relative;

    + span {
      margin-top: 6px;
    }
  }

  .active span:nth-child(1) {
    animation: ease 0.7s top forwards;
  }

  .not-active span:nth-child(1) {
    animation: ease 0.7s top-2 forwards;
  }

  .active span:nth-child(2) {
    animation: ease 0.7s scaled forwards;
  }

  .not-active span:nth-child(2) {
    animation: ease 0.7s scaled-2 forwards;
  }

  .active span:nth-child(3) {
    animation: ease 0.7s bottom forwards;
  }

  .not-active span:nth-child(3) {
    animation: ease 0.7s bottom-2 forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }

    50% {
      top: $line-size;
      transform: rotate(0);
    }

    100% {
      top: $line-size;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: $line-size;
      transform: rotate(45deg);
    }

    50% {
      top: $line-size;
      transform: rotate(0deg);
    }

    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }

    50% {
      bottom: $line-size;
      transform: rotate(0);
    }

    100% {
      bottom: $line-size;
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: $line-size;
      transform: rotate(135deg);
    }

    50% {
      bottom: $line-size;
      transform: rotate(0);
    }

    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
}
</style>
