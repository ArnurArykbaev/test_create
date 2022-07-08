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
      <v-row class="ma-2">
        <div
          class="sigin-discription text-h5 font-weight-light mb--1 ml-3 mt-2 mb-5"
        >
          <p>
            Please try to complete all fields. They will be important when
            processing data for the creator, after testing. The statistical data
            will be sent to the interviewer anonymously, without your name and
            email.
          </p>
        </div>
      </v-row>
      <v-row class="ma-2 justify-center">
        <div class="sigin-block">
          <v-form
            class="sigin-form mt-5"
            ref="entryForm"
            @submit.prevent="registerUser"
            lazy-validation
            v-model="valid"
          >
            <div v-show="step === 1" class="step">
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="name"
                :rules="rulesForm.nameRules"
                label="Name"
                requred
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                class="animate__animated animate__fadeInRight"
                v-model="password"
                label="Password"
                requred
                type="password"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="passwordConfirm"
                label="Confirm password"
                type="password"
                requred
                hide-details="auto"
              >
              </v-text-field>
              <div class="mt-3 mb-3 d-flex justify-center">
                <v-btn
                  color="#ffd203"
                  class="sigin-button mr-4 animate__animated animate__fadeInUp"
                  type="submit"
                  @click="nextStep"
                  depressed
                >
                  Next
                </v-btn>
              </div>
            </div>

            <div v-show="step === 2" class="step">
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="email"
                :rules="rulesForm.emailRules"
                label="E-mail"
                requred
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                class="animate__animated animate__fadeInRight"
                v-model="country"
                label="Country"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="city"
                label="City"
                hide-details="auto"
              >
              </v-text-field>
              <v-row>
                <v-col cols="12 mt-3 pb-0">
                  <div
                    class="d-flex justify-center align-center animate__animated animate__fadeInUp"
                  >
                    <label for="Age">Age</label>
                  </div></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="12 pt-0  animate__animated animate__fadeInUp">
                  <v-slider
                    v-model="slider"
                    class="align-center px-6"
                    :max="max"
                    :min="min"
                    hide-details="auto"
                    label="Age"
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        class="mt-0 pt-1"
                        hide-details="auto"
                        single-line
                        label="Age"
                        step="1"
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
              <v-radio-group
                class="px-6 animate__animated animate__fadeInUp"
                v-model="row"
                row
                hide-details="auto"
              >
                <v-radio label="Male" value="male"></v-radio>
                <v-radio label="Female" value="female"></v-radio>
              </v-radio-group>
              <div class="mb-3 mt-3 d-flex justify-center">
                <v-btn
                  class="sigin-button mr-4 animate__animated animate__fadeInUp"
                  @click="backStep"
                  depressed
                >
                  Back
                </v-btn>
                <v-btn
                  color="#ffd203"
                  class="sigin-button mr-4 animate__animated animate__fadeInUp"
                  type="submit"
                  depressed
                  :disabled="!valid"
                >
                  Submit
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SignPage",
  data() {
    return {
      step: 1,
      min: 18,
      max: 90,
      slider: 18,
      valid: true,
      rulesForm: {
        name: "",
        email: ""
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    nextStep() {
      if (this.step < 2) {
        this.step++;
      }
    },
    backStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    registerUser() {
      console.log("Register complete successfull");
    }
  }
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
  opacity: 0.8;
  z-index: 1;
}
.signin-mark,
.signin-header,
.signin-divider,
.sigin-block,
.sigin-discription {
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
  min-height: 100%;
  background-color: #000;
}
.sigin-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sigin-button {
  max-width: 120px;
  color: #000 !important;
}
.v-field__input {
  font-size: 12px !important;
}
</style>
