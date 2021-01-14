<template>
  <sidebar-profile-component
    :avatar="profileInfo.avatar"
    :name="profileInfo.avatar"
    :balance="profileStatistics.balance"
    :sold="profileStatistics.sold"
    :profit="profileStatistics.profit"
    :bonus="profileStatistics.bonuses"
    :tradelink="profileTradelink"
    :currencyOptions="currencyOptions"
    :currency="currency"
    :setTradeLink="setTradeLink"
    @currency-change="setCurrency($event)"
  />
</template>
<script>
import SidebarProfileComponent from "../components/SidebarProfileComponent";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    SidebarProfileComponent
  },
  computed: {
    ...mapState({
      profileInfo: state => state.profileState.profileInfo,
      profileStatistics: state => state.profileState.statistic,
      profileTradelink: state => state.profileState.tradelink
    }),
    ...mapGetters({
      currencyOptions: "currency/currencyOptions",
      currency: "currency/currency"
    })
  },
  methods: {
    ...mapActions({
      setTradeLink: "profileState/setTradelink",
      setCurrency: "currency/setCurrency"
    })
  }
};
</script>
