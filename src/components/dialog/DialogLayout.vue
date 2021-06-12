<template>
  <div class="message-box dialog-mask">
    <div :class="['dialog-container ' + dialogMode + '-container']">
      <div class="dialog-header">
        <slot name="header"></slot>
      </div>
      <div :class="['dialog-content ' + dialogMode + '-content']">
        <slot name="content"></slot>
      </div>
      <div
        class="dialog-footer"
        :class="['dialog-footer ' + dialogMode + '-footer']"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogLayout",
  props: {
    dialogMode: {
      type: String,
      default() {
        return "default";
      }
    }
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
  destroyed() {
    document.body.style.overflow = "visible";
  }
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";
@import "../../styles/elevation";
@import "../../styles/colors";

.dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  & > div {
    border: 1px solid $primary;
  }
}

.dialog-container {
  width: 80vw;
  height: 650px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  background-image: url("/img/multiBg.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.multi-auth-container {
  max-width: 600px;
  background-image: url("/img/multiBg.jpg");
}

.i18nConfirm-container {
  max-width: 400px;
  max-height: 400px;
  background-image: url("/img/marbleTexture.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .dialog-header {
    padding: 20px 30px;
  }
}

.payment-container {
  max-width: 700px;
}

.request-result-container {
  max-width: 400px;
  max-height: 180px;
  background-image: url("/img/multiBg.jpg");
}

.deal-confirming-container {
  background-image: none;
  background-color: rgb(34, 34, 44);
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-weight: bold;
    font-size: 17px;
    text-transform: uppercase;
  }
  svg {
    cursor: pointer;
  }
}

.dialog-content {
  overflow: auto;
}

.multi-auth-content {
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 100px);
  gap: 30px;
  grid-template-areas:
    ". ."
    ". .";
}

.i18nConfirm-content {
  height: 60%;
  padding: 20px 30px;
}

.request-result-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  text-align: center;
}

.deal-confirming-content {
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 25px;
}

.payment-content {
  height: 350px;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.request-result-footer {
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
}

.payment-footer {
  background: $black;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
}

.i18nConfirm-footer {
  background: $black;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
}

.dialog-footer {
  border-radius: 0 0 20px 20px;
  display: flex;
  align-items: center;

  .btn {
    margin-right: 20px;
  }
}

@mixin small-screens() {
  .dialog-mask {
    z-index: 100;
    top: 122px;
  }
  .dialog-container {
    width: 100vw;
    height: 100vh;
  }
}

@include media("≤phone") {
  @include small-screens;
}

@include media("≤tablet") {
  @include small-screens;
}
</style>
