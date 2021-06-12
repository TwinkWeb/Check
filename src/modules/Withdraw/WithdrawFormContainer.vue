<template>
  <div class="withdraw-forms">
    <withdrawWheel
      :arrArcsOfCircle="arrArcsOfCircle"
      :loader="loader"
      :paymentSystems="paymentSystems"
      :computedRotate="computedRotate"
      @endAnimation="endAnimation"
    />
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
import withdrawWheel from "./withdrawWheel";
import WithdrawForm from "./WithdrawForm";
import { mapGetters, mapActions } from "vuex";

const colorsForCircle = {
  QIWI: "#ff8200",
  YOMONEY: "#8b3ffd",
  Tether: "#22a078",
  Etherium: "#418edd",
  Md: "#1a1f71",
  BITC: "#f7931a",
  PM: "#b00e11",
  MdUAH: "white"
};

export default {
  name: "WithdrawFormContainer",

  components: { withdrawWheel, WithdrawForm },
  data() {
    return {
      totalLength: 0
    };
  },
  computed: {
    ...mapGetters({
      currentTransaction: "payment/currentTransaction",
      paymentWays: "payment/paymentWays",
      currentPayment: "payment/currencyPayment",
      currentCurrency: "currency/currency",
      disabledState: "payment/disabledState",
      loader: "payment/loader",
      balance: "profileState/balance",
      payTransactions: "payment/payTransactions",
      paymentTransactionLength: "payment/paymentTransactionLength",
      sumPaymentTransactions: "payment/sumPaymentTransactions"
    }),
    computedRotate() {
      let arrSumRotate = this.arrArcsOfCircle.map((c, index) => {
        let sum = 0;
        if (index != 0) {
          for (let i = 1; i <= index; i++) {
            sum += Number(this.arrArcsOfCircle[i - 1].percRotate);
          }
        }
        return sum;
      });

      return arrSumRotate;
    },
    paymentSystems() {
      return this.payTransactions.map(c => {
        return c.paymentWay;
      });
    },
    arrArcsOfCircle() {
      const arrOfPerSum = this.payTransactions.map(c => {
        return {
          perc: c.sum / (this.balance / 100),
          strokeOffset:
            this.totalLength -
            (this.totalLength * c.sum) / (this.balance / 100) / 100,
          percRotate: 360 * (c.sum / (this.balance / 100) / 100),
          circleColor: colorsForCircle[c.paymentWay]
        };
      });
      return arrOfPerSum.length === 0 ||
        this.sumPaymentTransactions >= this.balance ||
        this.loader
        ? [
            {
              perc: 0,
              strokeOffset: 1670,
              percRotate: 0,
              circleColor: "none"
            }
          ]
        : arrOfPerSum;
    }
  },
  mounted() {
    let circle = document.querySelector(".main__circle");
    this.totalLength = circle.getTotalLength();
  },
  methods: {
    ...mapActions({
      setNewPayTransaction: "payment/setNewPayTransaction",
      setPaymentAction: "payment/setPaymentTransactions",
      setPayment: "payment/setCurrentPayment",
      setDisabledState: "payment/setDisabledState"
    }),

    endAnimation() {
      this.setDisabledState(false);
    },

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
  display: flex;
  justify-content: center;
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
