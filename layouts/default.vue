<script lang="ts" setup>
//while loading, initial value is Infinity (type: number)
//tailwind lg = 1024px
const { width } = useWindowSize();

const isOpened = ref(false)
</script>

<template>
  <main
  class="mt-1 mx-auto relative w-[95dvw] 3xl:h-[95dvh] 3xl:w-[80dvw] grid place-content-start 3xl:mt-14 3xl:justify-center lg:grid-cols-2 grid-cols-1 gap-2"
  >
  <section class="p-1 sticky top-0 left-0 z-10 col-span-full row-span-1 ">
      <Header @openCurrentMarketsData="isOpened = true" @closeCurrentMarketsData="isOpened = false"/>
    </section>

    <section class="p-2 bg-section-light-bg">
      <!-- ========================= -->
      <slot />
      <!-- ======================== -->
    </section>

    <section v-if="(width >= 1024 || isOpened) && width !== Infinity " class="p-2 bg-section-light-bg">
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
