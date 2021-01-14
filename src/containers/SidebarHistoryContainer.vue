<template>
  <sidebar-history-component :items="items" />
</template>
<script>
import SidebarHistoryComponent from "../components/SidebarHistoryComponent";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SidebarHistoryComponent
  },
  computed: mapState({
    items: state => state.profileState.history.items
  })
};
</script>
