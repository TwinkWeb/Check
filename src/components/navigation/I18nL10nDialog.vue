<template>
  <dialog-layout :dialogMode="dialogMode" class="i18n-l10n-dialog">
    <template v-slot:header>
      <div class="title">{{ $t("sidebar.languageAndCurrency") }}</div>
      <icon-close class="close" @click="close"></icon-close>
    </template>

    <template v-slot:content>
      <LocaleSwitcher />
      <div class="language-bage">
        <dropdown
          @input="setCurrency($event)"
          :value="currency"
          :options="currencyOptions"
          view-value-key="viewValue"
        ></dropdown>
      </div>
    </template>

    <template v-slot:footer>
      <div class="btn mw gray" @click="close">
        {{ $t("common.ok") }}
      </div>
    </template>
  </dialog-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LocaleSwitcher from "./LocaleSwitcher";

export default {
  name: "I18nL10nDialog",
  props: {
    dialogMode: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      currencyOptions: "currency/currencyOptions",
      currency: "currency/currency"
    })
  },

  methods: {
    ...mapActions({
      setCurrency: "currency/setCurrency"
    }),
    close() {
      this.$error({
        message: "closed"
      });
    }
  },
  components: { LocaleSwitcher }
};
</script>

<style lang="scss">
.i18n-l10n-dialog {
  .close {
    fill: white;
    width: 22px;
    height: 22px;
    transition: 0.2s;
  }
  .close:hover {
    fill: #f7c300;
  }

  .dialog-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown,
  .dropdown.open {
    .head {
      height: 45px;
      width: 130px;
      span {
        font-size: 14px;
      }
    }
    .body {
      .item {
        height: 45px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
      }
    }
  }
}
</style>
