<template>
  <wheel
    :menuItems="menuItems"
    :isDisabled="disable"
    @changeMenu="changeMenu"
  ></wheel>
</template>

<script>
import Wheel from "@/components/wheel";

const first = [
  {
    id: 1,
    img: "/img/wheel/menuItems/wheel_pistols.png",
    value: "pistols"
  },
  {
    id: 2,
    img: "/img/wheel/menuItems/wheel_rifles.png",
    value: "rifles"
  },
  {
    id: 3,
    img: "/img/wheel/menuItems/wheel_awp.png",
    value: "awp"
  },
  {
    id: 4,
    img: "/img/wheel/menuItems/wheel_keys.png",
    value: "keys"
  },
  {
    id: 5,
    img: "/img/wheel/menuItems/wheel_knife.png",
    value: "knife"
  },
  {
    id: 6,
    img: "/img/wheel/menuItems/wheel_rukavichki.png",
    value: "gloves"
  },
  {
    id: 7,
    img: "wheel",
    value: "secondMenu"
  },
  {
    id: 8,
    img: "/img/wheel/menuItems/wheel_all.png",
    value: "all"
  }
];
const second = [
  {
    id: 1,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_stickers.png",
    value: "stickers"
  },
  {
    id: 2,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_player.png",
    value: "players"
  },
  {
    id: 3,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_music_box.png",
    value: "musicBox"
  },
  {
    id: 4,
    img: "/img/wheel/menuItems/secondMenu/wheel_second-metalick_stickers.png",
    value: "metalickStickers"
  },
  {
    id: 5,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_minigans.png",
    value: "machineGun"
  },
  {
    id: 6,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_drob.png",
    value: "shotGun"
  },
  {
    id: 7,
    img: "wheel",
    value: "firstMenu"
  },
  {
    id: 8,
    img: "/img/wheel/menuItems/secondMenu/wheel_second_uzi.png",
    value: "uzi"
  }
];
export default {
  components: { Wheel },

  name: "WheelContainer",
  props: {
    disable: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      isFirstMenu: true
    };
  },
  computed: {
    menuItems() {
      return this.isFirstMenu ? (this.disable ? [] : first) : second;
    }
  },
  methods: {
    changeMenu(value) {
      this.isFirstMenu = value === "firstMenu";
    }
  }
};
</script>

<style scoped></style>
