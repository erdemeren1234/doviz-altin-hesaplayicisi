import useStates from "~~/storage/states";


export const useAddInputGroupUUID = (value: string): void => {
  const { setInputGroupUUIDKeys, inputGroupUUIDKeys } = useStates()
  setInputGroupUUIDKeys(value)

  

};
