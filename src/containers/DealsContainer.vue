<template>
  <deals-component :items="items" :loading="loading" />
</template>
<script>
import DealsComponent from "../components/deals/DealsComponent";
import { mapActions, mapState } from "vuex";
import { WebSocketMock } from "../../mocks/profile";
import { MIN_DEVICE_WIDTH } from "@/utils/constants";

export default {
  name: "DealsContainer",
  components: {
    DealsComponent
  },
  computed: mapState({
    items: state => state.dealsState.deals,
    loading: state => state.dealsState.loading
  }),
  methods: {
    ...mapActions({
      addDealItem: "dealsState/addDealItem",
      changeQueueSize: "dealsState/changeQueueSize"
    }),
    updateQueue() {
      if (!this.$mq.above(MIN_DEVICE_WIDTH)) {
        this.changeQueueSize(5);
      } else {
        this.changeQueueSize(12);
      }
    }
  },
  watch: {
    $resize: function() {
      this.updateQueue();
    }
  },
  created() {
    this.updateQueue();
    console.log("Starting connection to WebSocket Server");

    const onmessage = deal => this.addDealItem(deal);

    // WebSocketMock({
    //   cb: onmessage
    // });
  }
};
</script>
