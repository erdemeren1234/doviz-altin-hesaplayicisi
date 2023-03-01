<script setup lang="ts">
import { fetchDataByKey } from "~~/services/marketsDataApiService";
import { formDataType } from "~~/types/types";

const markets = await fetchDataByKey("/data", ["USD"]);

const data = ref();
const formIsFilled = ref(false);

const CurrentMarketsData = defineAsyncComponent({
  loader: () => import("~~/components/currentMarketsData.vue"),
  loadingComponent: () => import("~~/components/loading.vue"),
});

function handleFormSubmit(formData: formDataType) {
  console.log(formData);
  data.value = formData;
  formIsFilled.value = true;
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <main class="mt-6 mx-auto w-[95dvw] grid grid-cols-2 gap-4">
    <section class="form-inputs p-2 bg-section-light-bg">
      <Form v-if="!formIsFilled" @formSubmit="handleFormSubmit"></Form>
      <Result v-if="formIsFilled"></Result>

      <pre>{{ data }}</pre>
    </section>

    <section class="p-2 bg-section-light-bg">
      <CurrentMarketsData />
    </section>
  </main>
</template>

<style>
body {
  background-color: #ece5c7;
}
</style>
