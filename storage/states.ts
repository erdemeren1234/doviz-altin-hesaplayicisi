import { defineStore } from "pinia";

const useStates = defineStore("states", () => {
  const sum = ref<number>(0);
  const result = ref(new Map());

  const getSum = computed(() => sum.value)
  const getResult = computed(() => result.value)

  function addToSum(value: number): void {
    sum.value += value;
  }
 

  return {
    getSum,
    getResult,
    addToSum,
  };
});

export default useStates;
