import useStates from "~~/storage/states";

export const useRemoveInputGroupUUID = (event): void => {
  const states = useStates()
  const { setInputGroupUUIDKeys } = states
  const { getInputGroupUUIDKeys } = storeToRefs(states)
  const key = event.target.getAttribute("data-key");
  setInputGroupUUIDKeys(getInputGroupUUIDKeys.value.filter((item) => item !== key))

};
