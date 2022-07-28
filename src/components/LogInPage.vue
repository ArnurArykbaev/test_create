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
        <div class="login-block">
          <v-form
            class="login-form mt-5"
            ref="form"
            @submit.prevent="submitBtn"
          >
            <div class="input-field">
              <v-text-field
                class="animate__animated animate__fadeInLeft"
                v-model="state.email"
                label="E-mail"
                hide-details="auto"
                @blur="v$.email.$touch"
                requred
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </div>
            </div>
            <div class="input-field">
              <v-text-field
                class="animate__animated animate__fadeInRight"
                v-model="state.password"
                label="Password"
                type="password"
                hide-details="auto"
                @blur="v$.password.$touch"
                requred
              >
              </v-text-field>
              <div class="v-messages" v-if="v$.password.$error">
                {{ v$.password.$errors[0].$message }}
              </div>
            </div>
            <div class="d-flex justify-center">
              <v-btn
                color="#ffd203"
                class="login-button mr-4 animate__animated animate__fadeInUp"
                type="submit"
                depressed
                :disabled="isDisabledSubmit"
              >
                Submit
              </v-btn>
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
import { required, email } from "@vuelidate/validators";

const baseURL = "http://localhost:1234";
export default {
  name: "loginPage",
  setup() {
    const state = reactive({
      email: "",
      password: ""
    });
    const rules = computed(() => {
      return {
        email: {
          required,
          email
        },
        password: {
          required
        }
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  computed: {
    isDisabledSubmit() {
      return this.v$.email.$invalid || this.v$.password.$invalid;
    }
  },
  methods: {
    async submitBtn() {
      this.v$.$validate();
      const postData = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(postData);
      try {
        const res = await fetch(`${baseURL}/login`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
          body: JSON.stringify(postData)
        });
        if (!res.ok) {
          console.log(res);
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length")
          },
          data: data
        };
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    }
  }
};
</script>

<style>
.input-field {
  margin-bottom: 2rem;
}
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
  opacity: 0.7;
  z-index: 1;
}
.login-mark,
.login-header,
.login-divider,
.login-block {
  position: relative;
  color: #fff;
  opacity: 0.95;
  z-index: 2;
}
.login-divider {
  background-color: #fff;
}
.info-description {
  max-width: 500px;
}
.login-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 500px;
  min-height: 300px;
  background-color: #000;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-button {
  color: #000 !important;
  max-width: 120px;
}
.v-messages {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 16px;
  color: red;
}
</style>
