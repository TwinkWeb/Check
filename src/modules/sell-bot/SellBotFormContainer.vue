<template>
  <div class="sell-bot-forms">
    <wheel-container v-bind:disable="true"></wheel-container>
    <sell-form
      :validationLoggerData="validationLoggerData"
      :maFile="maFile"
      :loader="loader"
      @loaderActive="activateLoader($event)"
      @setLoggerValidateState="setLoggerValidateState($event)"
      @deleteMaFile="deleteFile"
      @toggle-full-bot-inventory="toggleFullBotInventory"
      @sell-bot-load-inventory="loadInventory($event)"
      @setLoggerData="setLoggerData($event)"
      @setValidationMaFile="setMafileValidation($event)"
      @submit="activateLogger($event)"
      class="form"
    />
  </div>
</template>
<script>
import SellForm from "@/modules/sell-bot/SellFormComponent";
import { mapActions, mapGetters } from "vuex";
import WheelContainer from "@/modules/WheelContainer";
export default {
  name: "SellBotFromContainer",
  components: { WheelContainer, SellForm },
  computed: {
    ...mapGetters({
      maFile: "sellBot/mafile",
      validationLoggerData: "sellBot/validationLoggerData",
      loader: "sellBot/loader"
    })
  },
  methods: {
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory",
      transactionLogger: "sellBot/transactionLogger",
      setData: "sellBot/setLoggerData",
      setMaFileValidationState: "sellBot/setMaFileValidationState",
      deleteMfile: "sellBot/deleteMaFile",
      setLoggerInfoValidationState: "sellBot/setLoggerInfoValidationState",
      setLoader: "sellBot/setLoader",
      setLoggerMode: "sellBot/setLoggerMode"
    }),
    activateLoader(event) {
      this.setLoader(event);
    },
    setLoggerValidateState(boolean) {
      this.setLoggerInfoValidationState(boolean);
    },
    deleteFile() {
      this.deleteMfile();
    },
    setLoggerData(dataLogger) {
      console.log(dataLogger);
      this.setData(dataLogger);
    },
    activateLogger() {
      this.setLoggerMode(true);
      this.transactionLogger();
    },
    loadInventory(steamId) {
      console.log(steamId);
    }
  }
};
</script>
<style lang="scss">
.sell-bot-forms {
  .form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 316px;
  }
}
</style>
