<template>
  <div class="default-layout">
    <main-toolbar />
    <icon-left-light class="light left" />
    <icon-right-light class="light right" />
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
  background-image: linear-gradient(to right bottom, rgba(40, 40, 46, 0.95)),
    url("/img/BG.png");
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  .light {
    position: absolute;
  }

  .left {
    top: 54%;
  }
  .right {
    top: 10%;
    right: 0;
  }
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
