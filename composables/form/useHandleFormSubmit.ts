import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formInputType } from "~~/types/types";
import useStates from "~~/storage/states";

export default async function (formInputs: formInputType[]) {
  const route = useRoute();
  const states = useStates();
  const { setSum } = states;
  const { getResult, inputGroupUUIDKeys } = storeToRefs(states);

  formInputs.map(({ marketUnit, quantity }) => {
    getResult.value.has(marketUnit)
      ? getResult.value.set(
          marketUnit,
          (getResult.value.get(marketUnit) as number) + parseFloat(quantity.replace(",", "."))
        )
      : getResult.value.set(marketUnit, parseFloat(quantity.replace(",", ".")));
  });

  const units: string[] = Array.from(getResult.value.keys());
  const markets = await fetchDataByKey("/data", units);

  setSum(
    units.reduce(
      (acc: number, unit: string): number =>
        acc + parseFloat(markets[unit].Selling) * (getResult.value.get(unit) as number),
      0
    )
  );

  //clear the array
  inputGroupUUIDKeys.value.splice(0);
  
  //generally for mobile after submit
  window.scroll({
    top: 0, // could be negative value
    left: 0,
    behavior: "smooth",
  });

  if (route.path !== "/result") {
    navigateTo("/result");
  }
}
