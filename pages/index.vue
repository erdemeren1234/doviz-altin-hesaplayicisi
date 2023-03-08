<script setup lang="ts">
import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formInputType } from "~~/types/types";

const displayData = ref();
const sumData = ref();

const formIsFilled = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const resultComponentIsReady = ref<boolean>(false);

async function handleFormSubmit(formInputs: formInputType[]) {
  const result = new Map();
  formIsFilled.value = true;
  isLoading.value = true;

  formInputs.map(({ marketUnit, quantity }) => {
    result.has(marketUnit)
      ? result.set(marketUnit, result.get(marketUnit) + parseFloat(quantity.replace(",", ".")))
      : result.set(marketUnit, parseFloat(quantity.replace(",", ".")));
  });

  const units = Array.from(result.keys());
  const markets = await fetchDataByKey("/data", units);
  console.log("markets", markets);

  const sum: number = units
    .reduce((acc, unit) => acc + parseFloat(markets[unit].Selling) * result.get(unit), 0)
    .toFixed(2);

  await new Promise((res) => setTimeout(res, 1000));
  isLoading.value = false;
  resultComponentIsReady.value = true;

  displayData.value = result;
  sumData.value = useTransformToTRY(sum);
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <main class="mt-6 mx-auto w-[95dvw] grid grid-cols-2 gap-2">
    <section class="form-inputs p-2 bg-section-light-bg">
      <Form v-if="!formIsFilled" @formSubmit="handleFormSubmit" />

      <Loading v-if="isLoading" />

      <Result v-if="resultComponentIsReady" />
      <pre>{{ displayData }}</pre>
      <pre>{{ sumData }}</pre>
    </section>

    <section class="p-2 bg-section-light-bg">
      <Suspense>
        <template #default>
          <CurrentMarketsData />
        </template>

        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </section>
  </main>
</template>

<style>
body {
  background-color: #ece5c7;
}
</style>
