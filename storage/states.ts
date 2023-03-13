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
  function setInputGroupUUIDKeys(value: string[] | string) {
    if (useIsArrayOfString(value)) {
      inputGroupUUIDKeys.value = value as string[]
    }
    if (typeof value === 'string') {
      inputGroupUUIDKeys.value.push(value)
    }
    
  }

  return {
    sum,
    inputGroupUUIDKeys,
    getSum,
    getResult,
    setSum,
    resetResult,
    setInputGroupUUIDKeys,
  };
});

export default useStates;
