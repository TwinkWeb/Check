<template>
  <div class="loader">Loading...</div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss" scoped>
@import "src/styles/colors";
@import "src/styles/elevation";

$border-size: 3px;
$opacity: 0.4;

.loader,
.loader:after {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: $border-size solid rgba(255, 255, 255, $opacity);
  border-right: $border-size solid rgba(255, 255, 255, $opacity);
  border-bottom: $border-size solid rgba(255, 255, 255, $opacity);
  border-left: $border-size solid $primary;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
