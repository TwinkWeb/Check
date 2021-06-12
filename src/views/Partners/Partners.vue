<template>
  <div class="partnersContainer">
    <div class="partners-title">
      {{ $t("partners.title") }}
    </div>
    <div class="partners-description">
      <span class="partners-description-text">
        <span class="partners-description-color-text">{{
          $t("partners.nameProject")
        }}</span>
        {{ $t("partners.mainText") }}
      </span>
    </div>
    <div class="partners-content">
      <div class="bonus-progress">
        <progress-bar
          :price-value="priceValue"
          :img-values="img"
          :value="value"
          :present-value="presentValue"
        ></progress-bar>
      </div>
    </div>
    <div class="example-works">
      <div class="example-title">
        <span>{{ $t("partners.workExample") }}</span>
      </div>
      <div class="example-works">
        <div class="example-item">
          <icon-you-tube></icon-you-tube>
        </div>
        <div class="example-item">
          <icon-you-tube></icon-you-tube>
        </div>
        <div class="example-item">
          <icon-you-tube></icon-you-tube>
        </div>
        <div class="example-item">
          <icon-you-tube></icon-you-tube>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/modules/ProgressBar";
import { PARTNERS_CONFIG } from "@/config/progressBar.config";

export default {
  name: "Partners",
  components: { ProgressBar },
  data() {
    return {
      value: 0,
      priceValue: PARTNERS_CONFIG.priceValue,
      presentValue: PARTNERS_CONFIG.presentValue,
      img: PARTNERS_CONFIG.img
    };
  }
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";

.partnersContainer {
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;

  .partners-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  .partners-description {
    background-image: url("/img/bonusBG1.png");
    min-height: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 65px;
    box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);

    span {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      text-transform: lowercase;
      max-width: 900px;
    }

    .partners-description-color-text {
      color: #f8c300;
    }
  }

  .partners-content {
    background-image: url("/img/bonusBg1.png");
    border-radius: 25px;
    margin-bottom: 75px;
    box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);

    .bonus-progress {
      margin: 90px 0 20px 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .example-works {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .example-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
    }

    .example-works {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .example-item {
        width: 270px;
        height: 140px;
        border: 1px solid #f8c300;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #21222b;
        cursor: pointer;
      }
    }
  }
}
</style>
