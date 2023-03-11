<script setup>
import useStates from "~~/storage/states";

const { getSum, getResult, resetResult } = useStates();

function resetAndNavigate() {
  resetResult();
  navigateTo("/");
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
      <button @click="navigateTo('/')">Formu doldurmaya devam et</button>
      <button @click="resetAndNavigate">Yeni hesaplama yap</button><br />
    </section>
  </section>
</template>
