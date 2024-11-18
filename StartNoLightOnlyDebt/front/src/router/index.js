import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";
import JeonseView from "@/components/JeonseView.vue";
import CreditLoanView from "@/components/CreditLoanView.vue";
import MortgageView from "@/components/MortgageView.vue";

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
    {
      path: "/",
      name: "MainView",
      component: MainView,
    },
    {
      path: "/jeonse",
      name: "JeonseView",
      component: JeonseView,
    },
    {
      path: "/credit-loan",
      name: "CreditLoanView",
      component: CreditLoanView,
    },
    {
      path: "/",
      name: "MortgageView",
      component: MortgageView,
    },
  ],
});

export default router;
