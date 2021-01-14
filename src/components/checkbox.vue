<template>
  <div class="checkbox-wrap" @click="$emit('input', !value)">
    <div class="checkbox" :class="{ checked: value }">
      <icon-check></icon-check>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    value: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-wrap {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  cursor: pointer;
  user-select: unset;
  a {
    color: white;
    margin-left: 6px;
  }
}
.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  user-select: none;
  margin-right: 12px;
  &.checked {
    background-color: $black;
    svg {
      opacity: 1;
    }
  }
  svg {
    width: 8px;
    color: $primary;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
}
</style>
