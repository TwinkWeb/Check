<template>
  <div class="message-box dialog-mask">
    <div class="contacts-modal-container">
      <div class="contacts-modal-header">
        <div class="ornament">
          <!--          <Icon-ornamen-horizontal></Icon-ornamen-horizontal>-->
        </div>
        <div @click="close" class="contacts-modal-close">
          <icon-close-contact-modal></icon-close-contact-modal>
        </div>
      </div>
      <div class="contacts-modal-title">
        <span>Контакты</span>
      </div>
      <div class="contacts-modal-content">
        <div class="contacts-block">
          <img src="img/our_contacts_discord.png" alt="discord" />
        </div>
        <div class="contacts-block">
          <img src="img/our_contacts_vk.png" alt="discord" />
        </div>

        <div class="contacts-block">
          <img src="img/our_contacts_telegram.png" alt="discord" />
        </div>

        <div class="contacts-block">
          <img src="img/our_contacts_email.png" alt="discord" />
        </div>
      </div>
      <div class="contacts-modal-footer">
        <div class="col">
          <div class="btn mw">Live support</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactsModal",
  methods: {
    close() {
      this.$error({
        message: "closed"
      });
    }
  }
};
</script>

<style lang="scss">
@import "node_modules/include-media/dist/include-media";
.contacts-modal-container {
  width: 570px;
  display: grid;
  overflow: hidden;
  background-color: #21222b;
  border-radius: 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 35px;
    left: 0;
    background-image: url("/icons/IconOrnamenHorizontal.svg");
    width: 83%;
    height: 20px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 20px;
    background-image: url("/icons/IconOrnamenHorizontal.svg");
    width: 100%;
    height: 20px;
  }

  .contacts-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    margin-bottom: 50px;

    .contacts-modal-close {
      cursor: pointer;
      width: 32px;
      height: 32px;
      background-color: #f8c300;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        box-shadow: -1px 1px 24px 0px rgba(254, 208, 37, 0.41);
      }
    }
  }

  .contacts-modal-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 66px;
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
  }

  .contacts-modal-content {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    .contacts-block {
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        box-shadow: -1px 1px 24px 0px rgba(254, 208, 37, 0.41);
      }
      img {
        width: 180px;
        cursor: pointer;
      }
    }
  }

  .contacts-modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    .btn {
      margin-right: 20px;
    }
  }
}

@include media("<=tablet") {
  .contacts-modal-container {
    width: 100vw;
    height: 100vh;
    .contacts-modal-title {
      margin-bottom: 30px;
    }
    .contacts-modal-content {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      align-items: center;
      justify-content: center;
      margin-bottom: 60px;
      .contacts-block {
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 240px;
        }
      }
    }
  }
}

@include media("<=phone") {
  .contacts-modal-container {
    width: 100vw;
    height: 100vh;

    &:before {
      width: 70%;
    }

    .contacts-modal-title {
      margin-bottom: 10px;
    }

    .contacts-modal-content {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      align-items: center;
      justify-content: center;
      margin-bottom: 60px;

      .contacts-block {
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 170px;
        }
      }
    }
  }
}
</style>
