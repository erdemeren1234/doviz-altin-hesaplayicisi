<script setup lang="ts">
import usePreferences from "~~/storage/preferences";

const { formSelectValues } = usePreferences();

const CurrentInvestmentData = defineAsyncComponent({
  loader: () => import("~~/components/currentInvestmentData.vue"),
  loadingComponent: () => import("~~/components/loading.vue"),
  
});

const form = ref<object>();

async function login(formData) {
  console.log(formData);
}

definePageMeta({
  middleware: ["control"],
});
</script>

<template>
  <main class="mt-6 mx-auto w-[95dvw] grid grid-cols-2 gap-4">
    <section class="form-inputs p-2 bg-section-light-bg">
      <h2>Form Inputs</h2>

      <FormKit type="form" submit-label="Login" method="post" @submit="login">
        <FormKit type="group" v-model="form">
          <FormKit
            type="select"
            label="Hesaplamak istediğiniz para veya emtia birimini seçiniz."
            name="invesmentUnit"
          >
            <optgroup v-for="{ label, options } in formSelectValues" :label="label">
              <option v-for="{ value, text } in options" :value="value">{{ text }}</option>
            </optgroup>
            <!-- <optgroup label="Yerli">
              <option value="TRY">Türk Lirası</option>
            </optgroup>
            <optgroup label="Döviz">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </optgroup>
            <optgroup label="Altın">
              <option value="jupiter">Jupiter</option>
              <option value="saturn">Saturn</option>
            </optgroup> -->
          </FormKit>
        </FormKit>
      </FormKit>

      <div>Form: {{ form }}</div>
    </section>

    <section class="current-investment-data p-2 bg-section-light-bg">
      <CurrentInvestmentData />
    </section>
  </main>
</template>

<style>
body {
  background-color: #ece5c7;
}
</style>
