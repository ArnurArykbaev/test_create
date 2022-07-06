import { createApp } from "vue";
import router from "./router";
import VWave from "v-wave";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "animate.css";

loadFonts();

createApp(App).use(store).use(vuetify).use(VWave).use(router).mount("#app");
