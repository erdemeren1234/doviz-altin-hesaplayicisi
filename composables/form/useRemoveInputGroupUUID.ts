import useStates from "~~/storage/states";

export const useRemoveInputGroupUUID = (event): void => {
  const { setInputGroupUUIDKeys, inputGroupUUIDKeys } = useStates()
  const key = event.target.getAttribute("data-key");
  setInputGroupUUIDKeys(inputGroupUUIDKeys.filter((item) => item !== key))

};
