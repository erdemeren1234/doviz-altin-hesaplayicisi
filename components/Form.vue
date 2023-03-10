<script lang="ts" setup>
import usePreferences from "~~/storage/preferences";
import { formDataType, formInputZodType, formInputType } from "~~/types/types";

const { useAutoAnimate } = await import("@formkit/auto-animate/vue");
const [animate] = useAutoAnimate();
const { formSelectValues } = usePreferences();

const emit = defineEmits<{
  (e: "formSubmit", formInputs: formInputType[], formIsFilled: boolean): void;
}>();

async function submit(formData: formDataType) {
  const formInputs: formInputType[] = [];

  Object.values(formData).map((input: formInputType) => {
    if (formInputZodType.safeParse(input).success) {
      formInputs.push(input);
    }
  });
  emit("formSubmit", formInputs, true);
}

const inputUUIDKeys: globalThis.Ref<string[]> = ref([]);

onMounted(() => {
  //in order to prevent to pass different random uuid to inputUUIDKeys array and select input name
  inputUUIDKeys.value.push(useRandomUUID());
});

function addInputGroup(): void {
  inputUUIDKeys.value.push(useRandomUUID());
}
function removeInputGroup(e): void {
  const key = e.target.getAttribute("data-key");
  inputUUIDKeys.value = inputUUIDKeys.value.filter((item) => item !== key);
}
</script>

<template>
  <FormKit
    type="form"
    @submit="submit"
    :submit-attrs="{
      inputClass: 'mx-4 p-2 bg-green-700 border-1 border-black text-xl text-white',
    }"
  >
    <section ref="animate" class="m-2 p-2">
      <FormKit v-for="UUIDKey in inputUUIDKeys" :key="UUIDKey" type="group" :name="UUIDKey">
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
            @click.stop.prevent="removeInputGroup"
            :data-key="UUIDKey"
            class="remove disabled:remove-disabled"
            :disabled="inputUUIDKeys.length <= 1"
          >
            Remove
          </button>
          <button @click.stop.prevent="addInputGroup" class="add">Add</button>
        </section>
      </FormKit>
    </section>
  </FormKit>
</template>

<style>
.label {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color: rgb(6, 43, 68);
  font-weight: 800;
}
</style>
