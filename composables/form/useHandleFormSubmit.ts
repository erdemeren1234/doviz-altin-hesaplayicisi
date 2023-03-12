import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formInputType } from "~~/types/types";
import useStates from "~~/storage/states";

export default async function (formInputs: formInputType[]) {
  const route = useRoute();
  const { getResult, setSum, inputGroupUUIDKeys } = useStates();

  formInputs.map(({ marketUnit, quantity }) => {
    getResult.has(marketUnit)
      ? getResult.set(marketUnit, getResult.get(marketUnit) as number + parseFloat(quantity.replace(",", ".")))
      : getResult.set(marketUnit, parseFloat(quantity.replace(",", ".")));
  });

  const units: string[] = Array.from(getResult.keys());
  const markets = await fetchDataByKey("/data", units);

  setSum(
    units.reduce(
      (acc: number, unit: string): number => acc + parseFloat(markets[unit].Selling) * (getResult.get(unit) as number),
      0
    )
  );

  //clear the array
  inputGroupUUIDKeys.splice(0)
  
  if (route.path !== "/result") {
    navigateTo("/result");
  }

}
