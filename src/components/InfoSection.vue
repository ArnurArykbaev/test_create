<template>
  <div class="bg-grey-lighten-4 info-block">
    <v-container class="info-container pa-md-0">
      <v-row class="ma-4">
        <v-col cols="2">
          <div class="mt-10 mb-5 ml-5 text-uppercase font-weight-bold">
            Your test constructor
          </div>
        </v-col>
        <v-col cols="10" class="d-flex align-center"
          ><v-divider class="mt-10 mb-5 ml-5"></v-divider>
        </v-col>
      </v-row>
      <v-row class="ma-4">
        <div
          class="info-header transition-swing text-h1 mb--1 ml-5 mt-5 mb-10"
          color="#212121"
        >
          Features that you <br />
          can use in your work
        </div>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="6" class="bg-yellow-accent-4">
          <div class="left-block d-flex justify-center flex-column">
            <v-img src="../assets/img/test_time_2.jpg" alt=""></v-img>
            <div class="d-flex flex-column align-center">
              <p class="text-h3">Create your test</p>
              <div class="info-description text-subtitle-1 text-center">
                You can easily construct your test in your private or public
                area. After registration you can pass the tests
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="6" class="bg-grey-lighten-2">
          <div class="right-block">
            <p class="">
              You can easily construct your test in your private or public area.
              After registration you can pass the tests
            </p>
            <v-img src="../assets/img/ds.png" alt=""></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
};
</script>

<style>
.info-description {
  max-width: 500px;
}
</style>
