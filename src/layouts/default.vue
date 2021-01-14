<template>
  <div class="default-layout">
    <main-toolbar />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "defaultLayout"
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";

.default-layout {
  min-height: 100vh;
  background-color: #28282d;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/img/common-background.jpg");
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  .container {
    position: relative;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    36% {
      opacity: 1;
    }
    38% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    48% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
}

@mixin small-screens() {
  .default-layout {
    background-image: url("/img/mainBg.png");
    .container {
      padding: 0;
    }
  }
}

@include media("≤phone") {
  @include small-screens;
}

@include media("≤tablet") {
  @include small-screens;
}
</style>
