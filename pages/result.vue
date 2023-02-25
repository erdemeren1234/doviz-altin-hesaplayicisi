<template>
  <h1>result</h1>
  <h2>{{ data }}</h2>

</template>

<script setup>
const { data } = useFetch("/login");

definePageMeta({
  middleware: ["control"],
});
</script>
