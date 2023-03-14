<script lang="ts" setup>
import useStates from "~~/storage/states";
import usePreferences from "~~/storage/preferences";

const { marketSymbols, longMarketNames } = usePreferences();
const states = useStates();
const { resetResult } = states;
// in order to get states immediately, used storeToRefs() (it is autoloaded in nuxt.config.ts)
const { getSum, getResult } = storeToRefs(states);

const displayForm = ref<boolean>(false);

function resetResultAndNavigate(path: string = "/"): void {
  resetResult();
  navigateTo(path);
}

function onFormSubmit() {
  displayForm.value = false;
}

function keepCalculating() {
  displayForm.value = true
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <section page-name="result" class="grid grid-cols-1">
    <h2
      class="title border-b-2 border-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 hover:text-blue-900"
    >
      Results
    </h2>
    <article class="grid grid-cols-2 place-items-center place-content-center font-['Itim'] text-[0.95rem] xl:text-2xl sm:text-[1.2rem]">
      <section v-for="unit in getResult.keys()" class="m-2 p-2 flex gap-2">
        <section name="unit-name" class="font-extrabold">{{ longMarketNames[unit] }} :</section>
        <section name="unit-quantity" class="text-[#486752]">
          {{ getResult.get(unit) }}
          <span v-html="marketSymbols[unit] ?? 'Adet'"></span>
        </section>
      </section>
    </article>

    <section
      class="my-4 mt-8 p-1 px-3 grid grid-cols-1 justify-end text-lg xl:text-2xl text-[#0F172A] font-['Tilt_Neon'] font-bold tracking-wider"
    >
      <section
        class="relative mb-2 after:absolute after:content-[''] after:h-[0.1rem] after:w-2/3 after:bg-red-700 after:left-0 after:bottom-[-10%]"
      >
        Toplam
      </section>
      <section class="place-self-end">
        {{ useTransformToTRY(getSum) }}
      </section>
    </section>
    <!-- <pre>{{ getResult }}</pre> -->
    <section
      name="button-container"
      class="w-3/4 max-[525px]:w-full mx-auto my-4 gap-4 grid grid-cols-2 font-['Josefin_Sans']"
    >
      <button @click="keepCalculating" class="resultButton">
        Hesaplamaya devam et
      </button>
      <button @click="resetResultAndNavigate()" class="resultButton">
        Yeni hesaplama yap
      </button>
    </section>

    <Form v-if="displayForm" @onFormSubmit="onFormSubmit" />
  </section>
</template>
