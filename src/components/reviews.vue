<template>
  <div class="reviews-wrap">
    <div class="reviews-weader">
      <div class="container">
        <span class="upper">
          {{ $t("common.reviews") }}
        </span>
      </div>
    </div>
    <div class="reviews-container">
      <div class="review-item" v-for="n in 4" :key="n">
        <div class="logo">
          <div><img src="/icons/userLogo.png" alt="logo" /></div>
          <div>
            <icon-star></icon-star>
            <icon-star></icon-star>
            <icon-star></icon-star>
            <icon-star></icon-star>
            <icon-star></icon-star>
          </div>
        </div>
        <div class="user">
          <span class="name">Nickname</span>
          <span class="type">Lorem ipsum</span>
        </div>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="!(buttonState === 'opened')">
        <div class="atlant"></div>
        <div class="clouds"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      buttonState: "commonLayoutModule/buttonState"
    })
  }
};
</script>
<style lang="scss">
@import "src/styles/variables";
.reviews-wrap {
  margin: 0 auto;
  position: relative;
  max-width: $max-width;
  z-index: 2;
  .clouds {
    pointer-events: none;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    z-index: 0;
    background-image: url("/icons/IconClouds.svg");
    width: 100%;
    height: 138%;
    background-repeat: no-repeat;
    background-position: 63% bottom;
    background-size: contain;
  }
  .atlant {
    pointer-events: none;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    z-index: 1;
    width: 100%;
    height: 148%;
    background-image: url("/icons/IconAtlant.svg");
    background-repeat: no-repeat;
    background-position: 61% bottom;
    background-size: contain;
  }
  .reviews-weader {
    margin-left: -20px;
    position: relative;
    z-index: 0;
    span {
      position: relative;
      font-size: 20px;
      background-color: #28282d;
      padding: 0 20px;
      top: -5px;
      font-weight: bold;
    }
    &::before {
      height: 12px;
      width: 100%;
      position: absolute;
      left: 0;
      content: "";
      background-image: url("/icons/greekBg.png");
    }
  }
  .reviews-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . . .";
    margin-top: 25px;
    position: relative;
    z-index: 2;
    padding-bottom: 75px;
    .review-item {
      border-radius: 30px;
      background-color: #21222b;
      max-width: 300px;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      padding: 12px 20px;
      .logo {
        display: flex;
        align-items: center;
        img {
          margin-right: 20px;
        }
        svg {
          color: $primary;
          margin-right: 5px;
          &:last-child {
            color: #525560;
          }
        }
      }
      .user {
        margin-top: 12px;
        span {
          font-size: 14px;
          font-weight: 500;
          &:last-child {
            opacity: 0.2;
            margin-left: 20px;
          }
        }
      }
      .desc {
        opacity: 0.6;
        font-size: 14px;
        margin-top: 12px;
        font-weight: 400;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
