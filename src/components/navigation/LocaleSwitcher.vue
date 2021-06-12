<template>
  <dropdown
    @input="setLanguage($event)"
    hide-selected-from-list
    :value="currentLang.id"
    :options="langs"
    :viewValueKey="'name'"
  ></dropdown>
</template>
<script>
import ClickOutside from "vue-click-outside";
import { LOCAL_STORAGE_I18N_KEY } from "@/setup/i18n-setup";
import { languageConfig } from "@/components/navigation/config";

export default {
  name: "LocaleSwitcher",
  directives: {
    ClickOutside
  },
  data() {
    return {
      showHeaderMenu: false
    };
  },
  methods: {
    setLanguage({ locale }) {
      this.$i18n.locale = locale;
      localStorage.setItem(LOCAL_STORAGE_I18N_KEY, locale);
      this.close();
    },
    close() {
      this.showHeaderMenu = false;
    }
  },
  computed: {
    currentLang() {
      return languageConfig.get(this.$i18n.locale);
    },
    langs() {
      return Array.from(languageConfig, ([locale, value]) => ({
        ...value,
        locale
      }));
    }
  }
};
</script>
<style lang="scss">
.language-bage {
  position: relative;
  user-select: none;
  margin-left: 10px;
  .wrapper {
    padding: 0 10px;
    width: 87px;
    border-radius: 30px;
    justify-content: space-between;
    background-color: #141419;
    align-items: center;
    display: flex;
    position: relative;
    z-index: 2;
    transition: 0.3s ease-in-out;
    transition-delay: 0.1s;
    .langInfo {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      .lang {
        font-size: 13px;
        font-weight: 600;
        margin-right: 5px;
        color: #d3d3d3;
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
      cursor: pointer;
      svg {
        color: #d3d3d3;
        transform: rotate(-90deg);
        position: absolute;
        top: 50%;
        right: 10px;
      }
      span {
        font-size: 13px;
        font-weight: 600;
        padding: 14px 0;
        display: block;
        color: #d3d3d3;
        text-decoration: none;
      }
    }
  }
}
</style>
