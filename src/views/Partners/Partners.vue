<template>
  <div class="container">
    <div class="partners-title">
      {{ $t("partners.title") }}
    </div>
    <div class="partners-description">
      <span class="partners-description-text">
        <span class="partners-description-color-text">{{ $t("partners.nameProject")}}</span>
        {{$t("partners.mainText")}}
      </span>
    </div>
    <div class="partners-content">
      <div class="partners-gods">
        <img
          :class="{ selected: 0 === activeItem }"
          src="/icons/IconDionis.svg"
          alt="icon-dionis"
        />
        <img
          :class="{ selected: 1 === activeItem }"
          src="/icons/IconGefest.svg"
          alt="icon-gefest"
        />
        <img
          :class="{ selected: 2 === activeItem }"
          src="/icons/IconGermes.svg"
          alt="icon-germes"
        />
        <img
          :class="{ selected: 3 === activeItem }"
          src="/icons/IconApollon.svg"
          alt="icon-apollon"
        />
        <img
          :class="{ selected: 4 === activeItem }"
          src="/icons/IconAres.svg"
          alt="icon-ares"
        />
        <img
          :class="{ selected: 5 === activeItem }"
          src="/icons/IconAid.svg"
          alt="icon-aid"
        />
        <img
          :class="{ selected: 6 === activeItem }"
          src="/icons/IconPoseidon.svg"
          alt="icon-poseidon"
        />
        <img
          :class="{ selected: 7 === activeItem }"
          src="/icons/IconZeus.svg"
          alt="icon-zeus"
        />
      </div>
      <div class="bonus-progress">
        <bonus-progress :activeItem="activeItem"></bonus-progress>
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
import BonusProgress from "@/views/Bonus/components/bonus-progress";

export default {
  name: "Partners",
  components: { BonusProgress },
  data() {
    return {
      activeItem: 1
    };
  }
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";

.container {
  display: flex;
  flex-direction: column;

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
    .partners-gods {
      padding: 0 37px 0 37px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      margin-top: 60px;

      img {
        width: 105px;
        height: 100px;
      }

      .selected {
        filter: drop-shadow(0px 0px 40px #f5c100);
      }
    }

    .bonus-progress {
      width: 1030px;
      margin: 0 auto;
    }
  }

  .example-works {
    display: flex;
    flex-direction: column;

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
