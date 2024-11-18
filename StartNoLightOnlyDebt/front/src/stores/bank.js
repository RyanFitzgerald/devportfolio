import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useBankStore = defineStore("bank", () => {
  // URL 설정
  const API_URL = "http://127.0.0.1:8000";

  // 회원가입 요청 액션
  const SignUp = function (payload) {
    const { username, password1, password2, email } = payload;
    axios({
      method: "post",
      url: `${API_URL}/accounts/signup/`,
      data: {
        username,
        password1,
        password2,
        email,
      },
    })
      .then((res) => {
        console.log("회원가입이 완료 되었습니다.");
      })
      .catch((err) => console.log(err));
  };
  return { SignUp };
});
