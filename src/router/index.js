import { createRouter, createWebHistory } from "vue-router";

import Main from "../components/Main.vue";
import LogInPage from "../components/LogInPage.vue";
import SignUpPage from "../components/SignUpPage.vue";

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
      path: "/signup",
      name: "SignUpPage",
      component: SignUpPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  !from.name && to.name != "Main" ? next({ name: "Main" }) : next();
});

export default router;
