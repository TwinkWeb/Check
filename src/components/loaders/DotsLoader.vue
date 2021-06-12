<template>
  <div class="dotsLoader">
    <span class="first_dot"></span>
    <span class="second_dot"></span>
    <span class="third_dot"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dotsLoader {
  display: flex;
  span {
    margin-right: 2px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: white;
    animation-name: bounce;
    -o-animation-name: bounce;
    -ms-animation-name: bounce;
    -webkit-animation-name: bounce;
    -moz-animation-name: bounce;
    animation-duration: 1.5s;
    -o-animation-duration: 1.5s;
    -ms-animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;
    -moz-animation-duration: 1.5s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
  }
  .first_dot {
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }
  .second_dot {
    animation-delay: 0.75s;
    -o-animation-delay: 0.75s;
    -ms-animation-delay: 0.75s;
    -webkit-animation-delay: 0.75s;
    -moz-animation-delay: 0.75s;
  }
  .third_dot {
    animation-delay: 0.9;
    -o-animation-delay: 0.9s;
    -ms-animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
  }
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}

@-o-keyframes bounce {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}

@-ms-keyframes bounce {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}

@-webkit-keyframes bounce {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}

@-moz-keyframes bounce {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}
</style>
