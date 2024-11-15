<template>
  <header>
    <div>
      <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink>
      |
      <RouterLink :to="{ name: 'LoginView' }">로그인</RouterLink>
    </div>
    <RouterView />
  </header>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped></style>
