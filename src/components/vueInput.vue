<template>
  <div class="vueInput">
    <input type="text" v-model="model" v-bind="$attrs" />
    <slot name="btn"></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "",
      type: String
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss">
.vueInput {
  background-color: $black;
  border-radius: 6px;
  height: 30px;
  width: 100%;
  display: flex;
  &.big {
    height: 40px;
  }
  .btn {
    margin-left: -8px;
    padding: 0 9px;
  }
  input {
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    border-radius: inherit;
    padding: 0 14px;
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
    color: $white;
    &:focus {
      border-color: $primary;
    }
    &::placeholder {
      color: rgba(82, 85, 96, 0.7);
    }
  }
}
</style>
