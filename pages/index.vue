<template>
  <main class="mt-6 mx-auto w-[95vw] grid grid-cols-2 gap-4">
    <section class="form-inputs p-2 bg-section-light-bg">
      <h2>Form Inputs</h2>

      <FormKit type="form" submit-label="Login" method="post" @submit="login">
        <FormKit type="group">
          <FormKit
            type="select"
            label="Hesaplamak istediğiniz para veya emtia birimini seçiniz."
            name="invesment"
           
          >
            <option></option>
            <optgroup label="Yerli">
              <option value="TRY">Türk Lirası</option>
            </optgroup>
            <optgroup label="Döviz">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="earth">Earth</option>
              <option value="mars">Mars</option>
            </optgroup>
            <optgroup label="Altın">
              <option value="jupiter">Jupiter</option>
              <option value="saturn">Saturn</option>
              <option value="uranus">Uranus</option>
              <option value="neptune">Neptune</option>
            </optgroup>
          </FormKit>
        </FormKit>
      </FormKit>
    </section>

    <section class="current-investment-data p-2 bg-section-light-bg">
      <h2>Current Investment Data</h2>
     

          {{ investmentData }}
        
      
    </section>
  </main>
</template>

<script setup>
async function login(credentials) {
  console.log(credentials);
}

const { data: investmentData } = useFetch("/data");

definePageMeta({
  middleware: ["control"],
});
</script>

<style>
body {
  background-color: #ece5c7;
}
</style>
