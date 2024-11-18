<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="Login">
      <label for="username">Username</label>
      :
      <input type="text" id="username" v-model="username" />
      <br />

      <label for="password">Password</label>
      :
      <input type="password" id="password" v-model="password" />
      <br />

      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBankStore } from "@/stores/bank";

const username = ref(null);
const password = ref(null);
const store = useBankStore();

const Login = function () {
  const payload = {
    username: username.value,
    password: password.value,
  };
  store.Login(payload);
};
</script>

<style scoped></style>
