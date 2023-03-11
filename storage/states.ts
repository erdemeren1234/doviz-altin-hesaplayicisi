import { defineStore } from "pinia";

const useStates = defineStore("states", () => {
  const sum = ref<number>(0);
  const result = ref(new Map());

  const getSum = computed(() => sum.value);
  const getResult = computed(() => result.value);

  function setSum(value: number): void {
    sum.value = value;
  }
  function resetResult(): void {
    result.value.clear()
  }

  return {
    getSum,
    getResult,
    setSum,
    resetResult
  };
});

export default useStates;
