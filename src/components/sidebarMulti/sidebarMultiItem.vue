<template>
  <div class="multiItemWrap">
    <div class="multiItem">
      <div class="logo">
        <img :src="avatar" alt="logo" />
        <span class="online" v-show="active"><span></span></span>
      </div>
      <div class="user-info">
        <span class="nickname">{{ nickname }}</span>
        <span class="balance">{{ $n(amount, "currency") }}</span>
      </div>
      <div class="btn">
        {{ $t(activated) }}
      </div>
      <div
        class="more"
        @click="showDropdown = !showDropdown"
        v-click-outside="hideDropdown"
      >
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <div class="dropdownContainer" v-show="showDropdown">
          <div class="dropdownItem" @click="showTradeLink = !showTradeLink">
            {{ $t("common.tradelink") }}
          </div>
          <div class="dropdownItem delete" @click="deleteItem">
            {{ $t("common.delete") }}
          </div>
        </div>
      </div>
    </div>
    <div class="tradeLink" v-show="showTradeLink">
      <vue-input v-model="tradeLink"></vue-input>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  directives: {
    ClickOutside
  },
  props: {
    id: Number,
    avatar: String,
    nickname: String,
    amount: Number,
    active: Boolean
  },
  data() {
    return {
      showDropdown: false,
      showTradeLink: false,
      tradeLink: "https:/steamcommunity"
    };
  },
  methods: {
    hideDropdown() {
      this.showDropdown = false;
    },
    deleteItem() {
      this.$emit("delete-multi-item", this.id);
    }
  },
  computed: {
    activated() {
      return this.active ? "common.deactivate" : "common.activate";
    }
  }
};
</script>
<style lang="scss">
.multiItemWrap {
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  .multiItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      position: relative;
      img {
        height: 36px;
        width: 36px;
      }
      .online {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        right: 2px;
        bottom: 0;
        background-color: #14141a;
        span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          position: absolute;
          left: 3px;
          top: 3px;
          background-color: #24ff00;
        }
      }
    }
    .user-info {
      display: flex;
      flex-direction: column;
      .nickname {
        font-size: 11px;
        font-weight: 600;
        color: #d3d3d3;
      }
      .balance {
        font-size: 12px;
        font-weight: bold;
        margin-top: 2px;
        .currency {
          color: $primary;
        }
      }
    }
    .btn {
      max-width: 92px;
    }
    .more {
      background-color: #15161c;
      height: 30px;
      border-radius: 5px;
      padding: 0 2px;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      .dropdownContainer {
        position: absolute;
        background-color: $white;
        color: #515151;
        padding: 10px 15px;
        z-index: 1;
        right: 0;
        border-radius: 5px;
        top: 38px;
        .dropdownItem {
          color: #515151;
          font-size: 11px;
          padding-bottom: 5px;
          &.delete {
            font-weight: 700;
            padding-bottom: 0;
          }
        }
        &::before {
          content: "";
          position: absolute;
          right: 7px;
          top: -8px;
          display: inline-block;
          margin-left: 2px;
          vertical-align: middle;
          border-top: 6px dashed;
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
          border-top-width: 0;
          border-bottom: 10px solid #fff;
        }
      }
      .dot {
        background-color: #c4c4c4;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        margin-right: 2px;
        display: inline-block;
      }
    }
  }
  .tradeLink {
    margin-top: 15px;
  }
}
</style>
