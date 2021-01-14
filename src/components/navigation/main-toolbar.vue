<template>
  <div class="container-fluid bg">
    <div class="main-menu-container">
      <div class="main-toolbar">
        <discord-auth style="width: 100px; height: 100px;"></discord-auth>
        <hamburger-button
          v-if="minWidth"
          :active="collapsed"
          @click.native="toggle($event)"
        />
        <router-link to="/" class="logo">
          <icon-main-logo v-if="!minWidth"></icon-main-logo>
          <icon-main-logo-icon-only v-else></icon-main-logo-icon-only>
        </router-link>
        <div class="links">
          <ul>
            <li v-for="item in menuItems" :key="item.href">
              <router-link :to="item.href">{{ $t(item.title) }}</router-link>
            </li>
          </ul>
        </div>
        <div v-if="isAuth" class="dropdowns">
          <user-account-bage @account-sign-out="signOut"></user-account-bage>
          <LocaleSwitcher />
        </div>
        <div v-else class="dropdowns">
          <div class="authButtons">
            <div @click="openLoginPopup()" class="loginBtn multi">
              MULTI
            </div>
            <div @click="login" class="loginBtn steam">
              steam
            </div>
            <div class="knob"></div>
          </div>
        </div>
      </div>
    </div>
    <deals-container />
  </div>
</template>

<script>
import HamburgerButton from "../buttons/hamburger-button";
import userAccountBage from "../userAccountBage";
import LocaleSwitcher from "../locale/LocaleSwitcher";

import { MIN_DEVICE_WIDTH } from "@/utils/constants";
import DealsContainer from "@/containers/DealsContainer";
import { mapGetters } from "vuex";
import { create } from "vue-modal-dialogs";
import DialogLayout from "../dialog/DialogLayout";

const authBox = create(DialogLayout, "DialogMode");

export default {
  name: "MainToolbar",
  methods: {
    login() {
      this.$signIn();
    },
    toggle() {
      this.$store.dispatch("commonLayoutModule/toggle");
    },
    signOut() {
      this.$signOut();
    },
    openLoginPopup() {
      authBox("authConfirm")
        .then(value => console.log(value))
        .catch(e => console.log(e));
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/logged"
    }),
    collapsed() {
      return this.$store.state.commonLayoutModule.collapsed;
    },
    menuItems() {
      return this.getConfig().menuItems;
    },
    minWidth() {
      return this.$resize && !this.$mq.above(MIN_DEVICE_WIDTH);
    }
  },
  inject: ["getConfig"],
  components: {
    DealsContainer,
    userAccountBage,
    LocaleSwitcher,
    HamburgerButton
  }
};
</script>
<style lang="scss">
@import "node_modules/include-media/dist/include-media";
@import "src/styles/elevation";
@import "src/styles/variables";

.bg {
  background-image: url("/img/headerBg.png");
  background-position: center;
  background-size: cover;
}

.main-menu-container {
  max-width: $max-width;
  margin: 0 auto;
}

.main-toolbar {
  padding: 30px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: relative;

  .logo {
    width: 190px;
    margin-top: -10px;
    margin-bottom: -10px;

    svg {
      .str0 {
        stroke: #fcfcfc;
        stroke-width: 33.05;
        stroke-miterlimit: 22.9256;
      }

      .fil4 {
        fill: none;
      }

      .fil3 {
        fill: #fefefe;
      }

      .fil9 {
        fill: #ebecec;
      }

      .fil7 {
        fill: #d9dada;
      }

      .fil8 {
        fill: #9d9e9e;
      }

      .fil10 {
        fill: #5b5b5b;
      }

      .fil11 {
        fill: #fff383;
      }

      .fil5 {
        fill: #fecc00;
      }

      .fil2 {
        fill: #fcfcfc;
      }

      .fil6 {
        fill: #da9f24;
      }

      .fil0 {
        fill: #523630;
      }

      .fil1 {
        fill: #fcfcfc;
        fill-rule: nonzero;
      }
    }
  }

  .links {
    ul li {
      list-style: none;
      padding-right: 25px;
      margin-top: 10px;
      display: inline-block;

      a {
        color: $white;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        text-decoration: none;

        &.router-link-exact-active {
          &:after {
            content: "";
            bottom: -10px;
            width: 100%;
            background: $primary;
            left: 0;
            position: absolute;
            height: 2px;
          }
        }
      }
      p {
        color: $white;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        &.router-link-exact-active {
          &:after {
            content: "";
            bottom: -10px;
            width: 100%;
            background: $primary;
            left: 0;
            position: absolute;
            height: 2px;
          }
        }
      }
    }
  }

  .dropdowns {
    display: flex;
  }

  .authButtons {
    color: black;
    display: flex;
    position: relative;
    width: 148px;
    height: 36px;
    background: #141419;
    border-radius: 30px;
    justify-content: space-around;
    align-items: center;

    .steam {
      color: rgba(255, 255, 255, 0.3);
    }

    .steam:hover {
      color: black;
      transition: 0.3s;
    }

    .steam:hover ~ .knob {
      left: 75px;
    }

    .knob {
      font-weight: bolder;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-transform: uppercase;
      position: absolute;
      width: 69px;
      height: 28px;
      background: #f8c300;
      border-radius: 20px;
      top: 4px;
      left: 3px;
      transition: 0.3s;
    }

    .loginBtn {
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
      position: relative;
      z-index: 3;
      cursor: pointer;

      img {
        height: 45px;
        border-radius: 5px;
        margin-right: 2px;
      }
    }
  }
}

@mixin small-screens() {
  .main-toolbar {
    padding: 0;
    height: 60px;
    @include mat-elevation(4);
    .language-bage {
      display: none;
    }
    .links {
      display: none;
    }
    .user-account {
      .user-logo {
        width: 30px;
      }
    }
    .logo {
      margin: 0;
      width: 10px;
      svg {
        width: 36px;
      }
    }
  }
}

@include media("≤phone") {
  @include small-screens;
}

@include media("≤tablet") {
  @include small-screens;
}
</style>
