<template>
  <div class="shopping-card-game-selector">
    <div
      v-for="game in games"
      :key="game"
      class="btn bold"
      :class="{ black: game !== currentGame }"
      @click="select(game)"
    >
      {{ gameMetadata(game).shortName }}
    </div>
  </div>
</template>

<script>
import { GAME_ENUM } from "@/modules/sell-bot/config";
import { gameMetadata } from "../../modules/sell-bot/config";

export default {
  name: "GameSelector",
  props: {
    currentGame: null
  },
  data() {
    return {
      games: Object.values(GAME_ENUM)
    };
  },
  methods: {
    select(game) {
      this.$emit("select-game", game);
    },
    gameMetadata(game) {
      return gameMetadata.get(game) || {};
    }
  }
};
</script>

<style lang="scss">
.shopping-card-game-selector {
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
</style>
