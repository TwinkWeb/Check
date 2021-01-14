<template>
  <div class="sidebarMulti">
    <div class="addEmail">
      <div class="emailInfo">
        <span class="emailCaption">{{ $t("common.mail") }}</span>
        <span class="email">test@mail.com</span>
      </div>
      <div class="btn" @click="showMsg">{{ $t("common.add") }}</div>
    </div>
    <sidebar-multi-item
      v-for="item in items"
      :key="item.id"
      :avatar="item.avatar"
      :tradelink="item.tradelink"
      :amount="item.amount"
      :nickname="item.nickname"
      :id="item.id"
      :active="item.active"
      @delete-multi-item="deleteItem($event)"
    ></sidebar-multi-item>
  </div>
</template>
<script>
import sidebarMultiItem from "../components/sidebarMulti/sidebarMultiItem";
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    sidebarMultiItem
  },
  methods: {
    showMsg() {
      this.$message({
        message: this.$t("common.success"),
        type: "success"
      });
    },
    deleteItem(id) {
      this.$emit("delete-multi-item", id);
    }
  }
};
</script>
<style lang="scss">
.addEmail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  .emailInfo {
    display: flex;
    flex-direction: column;
    .emailCaption {
      color: #afafaf;
      margin-bottom: 5px;
      font-size: 12px;
    }
    .email {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>
