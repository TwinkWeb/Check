<template>
  <div :class="['shopping-card-header ' + buttonState]">
    <div class="top">
      <span>{{ $t("sell-bot.bot-items.title") }}</span>
      <div>
        <span>{{ $t("sell-bot.bot-items.filters") }}</span>
        <!--          <dropdown v-model="filter"></dropdown>-->
      </div>
    </div>

    <div class="buttons">
      <game-selector :currentGame="filter.game" @select-game="selectGame" />

      <div class="expander hide" @click="toggleFullInventory">
        <div class="smallBtn yellow">
          <icon-arrow></icon-arrow>
        </div>
        <span v-if="buttonState === 'opened'">
          {{ $t("sell-bot.bot-items.hide") }}
        </span>
        <span v-else>
          {{ $t("sell-bot.bot-items.show-all") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import GameSelector from "./GameSelector";

export default {
  name: "ShoppingCardHeader",
  props: {
    buttonState: {
      type: String
    },
    filter: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    toggleFullInventory() {
      this.$emit("toggle-full-bot-inventory");
    },
    selectGame(game) {
      this.$emit("select-game", game);
    }
  },

  components: {
    GameSelector
  }
};
</script>

<style lang="scss">
.shopping-card-header {
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;

    & > span {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      white-space: nowrap;
      margin-right: 13px;
    }

    & > div {
      display: flex;
      align-items: center;
      transition: 0.3s ease-in-out;
      margin-right: 0%;

      & > span {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        color: #afafaf;
        margin-right: 7px;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 25px;

    .hide {
      display: flex;
      align-content: center;
      align-items: center;
      background-color: $black;
      border-radius: 6px;
      cursor: pointer;
      user-select: none;

      .smallBtn {
        svg {
          transition: 0.3s ease-in-out;
          transform: rotate(90deg);
        }
      }

      span {
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        text-transform: capitalize;
        padding: 0 20px;
      }

      .open {
        overflow: hidden;
        transition: 0.3s ease-in-out;
        white-space: nowrap;
        max-width: 140px;
      }
    }

    .expander {
      position: relative;
      z-index: 2;
    }
  }

  &.opened {
    .top {
      & > div {
        margin-right: 100%;
      }
    }

    .smallBtn {
      svg {
        transform: rotate(180deg);
      }
    }

    .shopping-card-game-selector {
      opacity: 1;
      visibility: visible;
    }

    .buttons {
      justify-content: space-between;
    }
  }
}
</style>
