<template>
  <header flat v-scroll="onScroll">
    <v-app-bar
      flat
      v-if="toScroll"
      color="grey-lighten-4"
      density="compact"
      class="no-scroll-header"
    >
      <v-container class="d-flex align-center justify-space-between">
        <template v-slot:prepend>
          <v-app-bar-nav-icon v-show="isMobile"></v-app-bar-nav-icon>
        </template>
        <router-link class="router-link" to="/">
          <div class="logo d-flex align-center">
            <v-img class="info-img" src="../assets/img/logo.png" alt=""></v-img>
            <span class="ml-2">TestMaker</span>
          </div>
        </router-link>
        <div class="enter-block">
          <router-link class="router-link" to="/signup">
            <v-btn elevation="1" rounded text class="sign-up-btn"
              >Sign up</v-btn
            >
          </router-link>
          <router-link class="router-link" to="/login">
            <v-btn elevation="1" rounded text class="log-in-btn">Log in</v-btn>
          </router-link>
        </div>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-container>
    </v-app-bar>
    <!-- if scroll -->
    <v-app-bar v-else flat color="transparent" class="header-no-scroll">
      <v-container class="d-flex align-center justify-space-between">
        <template>
          <v-app-bar-nav-icon v-show="isMobile"></v-app-bar-nav-icon>
        </template>
        <router-link class="router-link" to="/">
          <div class="logo d-flex align-center">
            <v-img class="info-img" src="../assets/img/logo.png" alt=""></v-img>
            <span class="ml-2">TestMaker</span>
          </div>
        </router-link>
        <div class="enter-block">
          <router-link class="router-link" to="/signup">
            <v-btn rounded text class="sign-up-btn">Sign up</v-btn>
          </router-link>
          <router-link class="router-link" to="/login">
            <v-btn rounded text class="log-in-btn">Log in</v-btn>
          </router-link>
        </div>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-container>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => ({
    toScroll: false,
    isMobile: false
  }),
  methods: {
    onScroll() {
      this.toScroll = window.scrollY > 70;
      if (window.scrollY < 70) {
        this.toScroll = false;
      }
    }
  }
};
</script>

<style scoped>
.no-scroll-header .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none;
}
.info-img {
  width: 25px;
}
.sign-up-btn,
.log-in-btn {
  width: 6rem;
}
.log-in-btn {
  border-radius: 0px 20px 20px 0px;
}
.sign-up-btn {
  border-radius: 20px 0px 0px 20px;
}
.router-link {
  text-decoration: none;
  color: rgb(33, 33, 33);
}
</style>
