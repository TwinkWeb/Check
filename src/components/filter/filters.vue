<template>
  <dialog-layout class="filter-dialog">
    <template v-slot:header>
      <div>{{ $t("sell-bot.filter.basket") }}</div>
      <icon-close @click="close"></icon-close>
    </template>

    <template v-slot:content>
      <div v-for="(filter, i) in filters" :key="i" class="category-item">
        <span class="category-title">{{ $t(filter.i18nKey) }}</span>
        <checkbox
          v-for="(f, i) in filter.category"
          v-model="f.checked"
          :key="i"
        >
          <span>{{ $t(f.i18nKey) }}</span>
        </checkbox>

        <div class="price-slider" v-if="i === lastElementIndex">
          <span class="categoryName">
            {{ $t("common.price") }}
          </span>

          <el-slider v-model="value" range :min="1000" :max="10000"></el-slider>

          <div class="price-ranges">
            <div>{{ value[0] }} <span>руб.</span></div>
            <div>{{ value[1] }} <span>руб.</span></div>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="btn mw gray" @click="close">
        {{ $t("common.cancel") }}
      </div>
      <div class="btn mw" @click="apply">
        {{ $t("common.apply") }}
      </div>
    </template>
  </dialog-layout>
</template>

<script>
import { filterCategories as filters } from "./config";

export default {
  name: "Filters",
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: [this.from, this.to],
      filters
    };
  },
  methods: {
    close() {
      this.$error({
        message: "closed"
      });
    },
    apply() {
      this.$close({
        priceRange: { range: this.value },
        filters: this.filters
      });
    }
  },
  computed: {
    lastElementIndex() {
      return this.filters.length - 1;
    }
  }
};
</script>
<style lang="scss">
@import "node_modules/include-media/dist/include-media";

.filter-dialog {
  .category-title {
    margin-bottom: 15px;
    display: inline-block;
    font-weight: bold;
    font-size: 12px;
  }

  .checkbox-wrap {
    margin-bottom: 10px;
    font-size: 11px;
  }

  .price-slider {
    width: 180px;
    justify-content: space-between;
    margin-top: 60px;

    .el-slider__runway {
      background-color: $black;

      .el-slider__bar {
        background-color: $primary;
      }

      .el-slider__button {
        border-color: $primary;
        background-color: $primary;
        background-image: url("/icons/IconGreekBorderRound.svg");
      }
    }

    .price-ranges {
      display: flex;
      justify-content: space-between;

      div {
        padding: 7px;
        background-color: $black;
        color: $white;
        border: 1px solid #2b2b31;
        border-radius: 5px;
        font-weight: 600;
        width: 80px;
        font-size: 11px;

        span {
          font-size: 10px;
          font-weight: 300;
          margin-left: 5px;
          color: rgba(255, 255, 255, 0.55);
        }
      }
    }
  }
}

@include media("<=tablet") {
  .dialog-container {
    width: 100vw;
    height: 100vh;
    .dialog-content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 8px 0;
      grid-template-areas:
        "col1 col3"
        "col2 col4";
    }
  }
}

@include media("<=phone") {
  .dialog-container {
    width: 100vw;
    height: 100vh;
    .dialog-content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 8px 0;
      grid-template-areas:
        "col1"
        "col2"
        "col3"
        "col4";
    }
  }
}
</style>
