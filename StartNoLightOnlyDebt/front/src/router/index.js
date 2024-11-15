import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "SignUpView",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
  ],
});

export default router;
