<script setup lang="ts">
import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formInputType } from "~~/types/types";
import useStates from "~~/storage/states";

const { getResult, addToSum } = useStates();

async function handleFormSubmit(formInputs: formInputType[]) {
  formInputs.map(({ marketUnit, quantity }) => {
    getResult.has(marketUnit)
      ? getResult.set(marketUnit, getResult.get(marketUnit) + parseFloat(quantity.replace(",", ".")))
      : getResult.set(marketUnit, parseFloat(quantity.replace(",", ".")));
  });

  const units: string[] = Array.from(getResult.keys());
  const markets = await fetchDataByKey("/data", units);

  addToSum(
    units.reduce(
      (acc: number, unit: string): number => acc + parseFloat(markets[unit].Selling) * getResult.get(unit),
      0
    )
  );

  navigateTo("/result");
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <section page-name="index">
    <NuxtLink to="/result">result</NuxtLink>

    <Suspense>
      <Form @formSubmit="handleFormSubmit" />

      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </section>
</template>

<style>
body {
  background-color: #ece5c7;
}
</style>
