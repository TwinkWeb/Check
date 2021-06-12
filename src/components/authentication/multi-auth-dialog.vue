<template>
  <dialog-layout :dialogMode="dialogMode" class="multi-auth-dialog">
    <template v-slot:header>
      <div class="close">
        <icon-close @click="close"></icon-close>
      </div>
      <div class="title">
        <h1>{{ $t("navigation.contacts") }}</h1>
      </div>
    </template>

    <template v-slot:content>
      <icon-auth-discord
        @click="login('discord')"
        class="button"
      ></icon-auth-discord>
      <icon-auth-google
        @click="login('google')"
        class="button"
      ></icon-auth-google>
      <icon-auth-telegram class="button"></icon-auth-telegram>
      <!-- <telegram-widget /> -->

      <icon-auth-vk class="button" @click="login('vk')"></icon-auth-vk>
    </template>

    <template v-slot:footer> </template>
  </dialog-layout>
</template>

<script>
// import TelegramWidget from "@/components/authentication/TelegramWidget";

export default {
  name: "MultiAuthDialog",
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 0
    },
    dialogMode: {
      type: String
    }
  },
  data() {
    return {
      value: [this.from, this.to]
    };
  },
  methods: {
    close() {
      this.$error({
        message: "closed"
      });
    },
    apply() {
      this.$close({
        priceRange: { range: this.value },
        filters: this.filters
      });
    },
    login(provider) {
      this.$signIn(provider);
    }
  },
  computed: {
    lastElementIndex() {
      return this.filters.length - 1;
    }
  }
  // components: {
  //   TelegramWidget
  // }
};
</script>
<style lang="scss">
@import "node_modules/include-media/dist/include-media";
@import "../../styles/elevation";

.multi-auth-dialog {
  .dialog-header {
    position: relative;

    .title {
      width: 100%;
      text-align: center;
      transform: translateY(100px);
      h1 {
        text-transform: uppercase;
        font-size: 24px;
      }
    }

    .close {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background-color: #f8c300;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        fill: black;
        font-weight: 600;
        width: 15px;
        height: 15px;
      }
    }

    .close:hover {
      transition: 0.5s;
      box-shadow: 0px 11px 36px #f8c300;
    }
  }
  .dialog-content {
    justify-content: center;
    align-content: center;
  }

  .button {
    border-radius: 10px;
    width: 200px;
    height: 100px;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;
  }

  .dialog-content {
    height: 500px;
  }
}

.dialog-mask {
  & > div {
    border: none !important;
    @include mat-elevation(0, $primary, 0.7);
  }
}

@mixin mobile {
  .multi-auth-dialog {
  }
}

@include media("<=tablet") {
  @include mobile;
}

@include media("<=phone") {
  @include mobile;
}
</style>
