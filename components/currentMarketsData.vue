<script lang="ts" setup>
import { fetchDataByKey} from "~~/services/marketsDataApiService";
import usePreferences from "~~/storage/preferences";

const { marketUnits } = usePreferences();

//Not included "TRY" in marketUnits. Filtered market units to display user agents
const displayMarketUnits = marketUnits.filter((i: string) => i !== "TRY");

const markets = await fetchDataByKey("/data", displayMarketUnits);

const updateTime = markets.Update_Date;

const twClass = "xl:text-xl m-2 md:text-md sm:text-sm";
</script>

<template>
  <article component-name="currentMarketsData">
    <h2 class="m-2 font-['Raleway'] font-bold 2xl:text-4xl xl:text-3xl md:text-2xl sm:text-lg text-red-800">
      Current Markets Data
    </h2>
    <div :class="twClass" class="mx-2 my-5 flex justify-end">
      <span>Update Time:&nbsp;</span>
      <time :datetime="updateTime">{{ useFormatTime(updateTime) }}</time>
    </div>
    <section class="grid md:grid-cols-2 grid-cols-1">
      <MarketUnit
        v-for="marketUnit in displayMarketUnits"
        :key="marketUnit"
        :class="twClass"
        :unitName="marketUnit"
        :buyPrice="useTransformToTRY(markets[marketUnit].Buying)"
        :sellPrice="useTransformToTRY(markets[marketUnit].Selling)"
      ></MarketUnit>
    </section>
  </article>
</template>

<style scoped></style>
