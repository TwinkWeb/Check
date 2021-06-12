<template>
  <div :class="['shopping-card-footer ' + buttonState]">
    <div class="shopping-card-footer-controls">
      <div class="approval">
        <checkbox v-model="value">
          <span>
            {{ $t("common.accept-terms") }}
          </span>
          <a href="#">
            {{ $t("common.agreement") }}
          </a>
        </checkbox>
      </div>

      <div class="sell-controls">
        <div class="price">
          <span>
            <small>
              {{ $t("common.total") }}
            </small>
          </span>
          <br />
          <span>
            <strong>
              {{ $currency(total) }}
            </strong>
          </span>
        </div>
        <div
          :class="[!loadedState ? 'btn mw disabled' : 'btn mw']"
          @click="submit"
        >
          {{ $t("common.sell") }}
        </div>
      </div>
    </div>

    <div class="botBg"></div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCardFooter",
  props: {
    loadedState: {
      type: Boolean
    },
    value: {
      default: false,
      type: Boolean
    },
    total: Number,
    agreeTerms: Boolean,
    buttonState: {
      type: String
    }
  },
  methods: {
    submit() {
      if (!this.loadedState) return;
      this.$emit("shopping-card-submit");
    }
  }
};
</script>

<style lang="scss">
.shopping-card-footer {
  width: 100%;

  .shopping-card-footer-controls {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }

  .sell-controls {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    small {
      font-weight: 500;
      font-size: 11px;
      color: #afafaf;
      margin-bottom: 2px;
    }

    strong {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-left: 0;
    }
  }

  .approval {
    display: flex;
    margin: 19px 0 31px 0;
  }

  .botBg {
    width: 100%;
    background-color: $black;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 80px;
    z-index: 0;
    border-radius: 0 0 20px 20px;
    transition: 0.3s ease-in-out;
    opacity: 0;
  }

  &.opened {
    .shopping-card-footer-controls {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      animation-duration: 750ms;
      animation-name: delayFlexDirection;
    }

    .price {
      margin-right: 24px;
      margin-bottom: 0;
    }

    .sell-controls {
      justify-content: initial;
      width: auto;
    }

    .approval {
      animation-duration: 500ms;
      animation-name: approvalMargin;
      margin: 0 60px 0 0;
    }

    .botBg {
      opacity: 1;
    }
  }

  .disabled {
    background-color: #22232b !important;
    color: whitesmoke !important;
    border: 0.5px solid whitesmoke;
    cursor: default;
  }
  .disabled:hover {
    box-shadow: none !important;
  }

  @keyframes approvalMargin {
    from {
      margin: 19px 0 31px 0;
    }

    to {
      margin: 0 60px 0 0;
    }
  }

  @keyframes delayFlexDirection {
    from {
      flex-direction: column;
    }

    to {
      flex-direction: row;
    }
  }
}
</style>
