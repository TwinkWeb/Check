<template>
  <div></div>
</template>

<script>
import { create } from "vue-modal-dialogs";
import contactModal from "@/components/contactsModal";

const contacts = create(contactModal);

export default {
  name: "Contacts",
  methods: {
    openModal() {
      contacts()
        .then(value => {
          // console.log(value);
          return value;
        })
        .catch(() => this.$router.push("/"));
    }
  },
  created() {
    this.openModal();
  }
};
</script>
