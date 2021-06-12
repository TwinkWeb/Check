<template>
  <sidebar-multi-component
    :items="items"
    @delete-multi-item="deleteMulti($event)"
  />
</template>
<script>
import SidebarMultiComponent from "../components/SidebarMultiComponent";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SidebarMultiComponent
  },
  computed: mapState({
    items: state => state.profileState.multi.items
  }),
  methods: {
    ...mapActions({
      deleteMulti: "profileState/deleteMulti"
    })
  }
};
</script>
