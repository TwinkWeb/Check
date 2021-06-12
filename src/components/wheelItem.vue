<template>
  <div>
    <div v-if="img === 'wheel'" class="threeDots wheel-item">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-else class="wheel-item">
      <img :src="img" alt="" v-if="!(value === 'all')" />
      <p class="all" v-else>ALL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "wheelItem",
  props: {
    img: String,
    value: String
  }
};
</script>

<style lang="scss">
.threeDots {
  span {
    width: 8px;
    height: 8px;
    margin: 0 3px;
    border-radius: 50%;
    display: inline-block;
    background-color: white;
    transition: 0.2s ease-in-out;
  }
}
.threeDots:hover > span {
  transform: scale(1.3);
  margin: 0 6px;
}

.all {
  font-size: 28px;
  fill: white;
  transition: 0.1s ease-in-out;
  font-weight: 500;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
}

svg:hover > text {
  transition: 0.2s ease-in-out;
  font-size: 34px;
}

.wheel-item {
  position: relative;
  width: 202px;
  height: 74px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  filter: drop-shadow(0px 0px 12px rgba(248, 195, 0, 0.6));

  // border: 1px solid red;
  img {
    width: 40%;

    transition: 0.1s ease-in-out;
  }
  &:hover {
    img {
      transition: 0.2s ease-in-out;
      width: 55%;
    }
  }
}
</style>
