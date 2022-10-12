<template>
  <div
    class="first-screen-container d-flex justify-center align-center flex-column mx-auto"
    style="gap: 1rem"
  >
    <div
      @click="setActive"
      :class="{ animate__bounce }"
      class="greeting-text animate__animated"
    >
      <div class="c">С</div>
      <div class="r">r</div>
      <div class="e">e</div>
      <div class="a">a</div>
      <div class="t">t</div>
      <div class="e2">e</div>
      <div class="space"></div>
      <div class="y">y</div>
      <div class="o">o</div>
      <div class="u">u</div>
      <div class="r2">r</div>
      <div class="space"></div>
      <div class="t2">t</div>
      <div class="e3">e</div>
      <div class="s">s</div>
      <div class="t3">t</div>
    </div>

    <v-btn
      v-wave="{
        color: 'white',
        initialOpacity: 0.5,
        easing: 'ease-in'
      }"
      dark
      color="#212121"
      class="button button-header justify-center animate__animated animate__fadeInUp"
      to="/login"
      >Start
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FirstScreen",
  data() {
    return {
      animate__bounce: false
    };
  },
  methods: {
    setActive() {
      this.animate__bounce = !this.animate__bounce;
    }
  }
};
</script>

<style scoped>
.first-screen-container {
  height: 113vh;
  width: 100%;
}
.button-header {
  color: white;
}
.greeting-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  font-weight: 700;
}
.space {
  width: 2rem;
}
.first-screen-container {
  margin-top: -10%;
}
@keyframes fall {
  0% {
    transform: translateY(-200px) scaleY(0.9);
    opacity: 0;
  }
  5% {
    opacity: 0.7;
  }
  50% {
    transform: translateY(0px) scaleY(1);
    opacity: 1;
  }
  65% {
    transform: translateY(-17px) scaleY(0.9);
    opacity: 1;
  }
  70% {
    transform: translateY(-22px) scaleY(0.9);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
}
@keyframes fall-rotate {
  0% {
    transform: translateY(-200px) rotate(3deg) scaleY(0.9);
    opacity: 0;
  }
  5% {
    opacity: 0.7;
  }
  25% {
    transform: translateY(0px) rotate(3deg) scaleY(1);
    opacity: 1;
  }
  35% {
    transform: translateY(-17px) rotate(3deg) scaleY(0.9);
    opacity: 1;
  }
  40% {
    transform: translateY(-22px) rotate(3deg) scaleY(0.9);
    opacity: 1;
  }
  55% {
    transform: translateY(0) rotate(3deg) scaleY(1);
    opacity: 1;
  }
  60% {
    transform: rotate(5deg);
  }
  65% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(15deg);
  }
  80% {
    transform: rotate(13deg);
  }
  90% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fall-rotate-minus {
  0% {
    transform: translateY(-200px) rotate(-3deg) scaleY(0.9);
    opacity: 0;
  }
  5% {
    opacity: 0.7;
  }
  25% {
    transform: translateY(0px) rotate(-3deg) scaleY(1);
    opacity: 1;
  }
  35% {
    transform: translateY(-17px) rotate(-3deg) scaleY(0.9);
    opacity: 1;
  }
  40% {
    transform: translateY(-22px) rotate(-3deg) scaleY(0.9);
    opacity: 1;
  }
  55% {
    transform: translateY(0) rotate(-3deg) scaleY(1);
    opacity: 1;
  }
  60% {
    transform: rotate(-5deg);
  }
  65% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(-15deg);
  }
  80% {
    transform: rotate(-13deg);
  }
  90% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.c,
.a,
.e2,
.u {
  animation: fall-rotate 0.8s linear forwards;
}
.r,
.t,
.y,
.r2 {
  animation: fall 0.4s linear forwards;
}
.e,
.o {
  animation: fall-rotate-minus 0.8s linear forwards;
}
.t2 {
  animation: fall-rotate-minus 0.8s linear forwards 0.2s;
}
.e3 {
  animation: fall-rotate-minus 0.8s linear forwards 0.4s;
}
.s {
  animation: fall-rotate-minus 0.8s linear forwards 0.6s;
}
.t3 {
  animation: fall-rotate-minus 0.8s linear forwards 0.8s;
}
</style>
