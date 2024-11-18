<template>
  <header>
    <div>
      <template v-if="store.isLoggedIn">
        <button @click="Logout">로그아웃</button>
      </template>
      <template v-else>
        <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink>
        |
        <RouterLink :to="{ name: 'LoginView' }">로그인</RouterLink>
      </template>
    </div>
    <RouterView />
  </header>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import { useBankStore } from "@/stores/bank";

const store = useBankStore();

const Logout = function () {
  store.Logout();
};
</script>

<style scoped></style>
