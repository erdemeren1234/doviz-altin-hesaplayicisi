import useStates from "~~/storage/states";


export const useAddInputGroupUUID = (value: string): void => {
  const { setInputGroupUUIDKeys } = useStates()
  setInputGroupUUIDKeys(value)

};
