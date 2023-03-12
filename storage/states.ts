import { defineStore } from "pinia";

const useStates = defineStore("states", () => {
  const sum = ref<number>(0);
  const result = ref<Map<string, number>>(new Map());
  const inputGroupUUIDKeys = ref<string[]>([]);

  const getSum = computed(() => sum.value)
  const getResult = computed(() => result.value);

  function setSum(value: number): void {
    sum.value = value;
  }
  function resetResult(): void {
    result.value.clear();
  }

  return {
    sum,
    getSum,
    getResult,
    setSum,
    resetResult,
    inputGroupUUIDKeys,
  };
});

export default useStates;
