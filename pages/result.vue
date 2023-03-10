<script setup>
import useStates from "~~/storage/states";

const { getSum, getResult } = useStates();
definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <section page-name="result">
    <h1 class="font-bold text-5xl">result</h1>
    <pre>{{ useTransformToTRY(getSum) }}</pre>
    <pre>{{ getResult }}</pre>
    <NuxtLink to="/">anasayfa</NuxtLink>
  </section>
</template>
