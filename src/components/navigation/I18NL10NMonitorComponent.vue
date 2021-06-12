<template>
  <button type="button" @click="open" class="i18n-l10n-monitor">
    {{ currentLang.shortName }} | {{ currencySymbol }}
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { languageConfig } from "@/components/navigation/config";

export default {
  name: "I18NL10NMonitorComponent",
  methods: {
    open() {
      this.$emit("openi18n");
    }
  },
  computed: {
    ...mapGetters({
      currencyData: "currency/currencyData"
    }),
    currentLang() {
      return languageConfig.get(this.$i18n.locale);
    },
    currencySymbol() {
      return (this.currencyData && this.currencyData.currencySymbol) || "$";
    }
  }
};
</script>

<style lang="scss">
.i18n-l10n-monitor {
  border: none;
  color: #f8c300;
  height: 36px;
  border-radius: 18px;
  background-color: transparent;
  font-size: small;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    background-color: #f8c300;
    color: #141419;
    transition: all 250ms;
  }
}
</style>
