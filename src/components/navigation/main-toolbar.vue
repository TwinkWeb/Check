<template>
  <div class="container-fluid bg">
    <div class="main-menu-container">
      <div class="main-toolbar">
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
          <user-account-bage
            :name="name"
            :avatar="avatar"
            @account-sign-out="signOut"
          />
        </div>
        <div v-else class="dropdowns">
          <toggle-button v-bind="buttons" @toggle="toggleButton($event)" />
        </div>

        <I18NL10NMonitorComponent @openi18n="openI18n" />
      </div>
    </div>
    <deals-container />
  </div>
</template>

<script>
import HamburgerButton from "../buttons/hamburger-button";
import userAccountBage from "./UserAccountBage";

import { MIN_DEVICE_WIDTH } from "@/utils/constants";
import DealsContainer from "@/modules/deals-bar/DealsContainer";
import { mapGetters, mapState } from "vuex";
import { create } from "vue-modal-dialogs";
import MultiAuthDialog from "@/components/authentication/multi-auth-dialog";
import I18nL10nDialog from "@/components/navigation/I18nL10nDialog";
import I18NL10NMonitorComponent from "@/components/navigation/I18NL10NMonitorComponent";

const confirm = create(MultiAuthDialog, "dialogMode");
const i18nConfirm = create(I18nL10nDialog, "dialogMode");

export default {
  name: "MainToolbar",
  methods: {
    toggleButton(code) {
      if (code === "MULTI") {
        this.openLoginPopup();
        return;
      }
      if (code === "steam") {
        this.login();
        return;
      }
    },
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
      confirm("multi-auth")
        .then(value => console.log(value))
        .catch(e => console.log(e));
    },
    openI18n() {
      i18nConfirm("i18nConfirm");
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/logged"
    }),
    buttons() {
      return {
        leftButton: {
          code: "MULTI",
          text: "MULTI"
        },
        rightButton: {
          code: "steam",
          text: "STEAM"
        }
      };
    },
    ...mapState({
      name: state => state.profileState.profileInfo.name,
      avatar: state => state.profileState.profileInfo.avatarUrl
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
    HamburgerButton,
    I18NL10NMonitorComponent
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

        &:hover {
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
    display: flex;
    background-color: #141419;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    .loginBtn {
      cursor: pointer;
      width: 69px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px;

      .multi-login-text {
        color: #000000;
        font-size: 11px;
        font-weight: bold;
      }

      .steam-login-text {
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        color: rgba(255, 255, 255, 0.3);
        position: absolute;
      }
    }
    .multi-login {
      background-color: #f8c300;
      border-radius: 30px;
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
