<script lang="ts" setup>
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import { formDataType, formInputZodType, formInputType } from "~~/types/types";
import usePreferences from "~~/storage/preferences";

const [animate] = useAutoAnimate();
const { formSelectValues } = usePreferences();

const emit = defineEmits<{
  (e: "formSubmit", formInputs: formInputType[], formIsFilled: boolean): void;
}>();

async function submit(formData: formDataType) {
  //formData = {uuid: {input},...}

  const formInputs: formInputType[] = [];

  Object.values(formData).map((input: formInputType) => {
    if (formInputZodType.safeParse(input).success) {
      formInputs.push(input);
    }
  });

  emit("formSubmit", formInputs, true);
}

let inputs: globalThis.Ref<string[]> = ref([]);

onMounted(() => {
  //in order to prevent to pass different random uuid to inputs array and select input name
  inputs.value.push(useRandomUUID());
});

function add(): void {
  inputs.value.push(useRandomUUID());
}
function remove(e): void {
  const key = e.target.getAttribute("data-key");
  inputs.value = inputs.value.filter((item) => item !== key);
}
</script>

<template>
  <section v-if="inputs.length > 0" class="">
    <FormKit
      type="form"
      @submit="submit"
      :submit-attrs="{
        inputClass: 'mx-4 p-2 bg-green-700 border-1 border-black text-xl text-white',
      }"
    >
      <section ref="animate" class="m-2 p-2">
        <FormKit v-for="input in inputs" :key="input" type="group" :name="input">
          <section name="inputs" class="p-4 border-2 border-[#084d45] rounded-lg">
            <FormKit
              type="select"
              name="marketUnit"
              label="Para veya emtia birimini seçiniz"
              label-class="label"
            >
              <optgroup v-for="{ label, options } in formSelectValues" :label="label">
                <option v-for="{ value, text } in options" :value="value">{{ text }}</option>
              </optgroup>
            </FormKit>

            <FormKit
              @keydown.enter.prevent=""
              type="text"
              name="quantity"
              label="Quantity"
              placeholder="Like 100 or 9,99"
              label-class="label"
            />
          </section>

          <section name="buttons">
            <button
              @click.stop.prevent="remove"
              :data-key="input"
              class="remove disabled:remove-disabled"
              :disabled="inputs.length <= 1"
            >
              Remove
            </button>
            <button @click.stop.prevent="add" class="add">Add</button>
          </section>
        </FormKit>
      </section>
    </FormKit>
  </section>
</template>

<style>
.label {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color: rgb(6, 43, 68);
  font-weight: 800;
}
</style>
