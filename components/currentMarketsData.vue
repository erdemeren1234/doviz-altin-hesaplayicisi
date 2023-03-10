<script lang="ts" setup>
import usePreferences from "~~/storage/preferences";

const { fetchDataByKey } = await import("~~/services/marketsDataApiService");
const { marketUnits } = usePreferences();

//Not included "TRY" in marketUnits. Filtered market units to display user agents
const displayMarketUnits = marketUnits.filter((i: string) => i !== "TRY");

const markets = await fetchDataByKey("/data", displayMarketUnits);

const updateTime = markets.Update_Date;

const twClass = "xl:text-xl m-2 text-md";
</script>

<template>
  <article component-name="currentMarketsData">
    <h2 class="m-2 font-['Lobster'] 2xl:text-5xl xl:text-3xl text-2xl text-orange-800 transition-all hover:text-orange-900 hover:translate-x-4">
      Current Markets Data
    </h2>
    <div
      :class="twClass"
      class="w-max mx-2 my-2 flex justify-end gap-2 font-['Josefin_Sans'] font-bold text-xs underline decoration-indigo-500 transition duration-500 hover:underline-offset-4"
    >
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
