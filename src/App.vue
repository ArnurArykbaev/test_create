<template>
  <v-app>
    <v-main class="main">
      <Header />
      <FirstScreen class="first-screen" />
      <InfoSection />
      <Footer class="footer" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import FirstScreen from "@/components/FirstScreen.vue";
import InfoSection from "@/components/InfoSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    FirstScreen,
    InfoSection,
    Footer
  },
  data: () => ({
    toScroll: false
  })
};
</script>

<style>
body {
  height: 100%;
}
.main {
  background-color: #ffd203;
}
.v-main__wrap {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.first-screen {
  flex: 1 1 auto;
}
.footer {
  flex: 0;
}
</style>
