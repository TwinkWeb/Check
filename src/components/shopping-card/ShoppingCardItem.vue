<template>
  <div class="shopping-card-item">
    <img :src="getImage(item.imageToken)" :alt="item.name" />
    <div class="price">{{ $currency(item.price) }}</div>
    <div v-if="trash" class="trash" @click="deleteItem(item)">
      <icon-trash></icon-trash>
    </div>
  </div>
</template>

<script>
import { API } from "@/config/api";

export default {
  name: "ShoppingCardItem",
  props: {
    item: Object,
    trash: Boolean
  },
  methods: {
    getImage(imageToken) {
      return `${API.SteamStatic}/${imageToken}`;
    },
    deleteItem(item) {
      this.$emit("delete-item", item);
    }
  }
};
</script>

<style lang="scss">
.shopping-card-item {
  width: 52px;
  height: 52px;
  background-color: $black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2px;
  cursor: pointer;

  img {
    width: 100%;
    height: 30px;
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
  &:hover {
    img {
      opacity: 30%;
    }

    .trash {
      display: block;
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
</style>
