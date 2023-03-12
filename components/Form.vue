<script lang="ts" setup>
import { formDataType, formInputZodType, formInputType } from "~~/types/types";
import usePreferences from "~~/storage/preferences";
import useStates from "~~/storage/states";

const { useAutoAnimate } = await import("@formkit/auto-animate/vue");
const [animate] = useAutoAnimate();
const { formSelectValues } = usePreferences();
const { inputGroupUUIDKeys } = useStates();

const emit = defineEmits<{
  (e: "onFormSubmit"): void;
}>();

/**
 * Submit
 */
async function submit(formData: formDataType) {
  const formInputs: formInputType[] = [];

  Object.values(formData).map((input: formInputType) => {
    if (formInputZodType.safeParse(input).success) {
      formInputs.push(input);
    }
  });

  useHandleFormSubmit(formInputs);
  emit("onFormSubmit");
}

onMounted(() => {
  //in order to prevent to pass different random uuid to inputUUIDKeys array and select input name
  useAddInputGroup(inputGroupUUIDKeys);
});
</script>

<template>
  <FormKit
    type="form"
    @submit="submit"
    :submit-attrs="{
      inputClass: 'button m-2 p-2 bg-green-700 border-1 border-black text-white',
    }"
  >
    <section ref="animate" class="grid grid-cols-2 max-[452px]:grid-cols-1">
      <section v-for="UUIDKey in inputGroupUUIDKeys" :key="UUIDKey" class="p-2">
        <FormKit type="group" :name="UUIDKey">
          <section name="inputs" class="p-2 border-2 border-[rgb(8,77,69)] rounded-lg">
            <FormKit
              type="select"
              name="marketUnit"
              label="Para veya emtia birimini seçiniz"
              label-class="label"
              input-class="inputClass"
              outer-class="my-1"
            >
              <optgroup v-for="{ label, options } in formSelectValues" :label="label">
                <option
                  class="font-['Tilt_Neon'] text-[#455015]"
                  v-for="{ value, text } in options"
                  :value="value"
                >
                  {{ text }}
                </option>
              </optgroup>
            </FormKit>

            <FormKit
              @keydown.enter.prevent=""
              type="text"
              name="quantity"
              label="Quantity"
              placeholder="Like 100 or 9,99"
              label-class="label"
              input-class="inputClass"
            />
          </section>

          <section name="buttons">
            <button
              @click.stop.prevent="useRemoveInputGroup($event, inputGroupUUIDKeys)"
              :data-key="UUIDKey"
              class="remove disabled:remove-disabled"
              :disabled="inputGroupUUIDKeys.length <= 1"
            >
              Remove
            </button>
            <button @click.stop.prevent="useAddInputGroup(inputGroupUUIDKeys)" class="add">Add</button>
          </section>
        </FormKit>
      </section>
    </section>
  </FormKit>
</template>

<style></style>
