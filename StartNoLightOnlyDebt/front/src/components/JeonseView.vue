<template>
  <div>
    <button @click="navigationStore.goHome">홈으로 가기</button>
    <button @click="navigationStore.goBack">뒤로 가기</button>
    <h2>전세 자금 대출 상품 조회</h2>
    <h4>조건에 맞는 금융 조건</h4>
  </div>
  <!-- <div v-for="jeonse in store.jeonses" :key="jeonse.option_id" :jeonse="jeonse">
    {{ jeonse.fin_co_no }}
    |
    {{ creditLoan.fin_prdt_cd }}
    |
    {{ creditLoan.crdt_prdt_type }}
    |
    {{ creditLoan.kor_co_nm }}
    |
    {{ creditLoan.fin_prdt_nm }}
    |
    {{ creditLoan.kor_co_nm }}
  </div> -->
</template>

<script setup>
import { onMounted } from "vue";
import { useBankStore } from "@/stores/bank";

const store = useBankStore();

onMounted(() => {
  store.getJeonse();
  console.log(store);
});

// 홈, 뒤로가기 구현
import { useNavigationStore } from "@/stores/navigation";

const navigationStore = useNavigationStore();
</script>

<style scoped></style>
