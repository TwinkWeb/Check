<template>
  <div class="sidebar-contacts-content">
    <div class="top">
      <span class="right-side-bar-contact-title">Our Contacts</span>
    </div>
    <div class="right-side-bar-contacts">
      <img src="img/our_contacts_discord.png" alt="discord" />
      <img src="img/our_contacts_vk.png" alt="discord" />
      <img src="img/our_contacts_telegram.png" alt="discord" />
      <img src="img/our_contacts_email.png" alt="discord" />
    </div>
  </div>
</template>

<script>
export default {
  name: "rightSideBarContacts"
};
</script>

<style lang="scss">
.sidebar-contacts-content {
  height: 588px;
  width: 100%;
  will-change: auto;

  .right-side-bar-contact-title {
    //font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .right-side-bar-contacts {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      padding: 5px;
      cursor: pointer;
      margin-top: 15px;
    }
  }
}
</style>
