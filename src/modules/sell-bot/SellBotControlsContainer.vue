<template>
  <transaction-logger-component
    @setLoggerInfo="setLogger($event)"
    :loggerActivated="loggerActivated"
    :loader="loader"
    :loggerValidationRules="loggerValidationRules"
    :loggerValidationState="loggerValidationState"
  />
</template>

<script>
import TransactionLoggerComponent from "@/modules/sell-bot/TransactionLoggerComponent";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SellBotControlsContainer",
  components: { TransactionLoggerComponent },
  data() {
    return {
      connection: null
    };
  },
  created() {
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onopen = function(event) {
      console.log("Success", event);
    };

    this.connection.onmessage = function(event) {
      this.setLoggerInfo(event);
    };
  },

  methods: {
    ...mapActions({
      setLoggerInfo: "sellBot/changeLoggerState"
    }),
    setLogger(key) {
      this.setLoggerInfo(key);
    }
  },
  computed: {
    ...mapGetters({
      loggerValidationState: "sellBot/loggerValidationState",
      loggerValidationRules: "sellBot/loggerValidationRules",
      loader: "sellBot/loader",
      loggerActivated: "sellBot/loggerActivated"
    })
  }
};
</script>
