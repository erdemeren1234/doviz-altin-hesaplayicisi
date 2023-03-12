export const useAddInputGroup = (inputGroupUUIDKeys: globalThis.Ref<string[]> | string[]): void => {
  if (useIsArrayOfString(inputGroupUUIDKeys)) {
    (inputGroupUUIDKeys as string[]).push(useRandomUUID());
  }
  if (isRef(inputGroupUUIDKeys) && useIsArrayOfString(inputGroupUUIDKeys.value)) {
    inputGroupUUIDKeys.value.push(useRandomUUID());
  }
}
