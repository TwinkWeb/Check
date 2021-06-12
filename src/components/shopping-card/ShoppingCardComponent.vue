<template>
  <div class="shopping-card">
    <div :class="['shopping-card-content ' + buttonState]">
      <shopping-card-header
        :opened="opened"
        :buttonState="buttonState"
        :filter="filter"
        @select-game="selectGame"
        @toggle-full-bot-inventory="toggleFullInventory"
      />
      <div
        class="items"
        :class="{ 'overflow-hidden': loading }"
        id="infinite-list"
      >
        <div v-for="item in newArr" :key="item.assetId">
          <shopping-card-item
            class="element "
            :class="[
              { boxShadow: item.classes.boxShadowClass },
              { displayNone: item.classes.display }
            ]"
            :item="item"
          />
          {{ item.boxShadow }}
        </div>
      </div>
      <shopping-card-footer
        :total="total"
        :loadedState="loadedState"
        @shopping-card-submit="startLoggerProcess"
        v-model="agree"
        :opened="opened"
        :buttonState="buttonState"
      />
    </div>
  </div>
</template>

<script>
import ShoppingCardItem from "./ShoppingCardItem.vue";
import ShoppingCardHeader from "./ShoppingCardHeader.vue";
import ShoppingCardFooter from "./ShoppingCardFooter.vue";

import _ from "lodash";

const configButton = ["neutral", "opened", "closed"];

export default {
  data() {
    return {
      counter: 900,
      showCounter: false,
      newArr: []
    };
  },
  props: {
    loggerValidationState: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    loadedState: {
      type: Boolean
    },
    buttonState: {
      type: String
    },
    opened: Boolean,
    agreeTerms: Boolean,
    filter: {
      type: Object,
      default() {
        return {};
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    items: {
      handler() {
        this.newArr = _.cloneDeep(this.items).map(item => ({
          ...item,
          classes: {
            boxShadowClass: false,
            display: false
          }
        }));
        console.log(this.newArr);
      },
      immediate: true
    }
  },
  methods: {
    startCountDown() {
      this.showCounter = true;
      let t = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          clearInterval(t);
          this.showCounter = false;
        }
      }, 1000);
    },
    startLoggerProcess() {
      this.$router.push("/bots/sell");
    },
    async startDealing() {
      let elements = document.getElementsByClassName("element");
      let drop_content = document.querySelectorAll(".drop-content")[0];

      let counter = 0;
      let countForDisplay = 0;

      setTimeout(() => {
        const interval = setInterval(() => {
          let sumLeft =
            elements[counter].getBoundingClientRect().left -
            drop_content.getBoundingClientRect().left;

          let sumTop =
            elements[counter].getBoundingClientRect().top -
            drop_content.getBoundingClientRect().top;

          elements[counter].style.left = -sumLeft + "px";
          elements[counter].style.top = -sumTop + "px";

          setTimeout(() => {
            this.newArr[countForDisplay].classes.display = true;
            countForDisplay++;
          }, 500);
          counter++;

          if (counter === elements.length) {
            clearInterval(interval);
            this.$emit("clearInventory");
          }
        }, 200);
      }, 600);
    },

    toggleFullInventory() {
      this.buttonState === "opened"
        ? this.$emit("toggle-full-bot-inventory", configButton[2])
        : this.$emit("toggle-full-bot-inventory", configButton[1]);
    },

    deleteItem(item) {
      this.$emit("delete-item", item);
    },
    setFilter(filterChunk) {
      this.$emit("set-filter", filterChunk);
    },
    submit() {
      if (this.agree && this.total > 0) {
        this.$emit("shopping-card-submit");
      }
    },
    selectGame(game) {
      this.$emit("select-game", game);
    }
  },
  computed: {
    total() {
      const sum = this.items.reduce((a, b) => a + parseFloat(b.price), 0);
      return parseFloat(sum.toFixed(2));
    },

    agree: {
      get() {
        return this.agreeTerms;
      },
      set(value) {
        this.$emit("agree-terms", value);
      }
    }
  },
  beforeDestroy() {
    this.$emit("toggle-full-bot-inventory", configButton[0]);
  },

  mounted() {
    if (this.loggerValidationState) {
      this.startDealing();
      this.$emit("resetLogger");
      this.$emit("setLoader", false);
    }
    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", () => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        const last = this.items[this.items.length - 1];
        if (last && !this.loading) {
          this.setFilter({ lastId: last.assetId });
        }
      }
    });
  },
  components: {
    ShoppingCardItem,
    ShoppingCardHeader,
    ShoppingCardFooter
  }
};
</script>

<style lang="scss">
.shopping-card {
  position: absolute;
  width: 100%;
  z-index: 3;

  .shopping-card-content {
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
    padding: 24px;
    transition: 0.3s cubic-bezier(0.99, -0.6, 0, 1.43);

    .items {
      width: calc(100% + 8px);
      height: 100%;
      // overflow: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0 0;
    }

    &.closed {
      animation: close ease-in 0.4s forwards;
    }

    &.opened {
      animation: show ease-in-out 0.7s forwards;

      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-bottom: 34px;
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

.element {
  left: 0;
  top: 0;
  position: relative;
  transition: 0.5s;
}

.boxShadow {
  transform: scale(1.05);
  transition: 0.5s;
  -webkit-box-shadow: 0px 0px 30px 1px rgba(248, 195, 0, 0.72);
  box-shadow: 0px 0px 30px 1px rgba(248, 195, 0, 0.72);
}

.displayNone {
  opacity: 0;
}

.confirmDealing {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 17px;
    font-weight: 600;
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 30px 1px rgba(248, 195, 0, 0.72);
  }

  100% {
    box-shadow: 0 0 80px 20px rgba(248, 195, 0, 0.72);
  }
}

@keyframes show {
  0% {
  }

  50% {
    width: 928px;
  }
  100% {
    width: 878px;
  }
}

@keyframes close {
  0% {
    width: 878px;
  }
  50% {
    width: 928px;
  }

  100% {
    width: 272px;
  }
}
</style>
