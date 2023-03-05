<script lang="ts" setup>
import { fetchDataByKey, updateDateKey } from "~~/services/marketsDataApiService";
import usePreferences from "~~/storage/preferences";

const { marketUnits } = usePreferences();

//Not included "TRY" in marketUnits. Filtered market units to display user agents
const fMarketUnits = marketUnits.filter((i: string) => i !== "TRY");

const markets = await fetchDataByKey("/data", fMarketUnits);

const updateTime = markets[updateDateKey];

function formatTime(time: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Europe/Istanbul",
  }).format(new Date(time));
}

const twClass = "xl:text-xl m-2 md:text-md sm:text-sm";
</script>

<template>
  <article component-name="currentMarketsData">
    <h2 class="m-2 font-['Raleway'] font-bold 2xl:text-4xl xl:text-3xl md:text-2xl sm:text-lg text-red-800">
      Current Markets Data
    </h2>
    <div :class="twClass" class="mx-2 my-5 flex justify-end">
      <span>Update Time:&nbsp;</span>
      <time :datetime="updateTime">{{ formatTime(updateTime) }}</time>
    </div>
    <section class="grid md:grid-cols-2 grid-cols-1">
      <MarketUnit
        v-for="marketUnit in fMarketUnits"
        :key="marketUnit"
        :class="twClass"
        :unitName="marketUnit"
        :buyPrice="markets[marketUnit].Alış"
        :sellPrice="markets[marketUnit].Satış"
      ></MarketUnit>
    </section>
  </article>
</template>

<style scoped></style>
