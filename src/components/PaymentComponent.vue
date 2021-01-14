<template>
  <div class="sidebar-basket">
    <div class="sidebar-basket-content mb">
      <p class="mb headline">{{ $t("withdraw.paymentSystems") }}</p>
      <div class="payment-ways">
        <div
          v-for="(item, key) in paymentWays"
          :key="key"
          @click="changePayment(item.name)"
          :class="[
            item.name === currentPayment ? 'paymentActive payment' : 'payment'
          ]"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="conditions mb">
        <checkbox
          disabled
          v-if="currentPayment === 'QIWI'"
          class="flex mb warning"
          v-model="errorWarning"
        >
          <span style="width: 80%;">
            {{ $t("withdraw.QIWIWarning") }}
          </span>
        </checkbox>

        <checkbox
          v-if="currentPayment === 'QIWI'"
          disabled
          class="flex mb"
          v-model="qiwiOffer"
        >
          <span style="width: 80%;">
            {{ $t("withdraw.QIWIOffer") }}
          </span>
        </checkbox>
        <checkbox v-model="checkOffer" disabled>
          <span>
            {{ $t("withdraw.QIWIOffer") }}
          </span>
          <a href="#">
            {{ $t("withdraw.agreement") }}
          </a>
        </checkbox>
      </div>
      <span
        v-if="!!sumPaymentWithCommission && currentPayment === 'QIWI'"
        class="warning"
        >При использование QIWI взимается комиссия в 2%</span
      >
      <div class="total">
        <div class="priceWrap">
          <div>
            <div class="title">
              {{ $t("withdraw.transactionsSum") }}
            </div>
            <div class="price">
              {{ $currency(sumPaymentTransactions - sumPaymentWithCommission) }}
            </div>
          </div>
        </div>
        <div
          @click="showModal"
          :class="[
            disabledState || payTransactions.length === 0
              ? ' btn mw disabled'
              : 'btn mw'
          ]"
        >
          {{ $t("withdraw.withdrawAction") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DialogLayout from "../components/dialog/DialogLayout";
import { create } from "vue-modal-dialogs";

const messageBox = create(
  DialogLayout,
  "DialogMode",
  "payTransactions",
  "sumPaymentTransactions",
  "sumPaymentWithCommission"
);
export default {
  name: "PaymentComponent",

  props: {
    balance: {
      type: Number,
      default: 0
    },
    currentPayment: {
      type: String
    },
    disabledState: {
      type: Boolean
    },
    paymentWays: {
      type: Array
    },
    sumPaymentWithCommission: {
      type: Number
    },
    sumPaymentTransactions: {
      type: Number
    },
    modalWindow: { type: Boolean },
    payTransactions: { type: Array }
  },

  data() {
    return {
      qiwiOffer: false,
      errorWarning: false,
      checkOffer: false,
      loader: false
    };
  },

  methods: {
    changePayment(payname) {
      this.$emit("changePaymentWay", payname);
    },
    async showModal() {
      if (this.disabledState || this.payTransactions.length === 0) return;
      document.body.style.overflow = "hidden";
      if (
        await messageBox(
          "confirm",
          this.payTransactions,
          this.sumPaymentTransactions,
          this.sumPaymentWithCommission
        )
      ) {
        this.$emit("sentRequest");
        document.body.style.overflow = "visible";
      }
    }
  }
};
</script>

<style lang="scss">
.sidebar-basket {
  position: relative;
  width: 100%;
  height: 597px;
  margin-top: -10px;
  z-index: 3;

  .disabled {
    background-color: #22232b !important;
    color: whitesmoke !important;
    border: 0.5px solid whitesmoke;
  }
  .disabled:hover {
    box-shadow: none !important;
  }
  .paymentsWays {
    color: green;
    padding: 20px;
    background-color: #14141a;
    border-radius: 5px;
  }

  .paymentsWays:not(:first-child) {
    border-left: 1px solid #f8c300;
  }

  .calculatedPayments {
    width: 100%;
    margin-top: 20px;
  }

  .calculatedPayment {
    display: flex;
    border-bottom: 1px dashed grey;

    justify-content: space-between;
  }

  .sidebar-basket-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
  }

  .payment-ways {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 50px);
    grid-gap: 10px;

    flex: 1;
  }
  .headline {
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
  }

  .warning {
    background-color: #2a2c33;
    color: #a83435;
    padding: 10px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .paymentInf-wrapper {
    display: flex;
  }

  .info {
    height: 200px;
    width: 100%;
    border: 2px solid white;

    position: relative;
  }

  .mb {
    margin-bottom: 15px;
  }

  .flex {
    display: flex;
    align-items: flex-start;
  }

  .payment {
    width: 100%;
    background-color: #14141a;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .payment:hover {
    background-color: #f8c300;
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;
  }

  .paymentActive {
    background-color: #f8c300;
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;
  }

  .info {
    display: flex;
    align-items: flex-end;
  }
}
</style>
