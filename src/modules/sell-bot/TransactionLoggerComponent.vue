<template>
  <div class="transaction-logger">
    <h2>ПРОВЕРКА АККАУНТА</h2>
    <div class="transaction-state">
      <ul v-if="loggerActivated" class="validation-list">
        <li
          class="validationUser"
          v-for="item in loggerValidationRules"
          :key="item.key"
        >
          <div class="validationWrapper">
            <span class="wrapper-icon">
              <icon-check-logger v-if="item.status === 'ok'" />
              <icon-cross-logger v-else-if="item.status === 'failed'" />
              <dots-loader v-else />
            </span>

            <p>{{ item.text }}</p>
          </div>
          <span>{{ item.status }}</span>
        </li>
      </ul>
      <div v-else class="notStarted">Not started yet</div>
    </div>
    <div class="transaction-logger__approval">
      <div class="approval">
        <checkbox v-model="value">
          <span>
            {{ $t("common.accept-terms") }}
          </span>
          <a href="#">
            {{ $t("common.agreement") }}
          </a>
        </checkbox>
      </div>
      <div class="transaction-logger__controls">
        <div class="price">
          <span>
            <small>
              {{ $t("common.total") }}
            </small>
          </span>
          <br />
          <span>
            <strong>0 </strong>
          </span>
        </div>
        <div
          @click="startDealing"
          :class="[
            !loggerValidationState || !value ? 'btn mw disabled' : 'btn mw'
          ]"
        >
          {{ $t("common.sell") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const keys = [
  "loginSteam",
  "passwordSteam",
  "maFileValidation",
  "tradingOffer",
  "emailValidation",
  "emailPasswordValidation"
];

import DealControlDialog from "./DealControlDialog";
import { create } from "vue-modal-dialogs";
const dealingConfirm = create(DealControlDialog, "dialogMode");

export default {
  name: "TransactionLoggerComponent",
  data() {
    return { value: false };
  },

  mounted() {
    let counter = 0;
    const int = setInterval(() => {
      this.$emit("setLoggerInfo", keys[counter]);
      counter++;

      if (counter === keys.length) {
        clearInterval(int);
      }
    }, 1000);
  },
  methods: {
    async startDealing() {
      if (this.loggerValidationState && this.value) {
        if (await dealingConfirm("deal-confirming")) {
          this.$router.push("/bots/rate");
        }
      }
    }
  },
  props: {
    loggerActivated: {
      type: Boolean
    },
    loader: {
      type: Boolean
    },
    loggerValidationState: {
      type: Boolean
    },
    loggerValidationRules: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.transaction-logger {
  padding: 24px;
  height: 100%;
  width: 100%;
  position: relative;

  &__approval {
    width: 100%;
    height: 100px;
    position: relative;
    bottom: 0;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .transaction-state {
    height: 80%;
    display: flex;
    justify-content: center;

    .notStarted {
      align-self: center;
    }

    .validationUser {
      margin-top: 5px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;

      .wrapper-icon {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        fill: #f44336;
      }

      .validationWrapper {
        display: flex;
        align-items: center;

        p {
          margin-left: 5px;
        }
      }

      span {
        font-weight: 700;
      }
    }
    .validation-list {
      width: 100%;
    }
    .not-started {
      margin-top: 40px;
    }
  }
  h2 {
    font-weight: bolder;
    padding-bottom: 8px;
  }
}

.test-icon .icon-path {
  stroke-dashoffset: 70;
  transition: all 700ms linear;
}

.disabled {
  background-color: #22232b !important;
  color: whitesmoke !important;
  border: 0.5px solid whitesmoke;
}
.disabled:hover {
  box-shadow: none !important;
}
</style>
