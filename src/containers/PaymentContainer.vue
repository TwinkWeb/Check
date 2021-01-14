<template>
  <Payment-component
    :currentPayment="currentPayment"
    :disabledState="disabledState"
    :paymentWays="paymentWays"
    :sumPaymentWithCommission="sumPaymentWithCommission"
    :sumPaymentTransactions="sumPaymentTransactions"
    :modalWindow="modalWindow"
    :payTransactions="payTransactions"
    @sentRequest="checkRequest"
    @changePaymentWay="changePaymentWay($event)"
    @showModal="showModal($event)"
  >
    {{ sumPaymentWithCommission }}</Payment-component
  >
</template>

<script>
import PaymentComponent from "../components/PaymentComponent";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "PaymentContainer",
  data() {
    return { modalWindow: false };
  },
  components: {
    PaymentComponent
  },
  computed: {
    ...mapGetters({
      currentPayment: "payment/currencyPayment",
      disabledState: "payment/disabledState",
      paymentWays: "payment/paymentWays",
      offerData: "payment/offerData",
      sumPaymentWithCommission: "payment/sumPaymentWithCommission",
      sumPaymentTransactions: "payment/sumPaymentTransactions",
      payTransactions: "payment/payTransactions"
    })
  },
  methods: {
    ...mapMutations({
      setPayment: "payment/setCurrentPayment"
    }),
    ...mapActions({
      sendRequest: "payment/sendRequest",
      setPayment: "payment/setCurrentPayment"
    }),
    changePaymentWay(payname) {
      if (this.disabledState) return;
      this.setPayment(payname);
    },
    showModal(c) {
      this.modalWindow = c;
    },
    async checkRequest() {
      if (this.disabledState) return;
      await this.sendRequest();
      alert("asddasd");
    }
  }
};
</script>
