<script setup lang="ts">


definePageMeta({
  middleware: [],
});
</script>

<template>
  <section page-name="index">
    <NuxtLink to="/result">result</NuxtLink>

    <Suspense>
      <Form/>

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
