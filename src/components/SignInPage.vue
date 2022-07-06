<template>
  <div class="sign-in-container bg-grey-lighten-4 info-block">
    <v-container class="info-container pa-md-0 mb-5">
      <v-row class="ma-2">
        <v-col cols="2">
          <div
            class="signin-mark mt-5 mb-2 ml-2 text-uppercase font-weight-bold"
          >
            Your test constructor
          </div>
        </v-col>
        <v-col cols="10" class="d-flex align-center"
          ><v-divider class="signin-divider mt-5 mb-2 ml-2"></v-divider>
        </v-col>
      </v-row>
      <v-row class="ma-2">
        <div
          class="signin-header transition-swing text-h2 font-weight-light mb--1 ml-2 mt-2 mb-5"
          color="#212121"
        >
          Crate tests online
        </div>
      </v-row>
      <v-row>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, et
            dignissimos. Maxime libero autem similique deserunt ad repellendus
            ipsa architecto! Quas eveniet quia id eaque, autem maxime sit vel
            eum.
          </p>
        </div>
      </v-row>
      <v-row class="ma-2 justify-center">
        <div class="sigin-block">
          <v-form class="sigin-form mt-5" ref="form"> </v-form>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SignPage"
};
</script>

<style>
.sign-in-container {
  background: url("/src/assets/img/login/login-onlone.jpg") no-repeat center
    center;
  background-size: cover;
  position: relative;
}
.sign-in-container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  opacity: 0.5;
  z-index: 1;
}
.signin-mark,
.signin-header,
.signin-divider,
.sigin-block {
  position: relative;
  color: #fff;
  opacity: 0.8;
  z-index: 2;
}
.signin-divider {
  background-color: #fff;
}
.info-description {
  max-width: 500px;
}
.sigin-block {
  min-width: 500px;
  min-height: 300px;
  background-color: #000;
}
.sigin-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sigin-button {
  max-width: 120px;
}
</style>
