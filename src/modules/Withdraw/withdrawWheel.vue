<template>
  <div class="circlesWrapper">
    <svg v-if="loader">
      <circle cx="285" cy="285" r="265" class="circleLoader"></circle>
    </svg>

    <div class="withdrawWheel" :style="{ transform: `rotate(${val}deg)` }">
      <svg>
        <g class="transition">
          <circle cx="285" cy="285" r="265" class="main__circle"></circle>
          <g v-for="(item, index) in arrArcsOfCircle" :key="index">
            <circle
              class="circles"
              cx="285"
              :style="[
                { strokeDashoffset: arrArcsOfCircle[index].strokeOffset },
                { stroke: arrArcsOfCircle[index].circleColor },
                {
                  transform: `rotate(${computedRotate[index]}deg)`
                }
              ]"
              cy="285"
              r="265"
            ></circle>
            <circle
              cx="285"
              cy="285"
              r="265"
              :style="[
                { transform: `rotate(${computedRotate[index]}deg)` },
                {
                  display: index === 0 ? 'none' : 'static'
                }
              ]"
              class="separator"
            ></circle>
          </g>
        </g>
      </svg>
      <icon-greek-border-round class="greekBorder"></icon-greek-border-round>
    </div>
  </div>
</template>

<script>
import RequestResultDialog from "./RequestResultDialog";

import { create } from "vue-modal-dialogs";

const requestsResult = create(RequestResultDialog, "dialogMode");

export default {
  props: {
    paymentSystems: {
      type: Array
    },
    arrArcsOfCircle: {
      type: Array
    },
    loader: {
      type: Boolean
    },
    computedRotate: {
      type: Array
    }
  },
  data() {
    return {
      val: 0,
      loading: false
    };
  },

  watch: {
    loader: function(value) {
      if (value) {
        let sum = 0;
        this.animation = setInterval(() => {
          if (sum <= 100) {
            sum += 2;
          }
          this.val += sum;
        }, 100);
      }

      if (!value) {
        requestsResult("request-result");

        let animationCounter = Math.ceil(this.val / 360) + 2;
        clearInterval(this.animation);
        let animationEnd = setInterval(() => {
          let step = (360 * animationCounter - this.val) / 10;
          this.val += step;
          if (360 * animationCounter - this.val < 1 && step < 0.8) {
            clearInterval(animationEnd);
            this.$emit("endAnimation");
          }
        }, 100);
      }
    }
  }
};
</script>

<style lang="scss">
.circlesWrapper {
  width: 586px;
  height: 586px;
  position: relative;
  svg {
    position: absolute;
    left: 8px;
    top: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    transform: rotate(90deg);
    transition: all 1wws linear;
    z-index: 11;
  }
  .circleLoader {
    transition: 0.2s;
    fill: none;
    stroke-width: 38;
    stroke-dasharray: 1670;
    transform-box: fill-box;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -o-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    animation: loader linear 1.5s infinite;
    stroke: #f8c302;
    transform: rotate(360deg);
  }
}

.withdrawWheel {
  width: 586px;
  height: 586px;
  position: relative;
  animation-fill-mode: forwards;
  background-image: url("/img/wheel/wheelOutlineCircle.png");
  background-position: center;
  background-size: contain;
  transition: all 0.2s linear;

  .separator {
    stroke-dasharray: 1670;
    stroke-dashoffset: 1668;
    stroke: black;
    transform-box: fill-box;
    transform-origin: center;
    transition: all 0.2s linear;
  }

  svg {
    position: absolute;
    left: 8px;
    top: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    transform: rotate(90deg);
    transition: all 0.2s linear;

    circle {
      fill: none;
      stroke-width: 38;
      stroke: #000;
      stroke-dasharray: 1670;
      -webkit-transform-origin: center;
      -moz-transform-origin: center;
      -o-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
      transition: all 0.2s linear;
    }

    & circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #545454;
      transform-box: fill-box;

      transition: all 0.2s linear;
    }
  }

  .circles {
    transition: 0.2s;
    transform-box: fill-box;
    transform-origin: center;
    transition: all 0.2s linear;
  }
  .greekBorder {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
  }
}

@keyframes loader {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 3340;
  }
}
</style>
