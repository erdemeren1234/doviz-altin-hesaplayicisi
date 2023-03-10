<script lang="ts" setup></script>

<template>
  <main class="mt-6 mx-auto w-[95dvw] grid lg:grid-cols-2 grid-cols-1 gap-2">
    <section class="p-2 bg-section-light-bg">
    <!-- ========================= -->
      <slot />
    <!-- ======================== -->
    </section>

    <section class="p-2 bg-section-light-bg">
      <Suspense>
        <CurrentMarketsData />

        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </section>
  </main>
</template>

<style scoped></style>
