<template>
  <div>
    <h1>SignUp Page</h1>
    <form @submit.prevent="SignUp">
      <label for="username">이름</label>
      :
      <input type="text" id="username" v-model="username" />
      <br />

      <label for="password1">비밀번호</label>
      :
      <input type="password" id="password1" v-model="password1" />
      <br />

      <label for="password2">비밀번호</label>
      :
      <input type="password" id="password2" v-model="password2" />
      <br />
      <label for="email">이메일</label>
      :
      <input type="text" id="email" v-model="email" />
      <br />
      <input type="submit" value="가입" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBankStore } from "@/stores/bank";

const username = ref(null);
const password1 = ref(null);
const password2 = ref(null);
const email = ref(null);

const store = useBankStore();
const SignUp = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value,
    email: email.value,
  };
  store.SignUp(payload);
};
</script>

<style scoped></style>
