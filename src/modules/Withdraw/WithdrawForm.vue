<template>
  <div class="sellBotForm">
    <div class="bg"></div>
    <div class="wrap">
      <div class="headlineForWithdraw">{{ $t("withdraw.balance") }}</div>
      <div class="headlineForWithdraw mb">{{ $currency(balance) }}</div>

      <div class="tabs">
        <p
          v-for="(item, key) in paymentTransactionLength"
          :key="key"
          :class="[num === item ? 'tab tabActive' : 'tab']"
          @click="changeTab(item)"
        >
          {{ $t("withdraw.payTransaction") }} №{{ item }}
        </p>
      </div>
      <div class="mt row mb">
        <div class="col">
          <div class="title">
            {{ $t("withdraw.sum") }}
          </div>

          <div class="wrapper">
            <span class="paymentWay">{{ currentCurrency }}.</span>
            <vue-input
              v-model.trim="$v.sum.$model"
              @input="setPaymentTransactions"
              :disabled="disabledState"
            ></vue-input>
          </div>

          <small v-if="$v.sum.$dirty && !$v.sum.required" class="warning"
            >Данное поле обязательно к заполнению</small
          >
          <small v-else-if="!sumValidation" class="warning"
            >Сумма транзакций превышена</small
          >
        </div>
        <div class="col">
          <div class="title">
            {{ $t("withdraw.purseNumber") }}
          </div>

          <div class="wrapper">
            <span class="paymentWay">{{ currentPayment }}</span>
            <vue-input
              v-model.trim="$v.purse.$model"
              @input="setPaymentTransactions"
              :disabled="disabledState"
            ></vue-input>
          </div>
          <small v-if="$v.purse.$dirty && !$v.purse.required" class="warning"
            >Данное поле обязательно к заполнению</small
          >
          <small v-else-if="$v.purse.$error" class="warning">{{
            errorPurse
          }}</small>
        </div>
      </div>

      <div class="dedicate">
        <div
          @click="addPayTransaction"
          :class="[
            disabledState ? 'smallBtn disabled' : 'smallBtn yellow black'
          ]"
        >
          <span>+</span>
        </div>
        <p>{{ $t("withdraw.dedicateTransaction") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";

import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations() {
    switch (this.currentPayment) {
      case "QIWI": {
        return {
          purse: {
            required,
            checkTitle(value) {
              const val = value.match(/[\p{Alpha}\p{M}\p{Pc}\p{Join_C}]/gu)
                ? false
                : true;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.letterContain"
                  ))
                : "";
              return val;
            },
            paymentLength(value) {
              const val = value.split("").length === 11;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.withdrawQiwiLength"
                  ))
                : "";
              return val;
            }
          },
          sum: {
            required
          }
        };
      }
      case "YOMONEY": {
        return {
          purse: {
            required,
            checkFormat(value) {
              const val = value.slice(0, 4) === "4100";
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidatiorror.YmValidation"
                  ))
                : "";
              return val;
            },
            checkTitle(value) {
              const val = value.match(/[\p{Alpha}\p{M}\p{Pc}\p{Join_C}]/gu)
                ? false
                : true;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.letterContain"
                  ))
                : "";
              return val;
            },

            paymentLength(value) {
              const val = value.split("").join("").length === 16;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.withdrawUmoneyLength"
                  ))
                : "";
              return val;
            }
          },
          sum: {
            required
          }
        };
      }
      case "Md": {
        return {
          purse: {
            required,
            checkTitle(value) {
              const val = value.match(/[\p{Alpha}\p{M}\p{Pc}\p{Join_C}]/gu)
                ? false
                : true;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.letterContain"
                  ))
                : "";
              return val;
            },
            paymentLength(value) {
              const val = value.split("").join("").length === 16;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.withdrawUmoneyLength"
                  ))
                : "";
              return val;
            }
          },
          sum: {
            required
          }
        };
      }
      case "PM": {
        return {
          purse: {
            required,
            checkCurrency() {
              const val = this.currentCurrency === "USD";
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.currencyValidation"
                  ))
                : "";
              return val;
            },
            checkFormat() {
              const val =
                this.purse.slice(0, 1).toLowerCase() !=
                this.purse.slice(0, 1).toUpperCase();
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.firstLetterValidation"
                  ))
                : "";
              return val;
            },
            paymentLength(value) {
              const val = value.split("").join("").length === 9;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.withdrawPmLength"
                  ))
                : "";
              return val;
            }
          },
          sum: {
            required
          }
        };
      }
      case "Md UAH": {
        return {
          purse: {
            required,
            checkTitle(value) {
              const val = value.match(/[\p{Alpha}\p{M}\p{Pc}\p{Join_C}]/gu)
                ? false
                : true;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.letterContain"
                  ))
                : "";
              return val;
            },
            paymentLength(value) {
              const val =
                value.split("").join("").length === 16 ||
                value.split("").join("").length === 18;
              !val
                ? (this.errorPurse = this.$t(
                    "withdrawValidationError.withdrawVisaUaLength"
                  ))
                : "";
              return val;
            }
          },
          sum: {
            required
          }
        };
      }
      default: {
        return {
          purse: {
            required
          },
          sum: {
            required
          }
        };
      }
    }
  },
  data() {
    return {
      num: 1,
      purse: "",
      sum: "",
      message: ""
    };
  },
  watch: {
    payTransactions: function() {
      if (this.payTransactions.length === 0) {
        (this.sum = ""), (this.purse = "");
        this.$v.$reset();
      }
    },
    num: function() {
      this.$emit("changeNum", this.num);
    }
  },

  computed: {
    errorPurse: {
      get: function() {
        return this.message;
      },
      set: function(newValue) {
        this.message = newValue;
      }
    },
    sumValidation() {
      return this.sumPaymentTransactions < this.balance;
    }
  },
  props: {
    paymentTransactionLength: {
      type: Number
    },
    validationState: {
      type: Boolean
    },
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
    currentCurrency: {
      type: String
    },
    payTransactions: {
      type: Array
    },
    sumPaymentTransactions: {
      type: Number
    }
  },

  methods: {
    changeTab(item) {
      this.num = item;
      const initialTransaction = this.payTransactions.find(
        c => c.id === this.num
      );
      if (initialTransaction) {
        this.purse = initialTransaction.purse;
        this.sum = initialTransaction.sum;
        this.$emit("setCurrentPayment", {
          paymentWay: initialTransaction.paymentWay,
          num: this.num
        });
      } else {
        this.$emit("setCurrentPayment", {
          num: this.num
        });
        this.$v.$reset();
        this.purse = "";
        this.sum = "";
      }
    },
    addPayTransaction() {
      if (this.disabledState) return;
      this.$emit("addPaymentTransaction");
    },
    setPaymentTransactions() {
      this.$emit("setPaymentTransactions", {
        id: this.num,
        paymentWay: this.currentPayment,
        purse: this.purse,
        validation: !this.$v.$invalid && this.sumValidation,
        sum: this.sum
      });
    }
  }
};
</script>

<style scoped lang="scss">
.sellBotForm {
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 218px;
    height: 218px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(72, 113, 232, 0.15) 0%,
      rgba(71, 112, 231, 0.01) 89.06%
    );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
  }

  .disabled {
    background-color: #22232b;
    color: whitesmoke;
  }
  .disabled:hover {
    box-shadow: none;
  }

  .black {
    color: black;
  }

  .paymentWay {
    position: absolute;
    right: 8px;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-family: Montserrat;
    color: rgba(255, 255, 255, 0.3);
  }

  .warning {
    font-weight: bold;
    font-size: 10px;
    line-height: 15px;
    opacity: 0.9;
    margin-top: 18px;
    margin-bottom: 8px;
    color: red;
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    .col {
      width: calc(50% - 8px);
      position: relative;
    }
  }

  .dedicate {
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    background-color: #14141a;
    border-radius: 12px;

    p {
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: 600;
      font-size: 10px;
    }
  }

  .tabs {
    display: flex;
    width: 100%;
    font-weight: 700;
    justify-content: flex-start;

    .tab:not(:first-child) {
      margin-left: 12px;
    }

    .tab {
      font-size: 12px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    .tabActive {
      border-bottom: 2px solid #f8c300;
    }
  }

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .subTitle {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    opacity: 0.9;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .btnForWithraw {
    font-size: 22px;
  }

  .mt {
    margin-top: 10px;
  }
  .mb {
    margin-bottom: 30px;
  }

  .headlineForWithdraw {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;

    &.mb {
      margin-bottom: 30px;
    }
  }

  .title {
    width: 100%;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #afafaf;
    margin-bottom: 6px;
  }
  .btn {
    svg {
      margin-right: 6px;
    }
  }
  .btn.formBtn {
    margin-top: 18px;
    width: 192px;
    &.btn2 {
      margin-top: 33px;
    }
  }
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 100%;
    position: relative;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
}
</style>
