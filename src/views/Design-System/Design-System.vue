<template>
  <div class="root-container">
    <div class="row">
      <div class="col">
        <checkbox v-model="check"></checkbox>
      </div>
      <div class="col">
        <div class="smallBtn">
          <icon-google></icon-google>
        </div>
      </div>
      <div class="col">
        <div class="smallBtn">
          <icon-telegram></icon-telegram>
        </div>
      </div>
      <div class="col">
        <div class="smallBtn">
          <icon-vk></icon-vk>
        </div>
      </div>
      <div class="col">
        <div class="smallBtn">
          <icon-discord></icon-discord>
        </div>
      </div>
      <div class="col">
        <div class="btn mw">Вывести</div>
      </div>
      <div class="col">
        <div class="btn black bold">DOTA 2</div>
      </div>
      <div class="col">
        <div class="btn gray mw">Отмена</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <vue-input
          placeholder="https:/steamcommunity"
          v-model="input1"
        ></vue-input>
      </div>
      <div class="col">
        <vue-input placeholder="https:/steamcommunity" v-model="input2">
          <template v-slot:btn>
            <div class="btn">OK</div>
          </template>
        </vue-input>
      </div>
      <div class="col">
        <div class="btn" @click="$refs.smallModal.show()">Show Small modal</div>
      </div>
      <div class="col">
        <div class="btn" @click="$refs.bigModal.show()">Show Big modal</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button-switcher></button-switcher>
      </div>
    </div>
    <div class="row">
      <wheel></wheel>
    </div>
    <modal ref="smallModal">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
      <div class="btn bold mw big">OK</div>
    </modal>
    <modal ref="bigModal" :small="false">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
      <div class="btn bold mw big">OK</div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
      input1: "",
      input2: ""
    };
  }
};
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .col {
    margin: 0 10px;
  }
}
</style>
