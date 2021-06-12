<template>
  <div class="user-account" v-click-outside="close">
    <div class="wrapper toolbar-height" :class="{ open: showHeaderMenu }">
      <div class="user-logo">
        <img class="user-avatar" :src="avatar || defaultImage" :alt="name" />
      </div>
      <div class="user-info">
        <span class="nickname">{{ name }}</span>
        <span class="balance"><span class="currency">$</span> 23.45</span>
      </div>
      <div class="circle-button" @click.stop="showHeaderMenu = !showHeaderMenu">
        <icon-arrow></icon-arrow>
      </div>
    </div>
    <ul class="menu">
      <li>
        <a href="#">Nickname</a>
        <icon-arrow></icon-arrow>
      </li>
      <li>
        <a href="#">Nickname</a>
        <icon-arrow></icon-arrow>
      </li>

      <li>
        <a href="#">Nickname</a>
        <icon-arrow></icon-arrow>
      </li>
      <li>
        <a href="#">Nickname</a>
        <icon-arrow></icon-arrow>
      </li>
      <li class="logout-wrap">
        <div @click="signOut" class="logout">
          <span>Logout <icon-logout></icon-logout></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside
  },
  props: {
    name: String,
    avatar: String
  },
  data() {
    return {
      showHeaderMenu: false,
      defaultImage: "/icons/userLogo.png"
    };
  },
  methods: {
    close() {
      this.showHeaderMenu = false;
    },
    signOut() {
      this.$emit("account-sign-out");
    }
  }
};
</script>

<style lang="scss">
@import "../../../node_modules/include-media/dist/include-media";

.user-account {
  position: relative;
  user-select: none;
  .user-avatar {
    border-radius: 50%;
  }
  .wrapper {
    height: 60px;
    padding: 0 10px;
    border-radius: 30px;
    justify-content: space-between;
    background-color: #141419;
    align-items: center;
    display: flex;
    position: relative;
    z-index: 2;
    transition: 0.3s ease-in-out;
    transition-delay: 0.1s;

    .user-logo {
      img {
        width: 44px;
        height: 44px;
      }
    }

    .user-info {
      padding: 0 8px;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .nickname {
        font-size: 13px;
        font-weight: 600;
        color: #d3d3d3;
        white-space: nowrap;
        margin-bottom: 6px;
      }

      .balance {
        font-size: 12px;
        font-weight: bold;
        margin-top: 2px;

        .currency {
          color: $primary;
        }
      }
    }

    .circle-button {
      background-color: #1d1d21;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid transparent;

      svg {
        color: $primary;
        transition: 0.3s ease-in-out;
      }
    }

    &.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      transition-delay: 0s;

      .circle-button {
        border-color: $primary;

        svg {
          transform: scaleY(-1);
        }
      }

      & + .menu {
        transform: scaleY(1);
        margin: 0;
      }
    }
  }

  .menu {
    position: absolute;
    padding: 0 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
    width: 100%;
    background-color: #141419;
    left: 0;
    transition: 0.3s ease-in-out;
    transform-origin: 0% 0%;
    transform: scaleY(0);
    margin-top: -26px;
    z-index: 1;

    li {
      list-style: none;
      border-top: 1px solid #1d1d21;
      position: relative;

      svg {
        color: #d3d3d3;
        transform: rotate(-90deg);
        position: absolute;
        top: 50%;
        right: 10px;
      }

      a {
        font-size: 13px;
        font-weight: 600;
        padding: 14px 0;
        display: block;
        color: #d3d3d3;
        text-decoration: none;
      }

      &.logout-wrap {
        padding-bottom: 10px;
        border-top: 0;

        .logout {
          cursor: pointer;
          background-color: #1d1d21;
          border-radius: 30px;
          padding: 10px 0;

          span {
            color: $white;
            font-size: 14px;
            font-weight: 600;

            svg {
              position: relative;
              color: $primary;
              top: 2px;
              right: -10px;
              transform: none;
            }
          }
        }
      }
    }
  }
}

@mixin small-screens() {
  .user-account .wrapper {
    background-color: unset;

    .user-info {
      display: none;
    }

    .circle-button {
      background-color: unset;
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
