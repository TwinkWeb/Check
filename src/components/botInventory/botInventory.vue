<template>
  <div class="botInventory">
    <div class="content">
      <div class="top">
        <div class="title">вещи бота</div>
        <div class="filter">Фильтр:</div>
        <dropdown></dropdown>
      </div>
      <div class="buttons">
        <div class="left">
          <div
            class="btn bold"
            :class="{ black: game !== 1 }"
            @click="game = 1"
          >
            CSGO
          </div>
          <div
            class="btn bold"
            :class="{ black: game !== 2 }"
            @click="game = 2"
          >
            DOTA2
          </div>
          <div
            class="btn bold"
            :class="{ black: game !== 3 }"
            @click="game = 3"
          >
            Rust
          </div>
        </div>
        <div class="hide" @click="closeFullInventory">
          <div class="smallBtn yellow">
            <icon-arrow></icon-arrow>
          </div>
          <span>скрыть</span>
        </div>
      </div>
      <div class="items">
        <div v-for="i in 150" :key="i" class="item">
          <img
            src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
            alt="item"
          />
          <div class="price">$ 23.45</div>
        </div>
      </div>
    </div>
    <div class="bot">
      <checkbox v-model="aggree">
        Я принимаю условия <a href="#">соглашения</a>
      </checkbox>
      <div class="price">
        <span>Всего</span>
        <div><span>$</span> 23.45</div>
      </div>
      <div class="btn mw">Продать</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: Boolean
  },
  data() {
    return {
      game: 1,
      aggree: false
    };
  },
  methods: {
    closeFullInventory() {
      this.$emit("close-full-bot-inventory");
    }
  }
};
</script>

<style lang="scss">
@import "bot-inventory-style-helper";
.botInventory {
  @include bot-inventory;
  display: flex;
  background-image: url("/img/marbleSidebar.jpg");
  border-radius: 20px;
  margin-top: -10px;
  background-size: cover;
  flex-direction: column;
  z-index: 1;
  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 25px;
    .item {
      width: 52px;
      height: 50px;
      margin: 2px;
      background-color: $black;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 36px;
        object-position: center;
        object-fit: contain;
      }
      .price {
        font-weight: bold;
        font-size: 10px;
        line-height: 9px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #d5d6da;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    padding-right: 36px;
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
          transform: rotate(-90deg);
        }
      }
      span {
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        text-transform: capitalize;
        padding: 0 20px;
      }
    }
    .left {
      display: flex;
      .btn {
        & + .btn {
          margin-left: 5px;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 107px);
    padding: 25px 25px 40px 25px;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      align-items: center;
      .filter {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        color: #afafaf;
        margin-right: 7px;
      }
      .title {
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        margin-right: 13px;
      }
    }
  }
  .bot {
    width: 100%;
    height: 107px;
    background-color: $black;
    border-radius: 0 0 20px 20px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    padding-right: 65px;
    .checkbox-wrap {
      color: #f4f4f4;
      .checkbox {
        background-color: #545454;
      }
    }
    .price {
      margin-right: 25px;
      margin-left: 57px;
      display: flex;
      flex-direction: column;
      & > span {
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
        color: #afafaf;
        margin-bottom: 2px;
      }
      & > div {
        & > span {
          color: $primary;
        }
      }
    }
  }
}
</style>
