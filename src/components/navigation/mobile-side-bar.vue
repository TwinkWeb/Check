<template>
  <div class="mobile-side-bar">
    <sidebar-menu
      v-if="minWidth"
      :menu="menu"
      :hide-toggle="true"
      :collapsed="collapsed"
    />

    <div
      v-if="minWidth && !this.collapsed"
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
    ></div>
  </div>
</template>

<script>
import { MIN_DEVICE_WIDTH } from "@/utils/constants";

export default {
  name: "mobile-side-bar",
  inject: ["getConfig"],
  computed: {
    minWidth() {
      return this.$resize && !this.$mq.above(MIN_DEVICE_WIDTH);
    },
    menu() {
      return this.getConfig().menuItems.map(item => ({
        ...item,
        title: this.$t(item.title)
      }));
    },
    collapsed() {
      return this.$store.state.commonLayoutModule.collapsed;
    }
  },
  methods: {
    closeSidebarPanel() {
      this.$store.dispatch("commonLayoutModule/toggle");
    }
  }
};
</script>

<style lang="scss">
@import "src/styles/colors";

.mobile-side-bar {
  .v-sidebar-menu {
    background-color: $primary;
    .vsm--link {
      color: $blackText;
    }
    .vsm--scroll-wrapper {
      padding-top: 27px;
    }
  }

  .v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active,
  .v-sidebar-menu .vsm--link_level-1.vsm--link_active {
    box-shadow: 3px 0 0 0 $blackText inset;
  }
}
</style>
