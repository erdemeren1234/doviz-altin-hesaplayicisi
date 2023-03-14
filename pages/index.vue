<script setup lang="ts">
import { array } from 'zod';

definePageMeta({
  middleware: [],
});

</script>

<template>
  <section page-name="index">
    <Suspense>
      <section>
        <h2 name="title" class="title">Inputs</h2>
        <Form />
      </section>

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
