<script lang="ts" setup>
defineProps<{
  unitName: string;
  buyPrice: string;
  sellPrice: string;
}>();
</script>

<template>
  <article
    component-name="marketUnit"
    class="p-2 grid md:grid-cols-2 grid-cols-1 border border-rose-900 hover:scale-105 transition-all"
  >
    <section class="font-['Josefin_Sans'] font-bold text-['clamp(3rem, 1vw, 5rem)'] text-sky-800">
      {{ unitName }}
    </section>
    <section class="font-['Oswald'] md:block flex justify-around">
      <div class="flex justify-around gap-4">
        <span>Alış: </span>
        <span>{{ buyPrice }}</span>
      </div>
      <div class="flex justify-around gap-4">
        <span>Satış: </span>
        <span>{{ sellPrice }}</span>
      </div>
    </section>
  </article>
</template>
