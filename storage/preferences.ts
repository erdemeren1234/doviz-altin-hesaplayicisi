import { defineStore } from "pinia";
import { marketSymbolsType } from "~~/types/types";

const usePreferences = defineStore("preferences", () => {
  //it will be shown investment data units to user agent
  const marketUnits = ref<string[]>([
    "TRY",
    "USD",
    "EUR",
    "GBP",
    "GRA",
    "CEY",
    "YAR",
    "TAM",
    "CUM",
    "ATA",
    "RES",
    "ODA",
    "OSA",
    "YIA",
    "GUM",
  ]);

  //FormKit -> select -> optgroup
  const formSelectValues = ref([
    {
      label: "Yerli",
      options: [
        {
          value: "TRY",
          text: "Türk Lirası",
        },
      ],
    },
    {
      label: "Döviz",
      options: [
        {
          value: "USD",
          text: "Amerikan Doları",
        },
        {
          value: "EUR",
          text: "Euro",
        },
        {
          value: "GBP",
          text: "İngiliz Sterlini",
        },
      ],
    },
    {
      label: "Emtia",
      options: [
        {
          value: "GRA",
          text: "Gram Altın",
        },
        {
          value: "CEY",
          text: "Çeyrek Altın",
        },
        {
          value: "YAR",
          text: "Yarım  Altın",
        },
        {
          value: "TAM",
          text: "Tam Altın",
        },
        {
          value: "CUM",
          text: "Cumhuriyet Altını",
        },
        {
          value: "ATA",
          text: "Ata Altın",
        },
        {
          value: "RES",
          text: "Reşat Altın",
        },
        {
          value: "ODA",
          text: "14 Ayar Altın",
        },
        {
          value: "OSA",
          text: "18 Ayar Altın",
        },
        {
          value: "YIA",
          text: "22 Ayar Bilezik",
        },
        {
          value: "GUM",
          text: "Gümüş",
        },
      ],
    },
  ]);

  const longMarketNames = Object.fromEntries(
    formSelectValues.value.reduce((acc: string[][], curr) => {
      return acc.concat(curr.options.map((item) => [item.value, item.text]));
    }, [])
  );

  // html hex codes
  const marketSymbols: marketSymbolsType = {
    TRY: "&#x20BA;",
    USD: "&#x24;",
    EUR: "&#x20AC;",
    GBP: "&#xa3;",
  };

  return {
    marketUnits,
    formSelectValues,
    longMarketNames,
    marketSymbols
  };
});

export default usePreferences;
