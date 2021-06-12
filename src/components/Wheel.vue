<template>
  <div>
    <icon-greek-border-round class="greekBorder" />
    <div class="wheel-wrapper-line"></div>
    <div ref="wheel" :style="{ transform: `rotate(${deg}deg)` }" class="wheel">
      <img
        v-if="!disabled"
        class="selected-item"
        src="/img/wheel/sector.png"
        alt="bg"
        :style="{ transform: `rotate(${-deg - 68}deg)` }"
        :class="[zIndex]"
      />
      <div
        v-if="newArr.length"
        class="wheel-wrapper"
        :class="[changeRotate]"
        :key="newArr[0].value"
      >
        <div
          v-for="(item, index) in newArr"
          :key="item.id"
          :class="[
            `wheel-item${index + 1}`,
            { appearItem: item.classes.appearItem },
            'opacity'
          ]"
          @click="changeItem(item)"
        >
          <wheel-item :img="item.img" :value="item.value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import wheelItem from "@/components/wheelItem";
import MoveCircle from "@/components/services/wheelServece";

const circleMove = new MoveCircle();

export default {
  name: "Wheel",
  components: { wheelItem },
  data() {
    return {
      deg: 22,
      prevItem: 1,
      allowRotate: true,
      disabled: false,
      appearNumber: 8,
      newArr: [],
      changeRotate: 0,
      zIndex: ""
    };
  },
  props: {
    menuItems: {
      type: Array,
      default() {
        return [];
      }
    },
    isDisabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  watch: {
    menuItems: {
      handler() {
        if (!this.newArr) return;
        this.newArr = _.cloneDeep(this.menuItems).map(item => ({
          ...item,
          classes: {
            appearItem: true
          }
        }));
      },
      immediate: true
    }
  },
  methods: {
    async changeItem(item) {
      const { id, value } = item;
      if (value === "firstMenu" || value === "secondMenu") {
        await this.$emit("changeMenu", value);
        this.deg = 22;
        this.prevItem = 1;
        this.newArr.forEach(c => {
          c.classes.appearItem = false;
        });
        this.appearFunction();
        return;
      }

      circleMove.setState([1, 2, 3, 4, 5, 6, 7, 8], this.prevItem);

      const { direction, steps } = circleMove.steps(id);
      if (direction === -1) {
        this.deg -= steps * 45;
      } else {
        this.deg += steps * 45;
      }
      this.prevItem = id;
      console.log(id, value);
    },
    appearFunction() {
      if (!this.newArr.length) return;
      this.changeRotate = "changeRotate";
      this.zIndex = "zIndex";
      const t = setInterval(() => {
        if (this.appearNumber === 0) {
          clearInterval(t);
          this.appearNumber = 8;
        } else {
          if (this.newArr[this.appearNumber + 6]) this.zIndex = "";
          this.newArr[this.appearNumber - 1].classes.appearItem = true;
          this.appearNumber--;
        }
      }, 100);
    },
    sleep(ms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },
    next(step = 1) {
      this.deg += 45 * step;
    },
    prev(step = 1) {
      this.deg -= 45 * step;
    },

    initWheelEvents() {
      this.$refs.wheel.addEventListener("wheel", e => {
        e.preventDefault();
        if (this.isDisabled) {
          return;
        }
        this.allowRotate = false;
        setTimeout(() => {
          this.allowRotate = true;
        }, 300);
        if (e.deltaY > 0) {
          this.next();

          this.prevItem -= 1;
          if (this.prevItem < 1) {
            this.prevItem = 8;
          }
        } else {
          this.prev();
          this.prevItem += 1;
          if (this.prevItem > 8) {
            this.prevItem = 1;
          }
        }
      });
    }
  },
  mounted() {
    if (!this.isDisabled) {
      this.initWheelEvents();
    }
  }
};
</script>

<style lang="scss">
.greekBorder {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
}

.wheel-wrapper-line {
  background-image: url("/img/wheel/wheelOutlineCircle.png");
  height: 600px;
  width: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-size: contain;
}

.wheel {
  width: 586px;
  height: 586px;
  background-image: url("/img/wheel/bg.png");
  position: relative;
  transition: 0.3s ease-in-out;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  user-select: none;

  .appearItem {
    animation: appearItem 0.1s;
    animation-timing-function: linear;
    animation-delay: 0.1;
    animation-fill-mode: forwards;
  }

  .changeRotate {
    animation: 1.2s changeRotate;
  }

  .selected-item {
    width: 586px;
    height: 586px;
    background-position: center;
    background-size: contain;
    user-select: none;
    position: absolute;
    transition: 0.31s ease-in-out;
  }

  .zIndex {
    z-index: 10;
  }

  .opacity {
    opacity: 0;
  }

  .wheel-wrapper {
    width: 586px;
    height: 586px;
    position: relative;
    border-radius: 50%;

    .hideSelectedBlock {
      display: none;
    }

    .wheel-item1 {
      position: absolute;
      top: 1%;
      left: 15%;
      transform: rotate(-21deg);
      animation-fill-mode: forward;
    }

    .wheel-item2 {
      position: absolute;
      bottom: 86%;
      left: 51%;
      transform: rotate(22deg);
      animation-fill-mode: forward;
    }

    .wheel-item3 {
      position: absolute;
      bottom: 62%;
      left: 75%;
      transform: rotate(67deg);
      animation-fill-mode: forward;
    }

    .wheel-item4 {
      position: absolute;
      bottom: 26%;
      left: 75%;
      -webkit-transform: rotate(135deg);
      transform: rotate(112deg);
      animation-fill-mode: forward;
    }

    .wheel-item5 {
      position: absolute;
      bottom: 1%;
      left: 51%;
      -webkit-transform: rotate(180deg);
      transform: rotate(158deg);
      animation-fill-mode: forward;
    }

    .wheel-item6 {
      position: absolute;
      bottom: 2%;

      left: 15%;
      transform: rotate(203deg);
      animation-fill-mode: forward;
    }

    .wheel-item7 {
      position: absolute;
      bottom: 26%;
      left: -9%;
      transform: rotate(248deg);
      animation-fill-mode: forward;
    }

    .wheel-item8 {
      position: absolute;
      bottom: 61%;
      left: -10%;
      -webkit-transform: rotate(315deg);
      transform: rotate(292deg);
      animation-fill-mode: forward;
    }
  }
}

.transition {
  transition: 0.1s;
}

@keyframes changeRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes appearItem {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
