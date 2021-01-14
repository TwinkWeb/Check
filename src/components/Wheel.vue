<template>
  <div class="wheel" ref="wheel" @click="click">
    <img
      class="img rotateItem"
      src="/img/wheel/bg.png"
      alt="bg"
      :style="{ transform: `rotate(${deg}deg)` }"
    />
    <img
      v-if="!disabled"
      class="img section"
      src="/img/wheel/sector.png"
      alt="bg"
      :class="{
        allow: !allowRotate,
        prev: lastRotation === 'prev',
        next: lastRotation === 'next'
      }"
    />
    <img
      v-if="!disabled"
      class="img rotateItem"
      src="/img/wheel/items.png"
      alt="bg"
      :style="{ transform: `rotate(${deg}deg)` }"
    />
    <icon-greek-border-round class="greekBorder"></icon-greek-border-round>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      W: 586,
      deg: 0,
      step: 45,
      allowRotate: true,
      lastRotation: ""
    };
  },
  methods: {
    click($event) {
      if (!this.allowRotate) {
        return;
      }
      this.allowRotate = false;
      setTimeout(() => {
        this.allowRotate = true;
      }, 300);
      let x = $event.offsetX;
      let y = $event.offsetY;
      let range = this.dotsRange(x, y, this.W / 2, this.W / 2);
      if (range > 290 || range < 230) {
        return;
      }
      let segment = this.getSegment(this.getAngle(x, y));
      if (segment === 2) {
        return;
      }
      if (segment === 1) {
        this.next();
      }
      if (segment === 3) {
        this.prev();
      }
      if (segment === 4) {
        this.prev(2);
      }
      if (segment === 5) {
        this.prev(3);
      }
      if (segment === 6) {
        this.next(4);
      }
      if (segment === 7) {
        this.next(3);
      }
      if (segment === 8) {
        this.next(2);
      }
    },
    getSegment(a) {
      return Math.ceil(a / (360 / 8));
    },
    getAngle(x, y) {
      let x1 = this.W / 2 - this.W / 2;
      let y1 = 0 - this.W / 2;
      let x2 = x - this.W / 2;
      let y2 = y - this.W / 2;
      let scalar = x1 * x2 + y1 * y2;
      let v1 = Math.sqrt(x1 * x1 + y1 * y1);
      let v2 = Math.sqrt(x2 * x2 + y2 * y2);
      let alpha = scalar / (v1 * v2);
      if (x < this.W / 2) {
        return ((Math.PI - Math.acos(alpha) + Math.PI) * 180) / Math.PI;
      } else {
        return (Math.acos(alpha) * 180) / Math.PI;
      }
    },
    dotsRange(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },
    next(step = 1) {
      this.deg += this.step * step;
      this.lastRotation = "next";
    },
    prev(step = 1) {
      this.deg -= this.step * step;
      this.lastRotation = "prev";
    },
    initWheelEvents() {
      this.$refs.wheel.addEventListener("wheel", e => {
        e.preventDefault();
        if (!this.allowRotate) {
          return;
        }
        this.allowRotate = false;
        setTimeout(() => {
          this.allowRotate = true;
        }, 300);
        if (e.deltaY > 0) {
          this.next();
        } else {
          this.prev();
        }
      });
    }
  },
  mounted() {
    if (!this.disabled) {
      this.initWheelEvents();
    }
  }
};
</script>

<style lang="scss">
.wheel {
  width: 586px;
  height: 586px;
  position: relative;
  overflow: hidden;
  background-image: url("/img/wheel/wheelOutlineCircle.png");
  padding: 8px;
  background-position: center;
  background-size: contain;
  user-select: none;
  transform: rotate(-67deg);
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 120px);
    height: calc(100% - 120px);
    cursor: default;
    z-index: 2;
    border-radius: 50%;
  }
  .greekBorder {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
  }
  .img {
    position: absolute;
    left: 8px;
    top: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }
  .rotateItem {
    transition: 0.3s ease-in-out;
  }
  .section {
    transition: 0.3s ease-in-out;
    &.next.allow {
      animation-name: next;
      animation-duration: 0.3s;
    }
    &.prev.allow {
      animation-name: prev;
      animation-duration: 0.3s;
    }
    @keyframes next {
      0% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes prev {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
