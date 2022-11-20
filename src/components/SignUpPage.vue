<template>
  <div class="sign-up-container bg-grey-lighten-4 info-block">
    <v-container class="info-container pa-md-0 mb-5">
      <v-row class="ma-2">
        <v-col cols="2">
          <div
            class="signup-mark mt-5 mb-2 ml-2 text-uppercase font-weight-bold"
          >
            Your test constructor
          </div>
        </v-col>
        <v-col cols="10" class="d-flex align-center"
          ><v-divider class="signup-divider mt-5 mb-2 ml-2"></v-divider>
        </v-col>
      </v-row>
      <v-row class="ma-2">
        <div
          class="signup-header transition-swing text-h2 font-weight-light mb--1 ml-2 mt-2 mb-5"
          color="#212121"
        >
          Create tests online
        </div>
      </v-row>
      <v-row class="ma-2">
        <div
          class="signup-discription text-h5 font-weight-light mb--1 ml-3 mt-2 mb-5"
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
        <div class="signup-block">
          <v-form class="signup-form mt-5" @submit.prevent="submitForm">
            <div v-show="step === 1" class="step">
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="state.formReg.username"
                hide-details
                label="Username"
                @blur="v$.formReg.username.$touch"
                type="text"
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.formReg.username.$error">
                {{ v$.formReg.username.$errors[0].$message }}
              </div>
              <v-text-field
                class="animate__animated animate__fadeInRight"
                v-model="state.formReg.password.password"
                label="Password"
                type="password"
                hide-details="auto"
                @blur="v$.formReg.password.password.$touch"
              >
              </v-text-field>
              <div
                class="v-messages"
                v-if="v$.formReg.password.password.$error"
              >
                {{ v$.formReg.password.password.$errors[0].$message }}
              </div>
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="state.formReg.password.confirm"
                label="Confirm password"
                type="password"
                hide-details="auto"
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.formReg.password.confirm.$error">
                {{ v$.formReg.password.confirm.$errors[0].$message }}
              </div>
              <div class="mt-3 mb-3 d-flex justify-center">
                <v-btn
                  color="#ffd203"
                  class="signup-button mr-4 animate__animated animate__fadeInUp"
                  depressed
                  :disabled="isDisabledNext"
                  @click="nextStep"
                >
                  Next
                </v-btn>
              </div>
            </div>

            <div v-show="step === 2" class="step">
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="state.formReg.email"
                label="E-mail"
                hide-details="auto"
                @blur="v$.formReg.email.$touch"
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.formReg.email.$error">
                {{ v$.formReg.email.$errors[0].$message }}
              </div>
              <v-text-field
                class="animate__animated animate__fadeInRight"
                v-model="state.formReg.country"
                label="Country"
                hide-details="auto"
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.formReg.country.$error">
                {{ v$.formReg.country.$errors[0].$message }}
              </div>
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="state.formReg.city"
                label="City"
                hide-details="auto"
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.formReg.city.$error">
                {{ v$.formReg.city.$errors[0].$message }}
              </div>
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
                <v-col cols="12 pt-0 animate__animated animate__fadeInUp">
                  <v-slider
                    v-model="state.formReg.age"
                    class="align-center px-6"
                    :max="max"
                    :min="min"
                    step="1"
                    hide-details="auto"
                    label="Age"
                    @blur="v$.formReg.age.$touch"
                    :color="color"
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="state.formReg.age"
                        class="mt-0 pt-1"
                        hide-details="auto"
                        single-line
                        label="Age"
                        type="number"
                        style="width: 60px"
                        @blur="v$.formReg.age.$touch"
                      ></v-text-field>
                    </template>
                  </v-slider>
                  <div class="v-messages" v-if="v$.formReg.age.$error">
                    {{ v$.formReg.age.$errors[0].$message }}
                  </div>
                </v-col>
              </v-row>
              <v-radio-group
                class="px-6 animate__animated animate__fadeInUp"
                v-model="state.formReg.sex"
                row
                hide-details="auto"
                color="yellow darken-1"
                @blur="v$.formReg.sex.$touch"
              >
                <v-radio
                  color="yellow darken-1"
                  label="Male"
                  value="male"
                ></v-radio>
                <v-radio
                  color="yellow darken-4"
                  background-color="yellow darken-4"
                  label="Female"
                  value="female"
                ></v-radio>
              </v-radio-group>
              <div class="v-messages" v-if="v$.formReg.sex.$error">
                {{ v$.formReg.sex.$errors[0].$message }}
              </div>
              <div class="mb-3 mt-3 d-flex justify-center">
                <v-btn
                  class="signup-button mr-4 animate__animated animate__fadeInUp"
                  @click="backStep"
                  depressed
                >
                  Back
                </v-btn>
                <v-btn
                  color="#ffd203"
                  class="signup-button mr-4 animate__animated animate__fadeInUp"
                  type="submit"
                  depressed
                  :disabled="isDisabledSubmit"
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
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  alpha,
  minValue,
  helpers
} from "@vuelidate/validators";

const baseURL = "http://localhost:1234";

export default {
  name: "SignUpPage",
  setup() {
    const state = reactive({
      formReg: {
        email: "",
        username: "",
        password: {
          password: "",
          confirm: ""
        },
        country: "",
        city: "",
        age: null,
        sex: null
      }
    });
    const rules = computed(() => {
      return {
        formReg: {
          email: {
            required,
            email
          },
          username: {
            required,
            alpha,
            minLength: minLength(2)
          },
          password: {
            password: {
              required,
              minLength: minLength(6)
            },
            confirm: {
              required,
              sameAs: sameAs(state.formReg.password.password),
              $autoDirty: true
            }
          },
          country: {
            alpha
          },
          city: {
            alpha
          },
          age: {
            required,
            minValueValue: helpers.withMessage(
              "Your age must be over 18 years old",
              minValue(18)
            )
          },
          sex: {
            required
          }
        }
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  data() {
    return {
      step: 1,
      min: 1,
      max: 100,
      interval: null,
      slider: 18
    };
  },
  computed: {
    isDisabledNext() {
      return (
        this.v$.formReg.username.$invalid ||
        this.v$.formReg.password.password.$invalid ||
        this.v$.formReg.password.confirm.$invalid
      );
    },
    isDisabledSubmit() {
      return (
        this.v$.formReg.email.$invalid ||
        this.v$.formReg.age.$invalid ||
        this.v$.formReg.sex.$invalid
      );
    },
    color() {
      if (this.state.formReg.age > 18) return "yellow-darken-1";
      return "red-lighten-1";
    }
  },
  methods: {
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
    postRegData() {
      //some code
    },
    async submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const regData = {
          username: this.state.formReg.username,
          password: this.state.formReg.password.password,
          email: this.state.formReg.email,
          country: this.state.formReg.country,
          city: this.state.formReg.city,
          age: this.state.formReg.age,
          sex: this.state.formReg.sex
        };
        try {
          const response = await fetch(`${baseURL}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value"
            },
            body: JSON.stringify(regData)
          });

          if (!response.ok) {
            console.log(response);
            const message = `An error has occured: ${response.status} - ${response.statusText}`;
            throw new Error(message);
          }

          const data = await response.json();
          const result = {
            status: response.status + "-" + response.statusText,
            headers: {
              "Content-Type": response.headers.get("Content-type"),
              "Content-Length": response.headers.get("Content-Length")
            },
            data: data
          };

          console.log(result);

          await this.$toast.success(
            `Your account succesfull crated! Please login now`
          );
          await this.$router.push("/");
          setTimeout(this.$toast.clear, 3000);
        } catch (err) {
          console.log(err.message);
        }
        console.log(regData);
      } else {
        this.$toast.error(`Form failed validation`);
      }
    }
  }
};
</script>

<style>
.sign-up-container {
  background: url("/src/assets/img/login/login-onlone.jpg") no-repeat center
    center;
  background-size: cover;
  position: relative;
}
.sign-up-container:after {
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
.signup-mark,
.signup-header,
.signup-divider,
.signup-block,
.signup-discription {
  position: relative;
  color: #fff;
  opacity: 0.8;
  z-index: 2;
}
.signup-divider {
  background-color: #fff;
}
.info-description {
  max-width: 500px;
}
.signup-block {
  min-width: 500px;
  min-height: 100%;
  background-color: #000;
}
.signup-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.signup-button {
  max-width: 120px;
  color: #000 !important;
}
.v-field__input {
  font-size: 12px !important;
}
.v-messages {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 16px;
  color: red;
}
.v-slider-track {
  --v-slider-track-size: 2px !important;
}

@media (max-width: 640px) {
  .signup-block {
    min-width: 400px;
  }
}
@media (max-width: 440px) {
  .signup-block {
    min-width: 300px;
  }
}
</style>
