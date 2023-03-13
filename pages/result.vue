<script lang="ts" setup>
import useStates from "~~/storage/states";
import usePreferences from "~~/storage/preferences";

const { marketSymbols, longMarketNames } = usePreferences();
const states = useStates();
const { resetResult } = states;
// in order to get states immediately, used storeToRefs()
const { getSum, getResult } = storeToRefs(states);

const displayForm = ref<boolean>(false);

function resetResultAndNavigate(path: string = "/"): void {
  resetResult();
  navigateTo(path);
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <section page-name="result">
    <section class="font-semibold text-xl lucidaFont" v-for="unit in getResult.keys()">
      {{ longMarketNames[unit] }} = {{ getResult.get(unit) }}
      <span class=" text-rose-900" v-html="marketSymbols[unit] ?? 'Gram/Adet'"></span>
    </section>

    <pre class="text-2xl my-4 text-emerald-700 font-extrabold">Toplam: {{ useTransformToTRY(getSum) }}</pre>
    <!-- <pre>{{ getResult }}</pre> -->
    <section id="buttons" class="my-4 gap-4 grid grid-cols-2 font-bold font-['Raleway'] text-xl">
      <button @click="displayForm = true">Formu doldurmaya devam et</button>
      <button @click="resetResultAndNavigate()">Yeni hesaplama yap</button>
    </section>

    <Form v-if="displayForm" @onFormSubmit="displayForm = false" />
  </section>
</template>
