<script lang="ts" setup>
import { fetchDataByKey, updateDateKey } from "~~/services/marketsDataApiService";
import usePreferences from "~~/storage/preferences";

const { marketUnits } = usePreferences();
//Not included "TRY" in marketUnits. Filtered market units to display user agents
const fMarketUnits = marketUnits.filter((i: string) => i !== "TRY");
const markets = await fetchDataByKey("/data", fMarketUnits);
const updateTime = markets[updateDateKey];
const formattingUpdateTime = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Europe/Istanbul",
}).format(new Date(updateTime));
const twClass = "text-xl m-2";
</script>

<template>
  <article component-name="currentMarketsData">
    <h2 class="m-2 font-['Raleway'] font-bold text-4xl text-red-800">Current Markets Data</h2>
    <div :class="twClass" class="mx-2 my-5 flex justify-end">
      <span>Update Time:&nbsp;</span>
      <time :datetime="updateTime">{{ formattingUpdateTime }}</time>
    </div>
    <section class="grid grid-cols-2">
      <marketUnit
        v-for="marketUnit in fMarketUnits"
        :key="marketUnit"
        :class="twClass"
        :unitName="marketUnit"
        :buyPrice="markets[marketUnit].Alış"
        :sellPrice="markets[marketUnit].Satış"
      ></marketUnit>
    </section>
  </article>
</template>

<style scoped></style>
