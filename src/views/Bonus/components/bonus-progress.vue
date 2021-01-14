<template>
  <div class="progress">
    <div class="bonusProgressValues">
      <div
        v-for="value in $props.value"
        :key="value.percent + value.price"
        class="bonusProgressValuesItem"
      >
        <span ref="percent"> {{ value.percent }}%</span>
        <div class="smallLine"></div>
      </div>
    </div>

    <progress ref="progress" :max="max" :value="progressValue"></progress>

    <div ref="anchor"></div>

    <div class="moneyValues">
      <span
        v-for="value in $props.value"
        :key="value.percent + value.price"
        class="moneyValuesItem"
      >
        <span class="dollar">$</span>{{ value.price }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BonusProgress",
  data: function() {
    return {
      progressValue: null,
      max: null,
      width: null
    };
  },
  props: {
    value: {
      type: Array,
      default() {
        return [
          {
            percent: 0,
            price: 0
          },
          {
            percent: 0.5,
            price: 100
          },
          {
            percent: 1,
            price: 500
          },
          {
            percent: 1.5,
            price: 1000
          },
          {
            percent: 2,
            price: 5000
          },
          {
            percent: 3,
            price: 7777
          },
          {
            percent: 4,
            price: 10000
          },
          {
            percent: 5,
            price: 15000
          }
        ];
      }
    },
    activeItem: {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  mounted() {
    console.log(this.$props);
    this.max = this.$refs.progress.getBoundingClientRect().width;
    this.progressValue =
      Math.round(
        this.$refs.percent[this.$props.activeItem].getBoundingClientRect().x -
          this.$refs.anchor.getBoundingClientRect().x
      ) + 23;
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }
};
</script>

<style scoped>
progress {
  width: 100%;
  height: 20px;
  border-radius: 2px;
  margin-bottom: 10px;
}

progress::-webkit-progress-bar {
  background-color: #14141a;
  border-radius: 7px;
}

progress::-webkit-progress-value {
  background: linear-gradient(
    135deg,
    #f8a400 25%,
    #f8c300 0,
    #f8c300 50%,
    #f8a400 0,
    #f8a400 75%,
    #f8c300 0
  );
  background-size: 30px 30px;
  border-radius: 7px;
}

.bonusProgressValues {
  display: flex;
  justify-content: space-between;
}

.bonusProgressValuesItem {
  width: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffe143;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.smallLine {
  width: 1px;
  height: 10px;
  background: #ffe143;
}

.moneyValues {
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}

.moneyValuesItem {
  width: 45px;
  display: flex;
  justify-content: center;
}

.dollar {
  color: #ffe143;
}
</style>
