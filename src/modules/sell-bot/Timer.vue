<template>
  <div class="timer">
    <p class="time">
      {{ getConvertingTime.convertingMinutes }} :
      {{ getConvertingTime.convertingSeconds }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    statusConfirmation: {
      type: String
    }
  },
  data() {
    return {
      time: 5,
      timer: null
    };
  },
  watch: {
    statusConfirmation: function() {
      clearInterval(this.timer);
    }
  },
  methods: {
    stopCountDown() {
      this.$emit("stop-count-down");
    }
  },
  computed: {
    getConvertingTime() {
      const minutes = Math.floor(this.time / 60);
      const convertingMinutes = minutes < 10 ? "0" + minutes : minutes;

      const seconds = this.time % 60;
      const convertingSeconds = seconds < 10 ? "0" + seconds : seconds;

      return {
        convertingMinutes,
        convertingSeconds
      };
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.timer);
        this.stopCountDown();
      }
    }, 1000);
  }
};
</script>

<style>
.timer {
  width: 210px;
  height: 80px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14141a;
  border-radius: 10px;
  border: 1px solid #f8c300;
}

.time {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
  background-color: #14141a;
}
</style>
