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
    <h2 name="title" class="title">Current Markets Data</h2>
    <div
      :class="twClass"
      class="w-max mx-2 my-2 relative flex justify-end gap-2 font-['Josefin_Sans'] font-bold text-xs after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:scale-x-0 after:h-[2px] after:bg-indigo-500 after:transition after:duration-500 hover:after:scale-x-100 transition-all duration-500"
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
