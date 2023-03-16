
const useStates = defineStore("states", () => {
  const sum = ref<number>(0);
  const result = ref<Map<string, number>>(new Map());
  const inputGroupUUIDKeys = ref<string[]>([]);

  const getSum = computed(() => sum.value)
  const getResult = computed(() => result.value);
  const getInputGroupUUIDKeys = computed(() => inputGroupUUIDKeys.value);

  function setSum(value: number): void {
    sum.value = value;
  }
  function resetResult(): void {
    result.value.clear();
  }
  function resetInputGroupUUIDKeys(): void {
    inputGroupUUIDKeys.value.splice(0);
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
    getInputGroupUUIDKeys,
    setSum,
    resetResult,
    resetInputGroupUUIDKeys,
    setInputGroupUUIDKeys,
  };
});

export default useStates;
