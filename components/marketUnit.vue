<script lang="ts" setup>
defineProps<{
  unitName: string;
  buyPrice: string;
  sellPrice: string;
}>();
</script>

<template>
  <article component-name="marketUnit" class="p-2 grid md:grid-cols-2 grid-cols-1 border-2 border-rose-900 ">
    <section class="font-['Josefin_Sans'] font-bold text-['clamp(3rem, 1vw, 5rem)'] text-sky-800">{{ unitName }}</section>
    <section class="">
      <div class="flex justify-around">
        <span>Alış: </span> 
        <span>{{ buyPrice }}</span>
        <span>₺</span>
      </div>
      <div class="flex justify-around">
        <span>Satış: </span> 
        <span>{{ sellPrice }}</span>
        <span>₺</span>
      </div>
    </section>
  </article>
</template>
