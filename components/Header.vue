<script lang="ts" setup>
const emit = defineEmits<{
  (e: "openCurrentMarketsData"): void;
  (e: "closeCurrentMarketsData"): void;
}>();

const config = useRuntimeConfig();
const title = config.siteTitle;

const isOpened = ref(false);

function handleOpenClick() {
  isOpened.value = true;
  emit("openCurrentMarketsData");
}
function handleCloseClick() {
  isOpened.value = false;
  emit("closeCurrentMarketsData");
}
</script>

<template>
  <section
    component-name="header"
    class="bg-header-bg grid grid-cols-[4fr_1fr] place-content-between border-l-[8px] border-b-2 rounded-lg border-[#161F30] transition"
  >
    <section
      @click="navigateTo('/')"
      class="p-2 text-xl lg:text-3xl sm:text-2xl max-[400px]:text-sm text-[#173540] font-['Oswald'] hover:cursor-pointer hover:translate-x-2 hover:font-bold transition"
    >
      {{ title }}
    </section>

    <section class="flex justify-end items-center gap-4 lg:hidden">
      <svg
        name="open-button"
        v-if="!isOpened"
        @click="handleOpenClick"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        class="iconClass"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
        />
      </svg>

      <svg
        name="close-button"
        v-if="isOpened"
        @click="handleCloseClick"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="iconClass"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
        />
      </svg>
    </section>
  </section>
</template>

<style scoped></style>
