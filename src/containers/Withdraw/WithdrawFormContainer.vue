<template>
  <div class="withdraw-forms">
    <wheel :disabled="true" />
    <withdraw-form
      class="form"
      :currentPayment="currentPayment"
      :currentCurrency="currentCurrency"
      :disabledState="disabledState"
      :balance="balance"
      :sumPaymentTransactions="sumPaymentTransactions"
      :payTransactions="payTransactions"
      :paymentTransactionLength="paymentTransactionLength"
      @setCurrentPayment="setCurrentPayment($event)"
      @addPaymentTransaction="addPaymentTransaction"
      @setPaymentTransactions="setPaymentTransactions($event)"
    />
  </div>
</template>
<script>
import Wheel from "@/components/Wheel";
import WithdrawForm from "@/components/WithdrawForm";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WithdrawFormContainer",
  components: { Wheel, WithdrawForm },

  computed: {
    ...mapGetters({
      currentPayment: "payment/currencyPayment",
      currentCurrency: "currency/currency",
      disabledState: "payment/disabledState",
      balance: "profileState/balance",
      payTransactions: "payment/payTransactions",
      paymentTransactionLength: "payment/paymentTransactionLength",
      sumPaymentTransactions: "payment/sumPaymentTransactions"
    })
  },
  methods: {
    ...mapActions({
      setNewPayTransaction: "payment/setNewPayTransaction",
      setPaymentAction: "payment/setPaymentTransactions",
      setPayment: "payment/setCurrentPayment"
    }),

    setCurrentPayment(payment) {
      this.setPayment(payment);
    },

    addPaymentTransaction() {
      this.setNewPayTransaction();
    },
    setPaymentTransactions(obj) {
      this.setPaymentAction(obj);
    }
  }
};
</script>
<style lang="scss">
.withdraw-forms {
  .form {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -30%);
    z-index: 2;
    width: 316px;
  }
}
</style>
