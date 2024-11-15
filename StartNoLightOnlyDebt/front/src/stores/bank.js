import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useBankStore = defineStore("bank", () => {
  // URL 설정
  const API_URL = "http://127.0.0.1:8000";

  // 회원가입 요청 액션
  const SignUp = function (payload) {
    const { name, password1, password2, email } = payload;
    axios({
      method: "post",
      url: `${API_URL}/accounts/signup/`,
      data: {
        name,
        password1,
        password2,
        email,
      },
    }).then((res) => {});
  };
  return {};
});
