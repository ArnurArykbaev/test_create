<template>
  <div class="bg-grey-lighten-4 info-block">
    <v-container class="info-container pa-md-0 mb-10">
      <v-row class="ma-5">
        <v-col cols="2">
          <div class="mt-10 mb-5 ml-md-5 ml-1 text-uppercase font-weight-light">
            Your test constructor
          </div>
        </v-col>
        <v-col cols="10" class="d-flex align-center"
          ><v-divider class="mt-10 mb-5 ml-5"></v-divider>
        </v-col>
      </v-row>
      <v-row class="ma-5">
        <div
          class="info-header transition-swing text-md-h1 text-h2 mb--1 ml-md-5 ml-1 mt-5 mb-10"
          color="#212121"
        >
          Features that you <br />
          can use in your work
        </div>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="12" sm="6" class="bg-yellow-accent-4">
          <div class="left-block d-flex justify-center flex-column">
            <v-img
              src="../assets/img/test_time_2.jpg"
              class="description-image"
              alt="Tests with Features"
            ></v-img>
            <div class="d-flex flex-column align-center mt-10 mb-5">
              <p :class="`text-${fz}`" class="mb-5 font-weight-regular">
                Tests with Features
              </p>
              <div
                class="info-description text-sm-subtitle-1 text-subtitle-2 text-center"
              >
                You can easily construct your test in your private or public
                area. After registration you can pass the tests. Also you can
                add time limit for test and other features
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="bg-grey-lighten-3">
          <div class="right-block d-flex justify-center flex-column">
            <div class="d-flex flex-column align-center mt-10 mb-5">
              <p :class="`text-${fz}`" class="mb-5 font-weight-regular">
                Mobile Responsive
              </p>
              <div
                class="info-description text-sm-subtitle-1 text-subtitle-2 text-center"
              >
                Website pages are responsive for different mobile devices. You
                don't need to worry about this. Create and publish your work!
              </div>
            </div>
            <v-img
              src="../assets/img/pexels-math-249324.jpg"
              class="description-image"
              alt="Mobile Responsive"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { computed } from "vue";
import { useDisplay } from "vuetify";

export default {
  name: "InfoSection",
  data: () => ({}),
  setup() {
    const { name } = useDisplay();

    const fz = computed(() => {
      if (name.value === "xs") {
        return "h5";
      } else if (name.value === "sm") {
        return "h4";
      } else if (name.value === "md") {
        return "h3";
      } else {
        return "h3";
      }
    });

    return { fz };
  }
};
</script>

<style>
.info-description {
  max-width: 500px;
}

@media (max-width: 780px) {
  .greeting-text[data-v-37480988] {
    font-size: 70px;
  }
  .space {
    width: 1rem;
  }
}
@media (max-width: 570px) {
  .greeting-text[data-v-37480988] {
    font-size: 50px;
  }
  .space[data-v-37480988] {
    width: 1rem;
  }
}
@media (max-width: 440px) {
  .greeting-text[data-v-37480988] {
    font-size: 30px;
  }
  .space[data-v-37480988] {
    width: 0.5rem;
  }
  .description-image {
    display: none;
  }
}
</style>
