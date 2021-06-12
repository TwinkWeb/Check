<template>
  <dialog-layout :dialogMode="dialogMode" class="payment-dialog">
    <template v-slot:header></template>

    <template v-slot:content>
      <div class="dealing-information">
        <div class="dealing-information__block">
          <div class="dealing-information__inf">
            <p>{{ $t("sell-bot.bot-items.dealDialog.dealBot") }}</p>
            <p class="dealing-information__botsName">botsname</p>
          </div>
          <hr />
          <div class="dealing-information__inf">
            <p class="grey">
              {{ $t("sell-bot.bot-items.dealDialog.dealsNumber") }}
            </p>
            <p class="grey">#111111</p>
          </div>
          <hr />
        </div>
        <div class="dealing-information__button" @click="manageDealStatus()">
          <icon-browser />
          <p>{{ $t("sell-bot.bot-items.dealDialog.confirmInBrowser") }}</p>
        </div>
        <div class="dealing-information__button" @click="manageDealStatus()">
          <icon-steam-dialog />
          <p>{{ $t("sell-bot.bot-items.dealDialog.confirmInSteam") }}</p>
        </div>
        <div class="dealing-information__loaderWrapper">
          <icon-ok-status v-if="statusConfirmation === 'ok'" class="status" />
          <loader-spinner v-if="statusConfirmation === 'waiting'" />
          <icon-error-status
            v-if="statusConfirmation === 'error'"
            class="status"
          />
          <p>{{ dealsStatus }}</p>
        </div>
        <Timer
          @stop-count-down="stopDealing"
          :statusConfirmation="statusConfirmation"
        />
      </div>
      <div class="dealing-instruction">
        <div class="dealing-instruction__wrapper">
          <p class="number">1.</p>
          <p>
            {{ $t("sell-bot.bot-items.dealDialog.firstStep") }}
          </p>
          <img class="atlantWithComputer" src="/img/AtlantOnComputer.png" />
        </div>
        <div class="dealing-instruction__wrapper">
          <p class="number">2.</p>

          <img class="atlantWithPhone" src="/img/AtlantWithPhone.png" alt="" />

          <p>
            {{ $t("sell-bot.bot-items.dealDialog.secondStep") }}
          </p>
        </div>
        <div class="dealing-instruction__wrapper">
          <p class="number">3.</p>

          <p>
            {{ $t("sell-bot.bot-items.dealDialog.thirdStep") }}
          </p>
          <img
            style=""
            class="atlantWithMoney"
            src="/img/AtlantWithMoney.png"
            alt=""
          />
        </div>
      </div>
    </template>

    <template v-slot:footer> </template>
  </dialog-layout>
</template>

<script>
import Timer from "./Timer";

export default {
  name: "DealConfirming",
  components: {
    Timer
  },
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
      value: [this.from, this.to],
      statusConfirmation: "waiting",
      dealsStatus: ""
    };
  },
  mounted() {
    this.dealsStatus = this.$t("sell-bot.bot-items.dealDialog.loading");
  },
  methods: {
    stopDealing() {
      this.statusConfirmation = "error";
      this.dealsStatus = this.$t(
        "sell-bot.bot-items.dealDialog.dealStatusError"
      );
      setTimeout(() => {
        this.$close(false);
      }, 600);
    },
    manageDealStatus() {
      this.statusConfirmation = "ok";
      this.dealsStatus = this.$t(
        "sell-bot.bot-items.dealDialog.dealStatusSuccess"
      );
      setTimeout(() => {
        this.$close(true);
      }, 1000);
    },
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
.grey {
  color: rgb(106, 101, 105);
}

.dealing-information {
  width: 100px;
  flex-grow: 0.8;
  padding-right: 35px;
  position: relative;

  &__loaderWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 230px;
    align-items: center;
    overflow: hidden;

    flex-direction: column;

    p {
      font-size: 14px;
      font-weight: 500;
      margin-top: 20px;
    }
  }
  &__block {
    width: 100%;
    margin-bottom: 30px;

    p {
      font-weight: 500;
    }
  }

  &__inf {
    width: 80%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }

  &__button {
    width: 100%;
    height: 40px;
    background-color: rgb(27, 26, 31);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 13px;
    cursor: pointer;
    transition: 0.5s;

    svg {
      fill: white;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      transition: 0.1;
    }

    &:hover {
      background-color: rgb(249, 195, 1);
      box-shadow: 0 5px 13px rgba(254, 208, 37, 0.41);
      color: black;
      svg {
        fill: black;
      }
    }
    p {
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  &__botsName {
    text-decoration: underline;
    color: rgb(247, 195, 3);
    cursor: pointer;
    transition: 0.1;

    &:hover {
      color: rgb(255, 202, 98);
    }
  }
}

.dealing-instruction {
  width: 100px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__wrapper {
    border-radius: 10px;
    padding: 15px;
    position: relative;
    height: 31%;
    border: 2px solid #ffcc02;
    background-color: #1b1a1f;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
}

.status {
  animation: rotate 0.4s ease-out;
}
.number {
  position: absolute;
  top: 5%;
}
.atlantWithComputer {
  height: 200px;
  width: 200px;
}

.atlantWithPhone {
  height: 200px;
  width: 100px;
}
.atlantWithMoney {
  height: 170px;
  width: 140px;
}

@keyframes rotate {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@mixin mobile {
  .payment-dialog {
  }
}
hr {
  border: 0;
  height: 1px;
  background: rgb(51, 52, 59);
  margin-top: 10px;
}

@include media("<=tablet") {
  @include mobile;
}

@include media("<=phone") {
  @include mobile;
}
</style>
