<template>
  <dialog-layout :dialogMode="dialogMode" class="payment-dialog">
    <template v-slot:header>
      <div class="close">
        <icon-close @click="$close(false)"></icon-close>
      </div>
      <div class="title">
        <h1>{{ $t("modals.information") }}</h1>
      </div>
    </template>

    <template v-slot:content>
      <div class="paymentInf-wrapper">
        <div
          v-for="(item, key) in payTransactions"
          class="paymentsWays"
          :key="key"
        >
          <p>{{ $t("modals.payment") }}{{ key + 1 }}:</p>
          <p>{{ $t("modals.paymentWay") }}{{ item.paymentWay }}</p>
          <p>{{ $t("modals.purse") }} {{ item.purse }}</p>
          <p>{{ $t("modals.sum") }} {{ $currency(item.sum) }}</p>
        </div>
      </div>
      <div class="calculatedPayments">
        <p class="mb calculatedPayment">
          {{ $t("modals.amountEstimate") }}
          <span class="green">{{ $currency(sumPaymentTransactions) }}</span>
        </p>
        <p class="mb calculatedPayment">
          {{ $t("modals.commission") }}
          <span class="red">{{ $currency(sumPaymentWithCommission) }}</span>
        </p>
        <p class="mb calculatedPayment ">
          {{ $t("modals.computedSum") }}
          <span class="green">{{
            $currency(sumPaymentTransactions - sumPaymentWithCommission)
          }}</span>
        </p>
      </div>
    </template>

    <template v-slot:footer>
      <div @click="$close(true)" class="btn mw">
        {{ $t("modals.computedSum") }}
      </div>
    </template>
  </dialog-layout>
</template>

<script>
export default {
  name: "Filters",
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: [this.from, this.to]
    };
  },
  methods: {
    close() {
      this.$error({
        message: "closed"
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "node_modules/include-media/dist/include-media";
@import "../../styles/elevation";

.payment-dialog {
  .dialog-header {
    position: relative;

    .title {
      width: 100%;
      text-align: center;
      margin-top: 80px;
    }

    .close {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background-color: #f8c300;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        fill: black;
        font-weight: 600;
        width: 15px;
        height: 15px;
      }
    }

    .close:hover {
      transition: 0.5s;
      box-shadow: 0px 11px 36px #f8c300;
    }
  }
  .dialog-content {
    .paymentsWays {
      color: green;
      padding: 20px;
      max-height: 100px;
      background-color: #14141a;
      border-radius: 5px;
    }

    .paymentInf-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    .mb {
      margin-bottom: 10px;
    }

    .green {
      font-size: 20px;
      color: #74bd37;
      font-weight: 600;
    }
    .red {
      font-size: 20px;
      font-weight: 600;
      color: red;
    }

    .calculatedPayments {
      width: 100%;
      margin-top: 40px;
      font-size: 18px;
      padding: 30px;
    }

    .calculatedPayment {
      display: flex;
      border-bottom: 1px dashed #f8c300;
      text-transform: uppercase;
      justify-content: space-between;
    }
  }

  .dialog-container {
    background-image: url("/img/multiBg.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .button {
    border-radius: 10px;
    width: 200px;
    height: 100px;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    transition: 0.5s;
    box-shadow: 0px 11px 36px #f8c300;
  }
}

.dialog-mask {
  & > div {
    border: none !important;
    @include mat-elevation(24, $primary, 0.7);
  }
}

@mixin mobile {
  .payment-dialog {
  }
}

@include media("<=tablet") {
  @include mobile;
}

@include media("<=phone") {
  @include mobile;
}
</style>
