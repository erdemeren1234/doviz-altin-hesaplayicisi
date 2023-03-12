export const useRemoveInputGroup = (event, inputGroupUUIDKeys: globalThis.Ref<string[]> | string[]): void => {
  
  const key = event.target.getAttribute("data-key");

  if (useIsArrayOfString(inputGroupUUIDKeys)) {
    inputGroupUUIDKeys = (inputGroupUUIDKeys as string[]).filter((item) => item !== key);
  }
  if (isRef(inputGroupUUIDKeys) && useIsArrayOfString(inputGroupUUIDKeys.value)) {
    inputGroupUUIDKeys.value = inputGroupUUIDKeys.value.filter((item) => item !== key);
  }
}
