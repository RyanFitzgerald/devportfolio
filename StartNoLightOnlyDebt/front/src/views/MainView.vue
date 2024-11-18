<template>
  <div>
    <h1>Start No Light Only Debt</h1>
    <h2>금융 상품 조회</h2>
  </div>

  <div>
    <RouterLink :to="{ name: 'CreditLoanView' }">개인 대출</RouterLink>
    |
    <RouterLink :to="{ name: 'JeonseView' }">전세 대출</RouterLink>
    |
    <RouterLink :to="{ name: 'MortgageView' }">담보 대출</RouterLink>
  </div>

  <div>
    <h3>상품 둘러보기</h3>
  </div>

  <div>
    <h4>사람들이 좋아요한 상품</h4>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

// 데이터 상태 정의
</script>

<style scoped></style>
