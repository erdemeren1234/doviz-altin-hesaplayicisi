<script lang="ts" setup>
//while loading, initial value is Infinity (type: number)
//tailwind lg = 1024px
const { width } = useWindowSize();
const isOpened = ref(false);

const currentMarketsData = ref(null);

function onOpen() {
  isOpened.value = true;

  watch(currentMarketsData, (newVal) => {
    if (newVal !== null) {
      //x, y, top, right, bottom, left, width, height
      const { top, left } = useElementBounding(currentMarketsData);
      window.scroll({
        left: left.value,
        top: top.value,
        behavior: "smooth",
      });
    }
  });
}
function onClosed() {
  isOpened.value = false;
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <main
    class="mt-1 mx-auto relative w-[95dvw] 3xl:h-[95dvh] 3xl:w-[80dvw] grid place-content-start 3xl:mt-14 3xl:justify-center lg:grid-cols-2 grid-cols-1 gap-2"
  >
    <section class="p-1 sticky top-0 left-0 z-10 col-span-full row-span-1">
      <Header @openCurrentMarketsData="onOpen" @closeCurrentMarketsData="onClosed" />
    </section>
    <section class="p-2 bg-section-light-bg">
      <!-- ========================= -->
      <slot />
      <!-- ======================== -->
    </section>

    <section
      ref="currentMarketsData"
      v-if="(width >= 1024 || isOpened) && width !== Infinity"
      class="p-2 bg-section-light-bg"
    >
      <KeepAlive>
        <Suspense>
          <CurrentMarketsData />

          <template #fallback>
            <Loading />
          </template>
        </Suspense>
      </KeepAlive>
    </section>
  </main>
</template>

<style scoped></style>
