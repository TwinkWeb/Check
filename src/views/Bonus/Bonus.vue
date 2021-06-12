<template>
  <div class="root-container">
    <div class="bonus-wrapper">
      <div class="bonus-content">
        <div class="bonus-title">
          <p>
            {{ $t("bonus.welcome_part1") }}
            <mark>{{ $t("bonus.welcome_part2") }}</mark>
            <br />
            {{ $t("bonus.welcome_part3") }}
          </p>
        </div>
        <div class="bonusProgress">
          <progress-bar
            :value="value"
            :present-value="presentValue"
            :price-value="priceValue"
            :img-values="img"
          ></progress-bar>
        </div>
      </div>
      <div class="bonus-actions">
        <div class="bonus-actions-text">
          <span>
            {{ $t("bonus.adv1") }}
          </span>
        </div>
        <div class="bonus-actions-button">
          <div class="btn sell">
            {{ $t("common.withdraw") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/modules/ProgressBar";
import { BONUS_CONFIG } from "@/config/progressBar.config";

export default {
  name: "Bonus",
  components: { ProgressBar },
  data() {
    return {
      value: 0,
      priceValue: BONUS_CONFIG.priceValue,
      presentValue: BONUS_CONFIG.presentValue,
      img: BONUS_CONFIG.img
    };
  }
};
</script>

<style lang="scss">
.root-container {
  max-width: 1300px;
  .bonus-wrapper {
    background-image: url("/img/bonusBg1.png");
    background-size: cover;
    border-radius: 40px 40px 40px 40px;
    width: 100%;
    height: auto;
    box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 21px 48px 5px rgba(0, 0, 0, 0.3);

    .bonus-content {
      .bonus-title {
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        line-height: 144.9%;
        padding-top: 60px;
        margin-bottom: 43px;

        p {
          margin: 0;
          padding: 0;
        }

        mark {
          color: #f8c300;
          background: none;
        }
      }

      .bonusGods {
        padding: 0 37px 0 37px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        img {
          width: 200px;
          height: 130px;
        }

        .selected {
          filter: drop-shadow(0px 0px 40px #f5c100);
        }
      }

      .bonusProgress {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .bonus-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url("/img/bonusBg2.png");
      width: 100%;
      border-radius: 0 0 40px 40px;

      .bonus-actions-text {
        padding-top: 24px;
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #73777d;
        margin-bottom: 16px;
      }

      .bonus-actions-button {
        width: 270px;
        height: 50px;
        margin-bottom: 20px;

        .sell {
          height: 100%;
          width: 100%;
          font-weight: 600;
          font-size: 16px;
          color: #2b2d38;
        }
      }
    }
  }
}
</style>
