<template>
  <div
    class="historyItem"
    :class="{
      open: opened,
      sell: isSellItem,
      withdraw: !isSellItem
    }"
  >
    <div class="topSide">
      <span class="date">{{ $d(getDate, "short") }}</span>
      <span class="type">{{ $t(status) }}</span>
      <span class="amount">{{ $n(amount, "currency") }}</span>
      <div class="smallBtn" @click="opened = !opened">
        <Icon-arrow />
      </div>
    </div>
    <div class="bottomSide">
      <div v-if="isSellItem">
        <sidebar-history-item-sell-item
          v-for="item in getSellItems"
          :key="item.id"
          :src="item.imgUrl"
        />
      </div>
      <div v-if="!isSellItem">
        <div class="withdraw">
          <img
            class="card-icon"
            :src="`/img/` + cardType + `.png`"
            alt="visa"
          />
          <span class="cardNumber">{{ card }}</span>
          <span class="amount">{{ $n(amount, "currency") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import creditCardType from "credit-card-type";
import SidebarHistoryItemSellItem from "./SidebarHistoryItemSellItem";
export default {
  props: {
    id: Number,
    type: {
      type: String,
      validator: value => ["sell", "withdraw"].indexOf(value) !== -1
    },
    card: String,
    amount: Number,
    sellItems: {
      type: Array,
      default() {
        return [];
      }
    },
    date: String
  },
  computed: {
    isSellItem() {
      return this.type === "sell";
    },
    status() {
      return this.isSellItem ? "history_item.sell" : "history_item.exit";
    },
    cardType() {
      return creditCardType(this.card)[0].type;
    },
    getSellItems() {
      return this.sellItems != null ? this.sellItems : [];
    },
    getDate() {
      return new Date(this.date);
    }
  },
  data() {
    return {
      opened: false
    };
  },
  components: {
    SidebarHistoryItemSellItem
  }
};
</script>
<style lang="scss">
.historyItem {
  &.open {
    .topSide {
      border-bottom: 0;
      .smallBtn {
        background-color: $primary;
        svg {
          transform: rotate(180deg);
          color: $black;
        }
      }
    }
    .bottomSide {
      display: block;
    }
  }
  &.sell {
    .bottomSide {
      white-space: nowrap;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
  }
  &.withdraw {
    .bottomSide {
      padding: 10px 15px;
      .withdraw {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 11px;
        }
        .cardNumber {
          padding: 0 5px;
        }
        .amount {
          font-size: 11px;
          .currency {
            font-size: 11px;
          }
        }
      }
    }
  }
  .card-icon {
    max-width: 30px;
  }
  .topSide {
    display: flex;
    padding: 15px 0;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    justify-content: space-between;
    span {
      font-size: 12px;
      font-weight: 500;
      &.date {
        color: #afafaf;
      }
      &.amount {
        font-size: 13px;
        font-weight: bold;
        .currency {
          font-size: 13px;
          font-weight: bold;
        }
      }
    }
  }
  .bottomSide {
    display: none;
    background-color: $black;
    border-radius: 10px;
    .item {
      width: 52px;
      display: inline-block;
      margin: 2px 2px 0 2px;
      img {
        width: 100%;
        height: 36px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
  .amount {
    font-weight: bold;
    .currency {
      color: $primary;
      font-weight: bold;
      margin-right: 2px;
    }
  }
}
</style>
