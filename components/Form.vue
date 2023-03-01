<script lang="ts" setup>
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import { formDataType } from "~~/types/types";
import usePreferences from "~~/storage/preferences";
import nodeCrypto from "crypto"


const [animate] = useAutoAnimate();
const { formSelectValues } = usePreferences();

const emit = defineEmits<{
  (e: "formSubmit", formData: formDataType): void;
}>();

async function submit(formData: formDataType) {
  emit("formSubmit", formData);
}

const random = () => typeof window !== 'undefined' ? window.crypto.randomUUID() : nodeCrypto.randomUUID();

let inputs = ref([random()]);

const add = () => {
  inputs.value.push(random());
  console.log(inputs.value);
};
const remove = (e) => {
  const key = e.target.getAttribute("data-key");
  inputs.value = inputs.value.filter((item) => item !== key);
};
</script>

<template>
  <FormKit type="form" submit-label="Submit" @submit="submit">
    <section ref="animate" class="m-4 p-4 border-4 border-neutral-900">
      <FormKit v-for="input in inputs" :key="input" type="group" :name="input">
        <FormKit
          type="select"
          name="marketUnit"
          label="Hesaplamak istediğiniz para veya emtia birimini seçiniz."
          label-class="label"
          outer-class="outer"
        >
          <optgroup v-for="{ label, options } in formSelectValues" :label="label">
            <option v-for="{ value, text } in options" :value="value">{{ text }}</option>
          </optgroup>
        </FormKit>
        <FormKit type="number" label="Quantity" name="quantity" />
        <button @click.stop.prevent="remove" :data-key="input">Remove</button>
      </FormKit>
    </section>
  </FormKit>
  <button @click="add">Add</button>
</template>

<style>
.label {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(14, 26, 134);
}

.outer {
  margin: 10px;
}
</style>
