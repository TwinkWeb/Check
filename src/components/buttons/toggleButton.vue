<template>
  <div :class="classesRoot">
    <button
      class="button button-left"
      @mouseenter="handleMouseEnter('left')"
      @mouseleave="handleMouseLeave"
      @click="handleClick(leftButton.code)"
    >
      <p>{{ leftButton.text }}</p>
    </button>

    <button
      class="button button-right"
      @mouseenter="handleMouseEnter('right')"
      @mouseleave="handleMouseLeave"
      @click="handleClick(rightButton.code)"
    >
      <IconSteam v-if="rightButton.code === 'steam'" />

      <p>{{ rightButton.text }}</p>
    </button>

    <div class="knob" />
  </div>
</template>

<script>
export default {
  name: "UiToggler",
  props: {
    leftButton: {
      type: Object,
      default: () => ({})
    },
    rightButton: {
      type: Object,
      default: () => ({})
    },
    state: {
      type: String,
      default: null
    }
  },
  data: () => ({
    hoveredButton: null
  }),
  computed: {
    classesRoot() {
      const { hoveredButton } = this;
      const isActive = this.state === this.rightButton.code;

      return {
        "ui-toggler": true,
        active: isActive,
        [`hovered-${hoveredButton}`]: hoveredButton
      };
    }
  },
  methods: {
    handleMouseEnter(code) {
      this.hoveredButton = code;
    },
    handleMouseLeave() {
      this.hoveredButton = null;
    },
    handleClick(code) {
      this.$emit("toggle", code);
    }
  }
};
</script>

<style lang="scss" scoped>
$knobOffsetLeft: 84px;

.ui-toggler {
  width: 170px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141419;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  position: relative;
}

.button {
  width: 50%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0;
  padding: 0;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  z-index: 5;
  transition: 0.3s;
  cursor: pointer;

  p {
    z-index: 5;
    display: flex;
    text-align: center;
  }
  svg {
    width: 33px;
    height: 35px;
    position: absolute;
    z-index: 3;
  }
}

.button-left {
  color: black;

  .hovered-left.active & {
    color: black;
  }

  .hovered-right &,
  .active & {
    color: rgba(255, 255, 255, 0.3);
  }
}

.button-right {
  color: rgba(255, 255, 255, 0.3);

  .hovered-left &,
  .hovered-left.active & {
    color: rgba(255, 255, 255, 0.3);
  }

  .hovered-right &,
  .active & {
    color: black;
  }
}

.knob {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8c300;
  border-radius: 20px;
  position: absolute;
  top: 3px;
  left: 4px;
  z-index: 0;
  transition: 0.3s;

  .hovered-left &,
  .hovered-left.active & {
    left: 4px;
  }

  .hovered-right &,
  .active & {
    left: $knobOffsetLeft;
  }
}
</style>
