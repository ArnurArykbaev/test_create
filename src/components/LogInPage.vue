<template>
  <div class="log-in-container bg-grey-lighten-4 info-block">
    <v-container class="info-container pa-md-0 mb-5">
      <v-row class="ma-2">
        <v-col cols="2">
          <div
            class="login-mark mt-5 mb-2 ml-2 text-uppercase font-weight-light"
          >
            Your test constructor
          </div>
        </v-col>
        <v-col cols="10" class="d-flex align-center"
          ><v-divider class="login-divider mt-5 mb-2 ml-2"></v-divider>
        </v-col>
      </v-row>
      <v-row class="ma-2">
        <div
          class="login-header transition-swing text-h2 font-weight-light mb--1 ml-2 mt-2 mb-5"
          color="#212121"
        >
          Create tests online
        </div>
      </v-row>
      <v-row class="ma-2 justify-center">
        <div class="sigin-block">
          <v-form class="sigin-form mt-5" ref="form" v-model="valid">
            <v-text-field
              class="animate__animated animate__fadeInLeft"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              requred
            >
            </v-text-field>
            <v-text-field
              class="animate__animated animate__fadeInRight"
              v-model="password"
              label="Password"
              requred
            >
            </v-text-field>
            <v-row class="justify-center">
              <v-btn
                :disabled="!valid"
                color="#ffd203"
                class="sigin-button mr-4 animate__animated animate__fadeInUp"
                @click="validate"
                depressed
              >
                Submit
              </v-btn>
            </v-row>
          </v-form>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "loginPage"
};
</script>

<style>
.log-in-container {
  background: url("/src/assets/img/signin/sigin-notebook.jpg") no-repeat center
    center;
  background-size: cover;
  position: relative;
}
.log-in-container:after {
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
.login-mark,
.login-header,
.login-divider,
.sigin-block {
  position: relative;
  color: #fff;
  opacity: 0.8;
  z-index: 2;
}
.login-divider {
  background-color: #fff;
}
.info-description {
  max-width: 500px;
}
.sigin-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: #000 !important;
  max-width: 120px;
}
</style>
