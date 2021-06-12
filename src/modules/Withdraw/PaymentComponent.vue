<template>
  <div class="payment-component">
    <div class="payment-component-content">
      <p class="mb headline">{{ $t("withdraw.paymentSystems") }}</p>
      <div class="payment-ways">
        <div
          v-for="item in config"
          @click="changePayment(item.id)"
          :key="item.id"
          :class="[
            item.id === currentPayment ? 'paymentActive payment' : 'payment'
          ]"
        >
          <iconUAH v-if="item.id === 'MdUAH'" class="uah-icon"></iconUAH>
          <component v-bind:is="item.icon"></component>
        </div>
      </div>

      <div class="conditions mb">
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
            {{ $t("withdraw.offer") }}
          </span>
        </checkbox>
      </div>
      <span
        v-if="!!sumPaymentWithCommission && currentPayment === config[0].id"
        class="warning"
        >{{ $t("withdraw.alertCommission") }}</span
      >
      <div class="total">
        <div class="priceWrap">
          <div>
            <div class="title">
              {{ $t("withdraw.transactionsSum") }}
            </div>
            <animated-number
              class="price"
              :value="sumValidate"
              :formatValue="formatToPrice"
              :duration="800"
            >
            </animated-number>
          </div>
        </div>
        <div
          @click="showModal"
          :class="[
            disabledState || validationState || !offerAgreement
              ? 'btn mw disabled'
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
import PaymentDialog from "./PaymentDialog";
import { create } from "vue-modal-dialogs";
import AnimatedNumber from "animated-number-vue";

const computedPayment = create(
  PaymentDialog,
  "dialogMode",
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

    validationState: {
      type: Boolean
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
  components: {
    AnimatedNumber
  },
  data() {
    return {
      qiwiOffer: false,
      checkOffer: false,
      loader: false,
      config: [
        { id: "QIWI", icon: "icon-qiwi-bg" },
        { id: "YOMONEY", icon: "icon-um-bg" },
        { id: "Tether", icon: "icon-thether-bg" },
        { id: "Etherium", icon: "icon-etherium-bg" },
        { id: "Md", icon: "icon-visa-bg" },
        { id: "MdUAH", icon: "icon-visa-bg" },
        { id: "BITC", icon: "icon-bitcoin-bg" },
        { id: "PM", icon: "icon-pm-bg" }
      ]
    };
  },

  methods: {
    changePayment(payname) {
      this.$emit("changePaymentWay", payname);
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    async showModal() {
      if (this.disabledState || this.validationState) return;
      if (
        await computedPayment(
          "payment",
          this.payTransactions,
          this.sumPaymentTransactions,
          this.sumPaymentWithCommission
        )
      ) {
        this.$emit("sentRequest");
      }
    }
  },
  computed: {
    sumValidate() {
      return this.sumPaymentTransactions > this.balance
        ? 0
        : this.sumPaymentTransactions;
    },
    offerAgreement() {
      if (this.currentPayment === "QIWI") {
        return this.checkOffer && this.qiwiOffer;
      } else {
        return this.checkOffer;
      }
    }
  }
};
</script>

<style lang="scss">
.payment-component {
  position: relative;
  width: 272px;
  height: 100%;
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

  .calculatedPayments {
    width: 100%;
    margin-top: 20px;
  }

  .calculatedPayment {
    display: flex;
    border-bottom: 1px dashed grey;

    justify-content: space-between;
  }

  .payment-component-content {
    height: 100%;
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
    margin: 10px 0;
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
    margin-bottom: 10px;
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
    position: relative;

    .uah-icon {
      position: absolute;
      top: 0;
      right: 0;
    }

    svg {
      fill: #7b7b7d;
    }
  }

  .payment:hover {
    background-color: #f8c300;
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;
    svg {
      fill: black !important;
      transition: 0.5s;
    }
  }

  .paymentActive {
    background-color: #f8c300;
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;

    svg {
      fill: black !important;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .priceWrap {
      .title {
        font-size: 11px;
        color: #afafaf;
        margin-bottom: 10px;
      }

      .price {
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .info {
    display: flex;
    align-items: flex-end;
  }
}
</style>
