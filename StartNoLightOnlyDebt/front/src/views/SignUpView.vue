<template>
  <div>
    <h1>SignUp Page</h1>
    <form @submit.prevent="SignUp">
      <label for="username">Username</label>
      :
      <input type="text" id="username" v-model="username" />
      <br />

      <label for="name">Name</label>
      :
      <input type="text" id="name" v-model="name" />
      <br />

      <label for="email">Email</label>
      :
      <input type="email" id="email" v-model="email" />
      <br />

      <label for="password1">Password</label>
      :
      <input type="password" id="password1" v-model="password1" />
      <br />

      <label for="password2">Confirm Password</label>
      :
      <input type="password" id="password2" v-model="password2" />
      <br />

      <input type="submit" value="Sign Up" />
    </form>``
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBankStore } from "@/stores/bank";

const username = ref(null);
const name = ref(null); // 추가된 name 필드
const email = ref(null);
const password1 = ref(null);
const password2 = ref(null);

const store = useBankStore();
const SignUp = function () {
  const payload = {
    username: username.value,
    name: name.value, // name 필드를 포함
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };
  store.SignUp(payload);
};
</script>

<style scoped></style>
