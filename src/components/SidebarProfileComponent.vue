<template>
  <div class="sidebarProfile">
    <div class="avatar">
      <icon-ornament-avatar />
      <img :src="avatar || defaultAvatar" alt="avatar" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="currency">
      <div class="title">{{ $t("sidebar.currency") }}</div>
      <div class="currencyDropdown">
        <dropdown
          @input="setCurrency($event)"
          :value="currency"
          :options="currencyOptions"
          :by="'id'"
        ></dropdown>
      </div>
    </div>
    <div class="title">{{ $t("sidebar.balance") }}</div>
    <div class="balance">
      <div class="amount">
        {{ $currency(balance) }}
      </div>

      <div @click="$router.push('/withdraw')" class="btn mw">
        {{ $t("sidebar.withdraw") }}
      </div>
    </div>
    <div class="title">{{ $t("sidebar.tradelink") }}</div>
    <div class="trade">
      <vue-input v-model="localTradelink" placeholder="https:/steamcommunity">
        <template v-slot:btn>
          <div class="btn">{{ $t("common.ok") }}</div>
        </template>
      </vue-input>
    </div>
    <div class="title">{{ $t("sidebar.authBy") }}</div>
    <div class="socials">
      <div class="smallBtn">
        <icon-google />
      </div>
      <div class="smallBtn">
        <icon-telegram />
      </div>
      <div class="smallBtn">
        <icon-vk />
      </div>
      <div class="smallBtn">
        <icon-discord />
      </div>
    </div>
    <div class="title">
      {{ $t("sidebar.statistics") }}
    </div>
    <div class="stats">
      <div class="item">
        <div>{{ $n(bonus, "currency") }}</div>
        <span>
          {{ $t("sidebar.bonus") }}
        </span>
      </div>
      <div class="item">
        <div>{{ $n(sold, "currency") }}</div>
        <span>{{ $t("sidebar.sell") }}</span>
      </div>
      <div class="item">
        <div>{{ $n(profit, "currency") }}</div>
        <span>{{ $t("sidebar.profit") }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: String,
    name: String,
    tradelink: String,
    currency: String,
    currencyOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    bonus: {
      type: Number,
      default: 0
    },
    sold: {
      type: Number,
      default: 0
    },
    profit: {
      type: Number,
      default: 0
    },
    balance: {
      type: Number,
      default: 0
    },
    setTradeLink: Function
  },
  data() {
    return {
      emptyAvatar: "avatar-blank.png"
    };
  },
  computed: {
    defaultAvatar() {
      return `/img/${this.emptyAvatar}`;
    },
    localTradelink: {
      get() {
        return this.$store.state.profileState.tradelink;
      },
      set(value) {
        this.setTradeLink(value);
      }
    }
  },
  methods: {
    setCurrency(currency) {
      this.$emit("currency-change", currency);
    },
    isLearningRegexNow: string => {
      return /^https?:\/\/steamcommunity\.com\/tradeoffer\/.*/.test(string);
    }
  }
};
</script>
<style lang="scss">
.sidebarProfile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  .stats {
    width: 100%;
    background-color: $black;
    border-radius: 8px;
    padding: 18px;
    display: flex;
    justify-content: space-between;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > span {
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        color: #525560;
      }

      div {
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        margin-bottom: 8px;

        span {
          color: $primary;
        }
      }
    }
  }

  .socials {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    .smallBtn {
      & + .smallBtn {
        margin-left: 7px;
      }
    }
  }

  .trade {
    width: 100%;
    margin-bottom: 20px;
  }

  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    .amount {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.03em;
      text-transform: uppercase;

      span {
        color: $primary;
      }
    }
  }

  .currency {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    .title {
      margin-bottom: 0;
    }

    .currencyDropdown {
      width: 100px;
    }
  }

  .title {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #afafaf;
    margin-bottom: 9px;
    width: 100%;
  }

  .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    color: #d3d3d3;
    margin-top: 11px;
    margin-bottom: 24px;
  }

  .avatar {
    width: 142px;
    height: 142px;
    border-radius: 50%;
    border: 16px solid transparent;
    position: relative;

    svg {
      position: absolute;
      width: calc(100% + 32px);
      height: calc(100% + 32px);
      left: -16px;
      top: -16px;
    }

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
