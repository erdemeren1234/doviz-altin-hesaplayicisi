<script lang="ts" setup>
import { log } from "console";
import { fetchAllData } from "~~/services/marketsDataApiService";
import usePreferences from "~~/storage/preferences";

const { marketUnits } = usePreferences();
const markets = await fetchAllData();

typeof markets === "object" ? console.log("erdemcik") : ""

//Not included "TRY" in marketUnits. Filtered market units
const fMarketUnits = marketUnits.filter((i: string) => i !== "TRY");
</script>

<template>
  <article component-name="currentInvestmentData">
    <h2>Current Investment Data</h2>
    

    <div v-for="marketUnit in fMarketUnits" :key="marketUnit">
      <h3>{{ markets ? markets[marketUnit]["Alış"] : "" }}</h3>
    </div>
    {{ Object.keys(markets).filter((i) => marketUnits.includes(i)) }}

    <!-- {{ serviceData }} -->
  </article>
</template>

<style scoped></style>
