<template>
  <div class="sell-bot-form">
    <div class="bg"></div>
    <div class="wrap">
      <div class="headline">{{ $t("sell-bot.define-bot") }}</div>
      <div class="title">{{ $t("sell-bot.bot-link") }}</div>
      <vue-input
        class="big"
        :value="botLink"
        @input="updateSteamLink"
        placeholder="https:/steamcommunity"
      ></vue-input>
      <div class="error" v-if="$v.$dirty && !$v.botLink.required">
        Field is required
      </div>
      <div class="error" v-if="error">
        {{ $t(error) }}
      </div>
      <button
        v-if="!loading"
        :disabled="loading"
        type="button"
        class="btn big formBtn"
        @click="loadInventory(botLink)"
      >
        {{ $t("sell-bot.rate") }}
      </button>
      <LoaderSpinner v-else />
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import LoaderSpinner from "@/components/loaders/LoaderSpinner";

export default {
  props: {
    loading: Boolean,
    steamLink: String,
    error: String,
    loadedState: Boolean
  },
  data() {
    return {
      botLink: this.steamLink
    };
  },
  mixins: [validationMixin],

  methods: {
    loadInventory() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("load-inventory-event", this.botLink);
      }
    },
    toggleFullBotInventory() {
      this.$emit("toggle-full-bot-inventory");
    },
    updateSteamLink(value) {
      this.$emit("steam-link", value);
    }
  },
  watch: {
    steamLink(n) {
      this.botLink = n;
    }
  },
  validations: {
    botLink: {
      required
    }
  },
  components: {
    LoaderSpinner
  }
};
</script>

<style lang="scss">
@import "src/modules/sell-bot/sell-common";
.sell-bot-form {
  @include sell-common-styles();
  .big {
    margin-bottom: 8px;
    border: none;
  }
  .error {
    margin-bottom: 8px;
  }
}
</style>
