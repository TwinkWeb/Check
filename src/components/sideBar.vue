<template>
  <div class="sideBar">
    <div class="top">
      <div
        class="tab"
        :class="{ active: activeTab === 1 }"
        @click="activeTab = 1"
      >
        <span>{{ $t("sidebar.tabs.profile") }}</span>
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 2 }"
        @click="activeTab = 2"
      >
        <span>{{ $t("sidebar.tabs.history") }}</span>
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 3 }"
        @click="activeTab = 3"
      >
        <span>{{ $t("sidebar.tabs.multi") }}</span>
      </div>
    </div>
    <div class="tabs">
      <sidebar-profile-container v-if="activeTab === 1" />
      <sidebar-history-container v-if="activeTab === 2" />
      <sidebar-multi-container v-if="activeTab === 3" />
    </div>
    <div v-if="loading" class="full-loader">
      <loader-spinner />
    </div>
  </div>
</template>

<script>
import SidebarProfileContainer from "../containers/SidebarProfileContainer";
import SidebarHistoryContainer from "../containers/SidebarHistoryContainer";
import SidebarMultiContainer from "../containers/SidebarMultiContainer";
import { mapState } from "vuex";

export default {
  components: {
    SidebarProfileContainer,
    SidebarHistoryContainer,
    SidebarMultiContainer
  },
  data() {
    return {
      activeTab: 1
    };
  },
  computed: {
    ...mapState({
      loading: state => state.profileState.loading
    })
  }
};
</script>

<style lang="scss">
.sideBar {
  position: relative;
  width: 100%;
  height: 588px;
  margin-top: -10px;
  border-radius: 20px;
  background-image: url("/img/marbleTexture.jpg");
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    background-color: $black;
    .tab {
      height: 100%;
      width: calc(100% / 3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      border-radius: 20px 20px 0 0;
      user-select: none;
      overflow: hidden;
      position: relative;
      span {
        position: relative;
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $black;
        transition: 0.3s ease-in-out;
        z-index: 0;
      }
      &:nth-child(2) {
        background-position: -89px 0px;
      }
      &:nth-child(3) {
        background-position-x: right;
        width: calc(100% / 3 + 5px);
      }
      &.active {
        color: white;
        background-color: transparent;
        background-image: url("/img/marbleTexture.jpg");
        &:before {
          opacity: 0;
        }
      }
      & + .tab {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
          background: rgba(91, 92, 96, 0.1);
          width: 1px;
          height: 26px;
        }
      }
      &:hover {
        color: $white;
      }
    }
  }
  .tabs {
    width: 100%;
    overflow-y: auto;
    height: calc(100% - 40px);
    padding: 12px;
  }
}
</style>
