<template>
  <div class="sidebar-basket">
    <div class="sidebar-basket-content" :class="{ opened }">
      <div class="top">
        <span>{{ $t("sell-bot.bot-items.title") }}</span>
        <div>
          <span>{{ $t("sell-bot.bot-items.filters") }}</span>
          <dropdown v-model="filter"></dropdown>
        </div>
      </div>
      <div class="buttons">
        <div class="left">
          <div
            class="btn bold"
            :class="{ black: game !== 1 }"
            @click="game = 1"
          >
            {{ $t("sell-bot.bot-items.games.csgo") }}
          </div>
          <div
            class="btn bold"
            :class="{ black: game !== 2 }"
            @click="game = 2"
          >
            {{ $t("sell-bot.bot-items.games.dota2") }}
          </div>
          <div
            class="btn bold"
            :class="{ black: game !== 3 }"
            @click="game = 3"
          >
            {{ $t("sell-bot.bot-items.games.rust") }}
          </div>
        </div>
        <div class="expander hide" @click="toggleFullInventory">
          <div class="smallBtn yellow">
            <icon-arrow></icon-arrow>
          </div>
          <span v-if="opened">
            {{ $t("sell-bot.bot-items.hide") }}
          </span>
          <span v-else>
            {{ $t("sell-bot.bot-items.show-all") }}
          </span>
        </div>
      </div>
      <div class="items">
        <div v-for="i in 200" :key="i" class="item">
          <img
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
            alt="item"
          />
          <div class="price">{{ $n(price, "currency") }}}</div>
          <div class="trash" @click="deleteItem(i)">
            <icon-trash></icon-trash>
          </div>
        </div>
      </div>
      <div class="condition">
        <checkbox v-model="check">
          <span>
            {{ $t("common.accept-terms") }}
          </span>
          <a href="#">
            {{ $t("common.agreement") }}
          </a>
        </checkbox>
      </div>
      <div class="total">
        <div class="priceWrap">
          <div>
            <div class="title">
              {{ $t("common.total") }}
            </div>
            <div class="price"><span>$</span> 23.45</div>
          </div>
        </div>
        <div class="btn mw">
          {{ $t("common.sell") }}
        </div>
      </div>
      <div class="botBg"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: Boolean,
    price: Number
  },
  methods: {
    toggleFullInventory() {
      this.$emit("toggle-full-bot-inventory");
    },
    deleteItem(item) {
      this.$emit("delete-item", item);
    }
  },
  data() {
    return {
      check: false,
      filter: "Цена",
      game: 1
    };
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
  .sidebar-basket-content {
    position: absolute;
    right: 0;
    top: 0;
    height: 597px;
    width: 272px;
    background-image: url("/img/marbleTexture.jpg");
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    padding: 12px;
    transition: 0.3s ease-in-out;
    will-change: auto;

    &.opened {
      width: 878px;

      .items {
        grid-template-columns: repeat(11, 1fr);
      }
      .condition {
        position: relative;
        width: 100%;
        z-index: 1;
        height: 12px;
        margin-bottom: 28px;
        .checkbox-wrap {
          top: 54px;

          .checkbox {
            background-color: #545454;
          }
        }
      }

      .total {
        .priceWrap {
          flex-grow: 1;
          padding-right: 25px;
        }
      }

      .botBg {
        opacity: 1;
      }

      .top {
        & > div {
          margin-right: 100%;
        }
      }
      .left {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .botBg {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $black;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 108px;
    z-index: 0;
    border-radius: 0 0 20px 20px;
    transition: 0.3s ease-in-out;
    opacity: 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
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

      .close {
        max-width: 0;
        overflow: hidden;
        transition: 0.3s ease-in-out;
        padding: 0;
      }
    }

    .expander {
      position: relative;
      z-index: 2;
    }

    .left {
      display: flex;
      transition: 0.1s ease-in-out;
      position: relative;
      z-index: 1;
      max-width: 0;
      opacity: 0;
      visibility: hidden;
      .btn {
        & + .btn {
          margin-left: 5px;
        }
      }
    }
  }

  .title {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #afafaf;
    margin-bottom: 2px;
  }

  .total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    .priceWrap {
      display: flex;
      flex-direction: column;
      align-content: flex-end;
      align-items: flex-end;
      transition: 0.3s ease-in-out;
      padding-right: 0;

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    .price {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      margin-left: 0;

      span {
        color: $primary;
      }
    }
  }

  .condition {
    width: 100%;
    margin-bottom: 28px;
    position: relative;
    z-index: 1;
    height: 12px;

    .checkbox-wrap {
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.3s ease-in-out;
    }
  }

  .items {
    width: calc(100% + 8px);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 0;
    margin-bottom: 14px;

    .item {
      width: 71px;
      height: 70px;
      background-color: $black;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2px;
      cursor: pointer;
      img {
        width: 100%;
        height: 50px;
        object-fit: contain;
        object-position: center;
      }

      .price {
        font-weight: bold;
        font-size: 10px;
        line-height: 9px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        text-align: center;
      }
    }
    .trash {
      width: 40px;
      height: 30px;
      position: relative;
      z-index: 1;
      top: -50px;
      opacity: 80%;
      display: none;
    }
  }
  .item:hover {
    img {
      opacity: 30%;
    }
    .trash {
      display: block;
    }
  }

  .showFull {
    margin-bottom: 25px;
    height: 30px;
    background-color: $black;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: inherit;
    user-select: none;
    text-decoration: unset;

    .smallBtn {
      svg {
        transform: rotate(90deg);
      }
    }

    span {
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      text-transform: capitalize;
      padding: 0 13px;
    }
  }

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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
