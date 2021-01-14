<template>
  <div class="sell-bot-form">
    <div class="bg"></div>
    <div class="wrap">
      <div class="headline mb">
        {{ $t("sell-bot.form.provide-data") }}
      </div>
      <div class="subTitle">
        {{ $t("sell-bot.form.mail") }}
      </div>
      <div class="row">
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.login") }}
          </div>
          <vue-input></vue-input>
        </div>
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.login") }}
          </div>
          <vue-input></vue-input>
        </div>
      </div>
      <div class="subTitle">
        {{ $t("sell-bot.form.account") }}
      </div>
      <div class="row">
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.password") }}
          </div>
          <vue-input></vue-input>
        </div>
        <div class="col">
          <div class="title">
            {{ $t("sell-bot.form.file") }}
          </div>
          <vue-input placeholder="https:/steam">
            <template v-slot:btn>
              <div class="btn">
                <icon-pin></icon-pin>
                <span>{{ $t("common.select") }}</span>
              </div>
            </template>
          </vue-input>
        </div>
      </div>
      <button
        type="button"
        @click="toggleFullBotInventory"
        class="btn btn2 big formBtn"
      >
        {{ $t("common.done") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      botLink: ""
    };
  }
};
</script>

<style lang="scss">
@import "sell-common";
.sell-bot-form {
  @include sell-common-styles();
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .col {
      width: calc(50% - 15px);
    }
  }
  .subTitle {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    opacity: 0.9;
    margin-top: 18px;
    margin-bottom: 8px;
  }
}
</style>
