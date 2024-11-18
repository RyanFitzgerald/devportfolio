<template>
  <div>
    <button @click="navigationStore.goHome">홈으로 가기</button>
    <button @click="navigationStore.goBack">뒤로 가기</button>
    <h2>신용 대출 상품 조회</h2>
    <h4>조건에 맞는 금융 조건</h4>
    <!-- <div v-for="creditLoan in products.credit.result.baseList" :key="creditLoan.fin_co_no">
      {{ creditLoan.fin_co_no }}
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBankStore } from "@/stores/bank";

const store = useBankStore();
const products = ref([]);
onMounted(() => {
  store.getCreditLoan();
  products.value = store.creditLoans;
  // console.log(products.value.credit.result.baseList);
});

// 홈, 뒤로가기 구현
import { useNavigationStore } from "@/stores/navigation";

const navigationStore = useNavigationStore();
</script>

<style scoped></style>
