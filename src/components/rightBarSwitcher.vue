<template>
  <shopping-card-component v-if="isAuth" />
  <right-side-bar-contacts v-else></right-side-bar-contacts>
</template>

<script>
import RightSideBarContacts from "@/components/rightSideBar/rightSideBarContacts";
import ShoppingCardComponent from "@/components/shopping-card/ShoppingCardComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "rightSideBarSwitcher",
  components: { ShoppingCardComponent, RightSideBarContacts },
  props: {
    isAuth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      toggleFullBotInventory: "commonLayoutModule/toggleFullBotInventory"
    }),
    submit() {}
  },
  computed: {
    ...mapGetters({
      fullBotInventoryOpened: "commonLayoutModule/fullBotInventoryOpened"
    })
  }
};
</script>
