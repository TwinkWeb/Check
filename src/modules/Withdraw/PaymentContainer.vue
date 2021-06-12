<template>
  <Payment-component
    :currentPayment="currentPayment"
    :disabledState="disabledState"
    :sumPaymentWithCommission="sumPaymentWithCommission"
    :sumPaymentTransactions="sumPaymentTransactions"
    :balance="balance"
    :modalWindow="modalWindow"
    :validationState="validationState"
    :payTransactions="payTransactions"
    @sentRequest="checkRequest"
    @changePaymentWay="changePaymentWay($event)"
    @showModal="showModal($event)"
  >
    {{ sumPaymentWithCommission }}</Payment-component
  >
</template>

<script>
import PaymentComponent from "./PaymentComponent";
import { mapActions, mapGetters } from "vuex";
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
      loader: "payment/loader",
      balance: "profileState/balance",
      sumPaymentWithCommission: "payment/sumPaymentWithCommission",
      sumPaymentTransactions: "payment/sumPaymentTransactions",
      payTransactions: "payment/payTransactions",
      validationState: "payment/validationState"
    })
  },
  methods: {
    ...mapActions({
      sendRequest: "payment/sendRequest",
      setPayment: "payment/setCurrentPayment"
    }),
    changePaymentWay(payname) {
      if (this.disabledState) return;
      this.setPayment({ paymentWay: payname, action: "changePaymentWay" });
    },
    showModal(c) {
      this.modalWindow = c;
    },
    async checkRequest() {
      if (this.disabledState) return;
      await this.sendRequest();
    }
  }
};
</script>
