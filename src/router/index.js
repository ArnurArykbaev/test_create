import { createRouter, createWebHistory } from "vue-router";

import Main from "../components/Main.vue";
import LogInPage from "../components/LogInPage.vue";
import SignInPage from "../components/SignInPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/login",
      name: "LogInPage",
      component: LogInPage
    },
    {
      path: "/signin",
      name: "SignInPage",
      component: SignInPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  !from.name && to.name != "Main" ? next({ name: "Main" }) : next();
});

export default router;
