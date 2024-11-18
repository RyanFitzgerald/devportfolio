import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useNavigationStore = defineStore("navigation", () => {
  const router = useRouter();

  const goHome = () => {
    router.push({ name: "MainView" });
  };

  const goBack = () => {
    router.back();
  };

  return { goHome, goBack };
});
