<script setup lang="ts">
import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formInputType } from "~~/types/types";


const displayData = ref();

const formIsFilled = ref<boolean>(false);
const resultComponentIsReady = formIsFilled;

async function handleFormSubmit(formInputs: formInputType[]) {
  const result = new Map();
  
  formInputs.map(({ marketUnit, quantity }) => {
    result.has(marketUnit)
    ? result.set(marketUnit, result.get(marketUnit) + parseFloat(quantity.replace(",", ".")))
    : result.set(marketUnit, parseFloat(quantity.replace(",", ".")));
  });
  
  const units = Array.from(result.keys());
  const markets = await fetchDataByKey("/data", units);
  displayData.value = result;
  formIsFilled.value = true;
  console.log(markets);
  
}



definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <main class="mt-6 mx-auto w-[95dvw] grid grid-cols-2 gap-2">
    <section class="form-inputs p-2 bg-section-light-bg">
      <Suspense>
        <template #default>
          <Form v-if="!formIsFilled" @formSubmit="handleFormSubmit" />
        </template>

        <template #fallback>
          <Loading />
        </template>
      </Suspense>

      <Result v-if="resultComponentIsReady"></Result>
      <pre>{{ displayData }}</pre>
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
