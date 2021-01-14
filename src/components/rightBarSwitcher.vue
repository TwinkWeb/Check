<template>
  <shopping-card-container v-if="isAuth" />
  <right-side-bar-contacts v-else></right-side-bar-contacts>
</template>

<script>
import RightSideBarContacts from "@/components/rightSideBar/rightSideBarContacts";
import ShoppingCardContainer from "@/containers/ShoppingCardContainer";

export default {
  name: "rightSideBarSwitcher",
  components: { ShoppingCardContainer, RightSideBarContacts },
  props: {
    isAuth: {
      type: Boolean,
      default: false
    }
  }
};
</script>
