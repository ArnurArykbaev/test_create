import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { loadFonts } from "./plugins/webfontloader";
import "animate.css";
import Toaster from "@meforma/vue-toaster";
import VWave from "v-wave";

loadFonts();

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .use(VWave)
  .use(Toaster, {
    position: "top"
  })
  .mount("#app");
