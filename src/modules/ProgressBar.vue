<template>
  <div class="progress-container">
    <div class="gods-container">
      <div class="gods-wrapper">
        <div v-for="(item, index) in imgValues" :key="index" class="gods-item">
          <img
            class="gods-avatar"
            :src="item.src"
            alt=""
            :class="highlightImage === index && 'selected-item'"
          />
        </div>
      </div>
    </div>
    <div class="present-container">
      <div
        v-for="(item, index) in presentValue"
        :key="index"
        class="present-wrapper"
      >
        <div class="present-item">
          <span>{{ item }}</span>
          <span class="present-pointer"></span>
        </div>
      </div>
    </div>
    <div class="progress-bar-container">
      <progress
        v-for="(item, index) in getProgressValues()"
        class="progress-item"
        :key="index"
        :value="progressValues[index]"
        max="100"
      />
    </div>
    <div class="progress-values-container">
      <div v-for="(item, index) in priceValue" :key="index" class="value-item">
        ${{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressValues: [],
      highlightImage: 0
    };
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    priceValue: {
      type: Array,
      required: true
    },
    presentValue: {
      type: Array,
      required: true
    },
    imgValues: {
      type: Array,
      required: true
    }
  },
  methods: {
    ratioNumbers: function(value, min, max) {
      return ((value - min) * 100) / (max - min);
    },
    setHighlightImage: function(value) {
      if (value) {
        this.highlightImage = value;
      }
    },
    getProgressValues: function() {
      return this.priceValue.filter((el, ind) => ind !== 0);
    }
  },

  mounted() {
    this.progressValues = this.priceValue
      .filter((el, index) => index !== 0)
      .map((item, index, arr) => {
        if (
          this.value > arr[index === 0 ? 0 : index - 1] &&
          this.value < arr[index === arr.length ? arr.length - 1 : index]
        ) {
          return this.ratioNumbers(
            this.value,
            arr[index === 0 ? index : index - 1],
            item
          );
        } else if (this.value < this.priceValue[1] && index === 0) {
          return this.ratioNumbers(this.value, 0, this.priceValue[1]);
        } else if (this.value >= item) {
          return 100;
        } else if (this.value >= arr[arr.length - 1]) {
          return 100;
        } else {
          return 0;
        }
      });
    this.setHighlightImage(
      this.progressValues.filter(item => item === 100).length
    );
  }
};
</script>

<style lang="scss">
.progress-container {
  width: 100%;

  .gods-container {
    margin-bottom: 70px;

    .gods-wrapper {
      display: flex;

      .gods-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .selected-item {
          filter: drop-shadow(0px 0px 40px #f5c100);
        }
      }
    }
  }

  .progress-bar-container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;

    .progress-item {
      background-size: 30px 30px;
    }
  }

  progress::-webkit-progress-bar {
    background-color: #14141a;
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
  }

  .progress-values-container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: space-between;

    .value-item {
      width: 30px;
      height: 20px;
      margin-top: 8px;
      font-family: Montserrat;
      font-style: normal;
      font-size: 12px;
      line-height: 15px;
      color: #acacac;
      display: flex;
      align-items: flex-end;
      margin-bottom: 70px;
    }
  }

  .present-container {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: space-between;

    .present-wrapper {
      font-size: 10px;
      height: 20px;
      display: flex;
      align-items: flex-end;
      color: #ffe143;

      .present-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 24px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #ffe143;

        .present-pointer {
          width: 1px;
          height: 10px;
          display: flex;
          background-color: #ffe143;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
