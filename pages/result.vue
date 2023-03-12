<script lang="ts" setup>
import useStates from "~~/storage/states";
import { storeToRefs } from 'pinia'

const states = useStates()
const { resetResult } = states;
// in order to get states immediately, used storeToRefs()
const { getSum, getResult } = storeToRefs(states);

const displayForm = ref<boolean>(false);

function resetResultAndNavigate(path: string = '/'): void {
  resetResult();
  navigateTo(path);
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <section page-name="result">
    <h1 class="font-bold text-5xl">result</h1>
    
    <pre>{{ useTransformToTRY(getSum) }}</pre>
    <pre>{{ getResult }}</pre>
    <section id="buttons" class="my4 gap-4 grid grid-cols-1 font-bold font-['Raleway'] text-xl">
      <button @click="displayForm = true">Formu doldurmaya devam et</button>
      <button @click="resetResultAndNavigate()">Yeni hesaplama yap</button>
    </section>

    <Form v-if="displayForm" @onFormSubmit="displayForm = false" />
  </section>
</template>
