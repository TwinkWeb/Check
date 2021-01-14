<template>
  <div class="dropdown" :class="{ open }" v-click-outside="close">
    <div class="head" @click="toggle">
      <span>{{ value_ }}</span>
      <icon-arrow></icon-arrow>
    </div>
    <div class="body">
      <div
        v-for="(option, i) in options"
        :key="i"
        class="item"
        @click="select(option)"
      >
        {{ by ? option[by] : option }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    value: {
      type: [Object, String, Number],
      default: null
    },
    options: {
      type: [Object, Array],
      default() {
        return [];
      }
    },
    by: {
      type: [String],
      default() {
        return undefined;
      }
    }
  },
  directives: {
    ClickOutside
  },
  data() {
    return {
      open: false,
      value_: this.value
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    select(option) {
      this.$emit("input", this.by ? option[this.by] : option);
      this.value_ = this.by ? option[this.by] : option;
      this.close();
    }
  }
};
</script>

<style lang="scss">
.dropdown {
  position: relative;
  user-select: none;
  &.open {
    .body {
      transform: scaleY(1);
      border-color: $primary;
      top: 100%;
    }
    .head {
      border-color: $primary;
      border-radius: 9px 9px 0 0;
      border-bottom: transparent;
      svg {
        transform: scaleY(-1.4);
      }
    }
  }
  .body {
    position: absolute;
    left: 0;
    top: 80%;
    transform-origin: top;
    transform: scaleY(0);
    width: 100%;
    background-color: $black;
    border-radius: 0 0 9px 9px;
    border: 1px solid transparent;
    border-top: unset;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding-bottom: 6px;
    .item {
      width: 100%;
      padding: 2px 9px;
      font-weight: 500;
      font-size: 9px;
      line-height: 11px;
      color: #87888d;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
  .head {
    height: 18px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: $black;
    transition: 0.3s ease-in-out;
    padding: 0 8px;
    border-radius: 9px;
    border: 1px solid transparent;
    span {
      font-weight: 500;
      font-size: 9px;
      line-height: 11px;
      color: #87888d;
      margin-right: 9px;
    }
    svg {
      color: $primary;
      width: 6px;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
