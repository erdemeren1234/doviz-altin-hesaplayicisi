<script lang="ts" setup>
import useStates from "~~/storage/states";
import usePreferences from "~~/storage/preferences";

const { marketSymbols, longMarketNames } = usePreferences();
const states = useStates();
const { resetResult, resetInputGroupUUIDKeys } = states;
// in order to get states immediately, used storeToRefs() (it is autoloaded in nuxt.config.ts)
const { getSum, getResult } = storeToRefs(states);

const displayForm = ref<boolean>(false);

function resetAndNavigate(path: string = "/"): void {
  resetResult();
  resetInputGroupUUIDKeys()
  navigateTo(path);
}

function onFormSubmit() {
  displayForm.value = false;
}

function keepCalculating() {
  displayForm.value = true;
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <Suspense>
    <section page-name="result" class="grid grid-cols-1">
      <h2
        class="title relative bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 hover:text-blue-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-11/12 after:scale-x-0 after:h-[2px] after:bg-slate-800 after:transition after:duration-500 hover:after:scale-x-100 transition-all duration-500"
      >
        Results
      </h2>
      <article
        class="grid grid-cols-2 place-items-center place-content-center font-['Itim'] text-[0.95rem] xl:text-2xl sm:text-[1.2rem]"
      >
        <section v-for="unit in getResult.keys()" class="m-2 p-2 flex gap-2">
          <section name="unit-name" class="font-extrabold">{{ longMarketNames[unit] }} :</section>
          <section name="unit-quantity" class="text-[#486752]">
            {{ getResult.get(unit) }}
            <span v-html="marketSymbols[unit] ?? 'Pieces'"></span>
          </section>
        </section>
      </article>

      <section
        class="my-3 mt-4 p-1 px-2 grid grid-cols-1 justify-end text-lg xl:text-2xl text-[#0F172A] font-['Tilt_Neon'] font-bold tracking-wider"
      >
        <section
          class="relative mb-2 after:absolute after:content-[''] after:h-[0.1rem] after:w-2/3 after:bg-red-700 after:left-0 after:bottom-[-10%]"
        >
          Sum
        </section>
        <section class="place-self-end">
          {{ useTransformToTRY(getSum) }}
        </section>
      </section>
      <!-- <pre>{{ getResult }}</pre> -->
      <section
        name="button-container"
        class="w-3/4 max-[525px]:w-full mx-auto my-2 gap-4 grid grid-cols-2 font-['Josefin_Sans']"
      >
        <button @click="keepCalculating" class="resultButton">Keep calculating</button>
        <button @click="resetAndNavigate()" class="resultButton">Make new calculation</button>
      </section>

      <Form v-if="displayForm" @onFormSubmit="onFormSubmit" />
    </section>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
