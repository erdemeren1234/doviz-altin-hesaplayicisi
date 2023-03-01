<script lang="ts" setup>
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import { formDataType } from "~~/types/types";
import usePreferences from "~~/storage/preferences";
import nodeCrypto from "crypto";

const [animate] = useAutoAnimate();
const { formSelectValues } = usePreferences();

const emit = defineEmits<{
  (e: "formSubmit", formData: formDataType): void;
}>();

async function submit(formData: formDataType) {
  emit("formSubmit", formData);
}

const random = () => (typeof window !== "undefined" ? window.crypto.randomUUID() : nodeCrypto.randomUUID());

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
  <FormKit
    type="form"
    @submit="submit"
    :submit-attrs="{
      inputClass: 'my-2 p-2 bg-green-700 border-2 border-black text-xl text-white'
    }"
  >
    <section ref="animate" class="m-4 p-4 border-4 border-neutral-900">
      <FormKit v-for="input in inputs" :key="input" type="group" :name="input">
        <FormKit
          type="select"
          name="marketUnit"
          label="Hesaplamak istediğiniz para veya emtia birimini seçiniz"
          label-class="label"
        >
          <optgroup v-for="{ label, options } in formSelectValues" :label="label">
            <option v-for="{ value, text } in options" :value="value">{{ text }}</option>
          </optgroup>
        </FormKit>
        <FormKit type="number" name="quantity" label="Quantity" label-class="label" />
        <button
          @click.stop.prevent="remove"
          :data-key="input"
          class="my-2 mr-2 p-2 text-lg text-red-700 border-2 border-red-900"
        >
          Remove
        </button>
      </FormKit>
      <button @click="add" class="p-2 border-2 border-black text-lg">Add</button>
    </section>
  </FormKit>
</template>

<style>
.label {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color: rgb(14, 26, 134);
  font-weight: 900;
}

.outer {
  margin: 10px;
}
</style>
