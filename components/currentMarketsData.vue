<script lang="ts" setup>
import { fetchDataByKey } from "~~/services/marketsDataApiService";
import usePreferences from "~~/storage/preferences";

const { marketUnits } = usePreferences();

//Not included "TRY" in marketUnits. Filtered market units to display user agents
const displayMarketUnits = marketUnits.filter((i: string) => i !== "TRY");

const markets = await fetchDataByKey("/data", displayMarketUnits);

const updateTime = markets.Update_Date;

const twClass = "xl:text-xl m-2 text-md";
</script>

<template>
  <article component-name="currentMarketsData">
    <h2
      class="m-2 font-['Quicksand'] font-bold 2xl:text-5xl xl:text-3xl text-2xl text-blue-700"
      
    >
      Current Markets Data
    </h2>
    <div :class="twClass" class="mx-2 my-5 flex justify-end gap-2 font-['Josefin_Sans'] font-bold">
      <span class="">Update Time:</span>
      <time :datetime="updateTime">{{ useFormatTime(updateTime, { dateStyle: "long" }) }}</time>
    </div>
    <section class="grid md:grid-cols-2 grid-cols-1">
      <MarketUnit
        v-for="marketUnit in displayMarketUnits"
        :key="marketUnit"
        :class="twClass"
        :unitName="useTransformToLongName(marketUnit)"
        :buyPrice="useTransformToTRY(markets[marketUnit].Buying)"
        :sellPrice="useTransformToTRY(markets[marketUnit].Selling)"
      ></MarketUnit>
    </section>
  </article>
</template>

<style scoped></style>
