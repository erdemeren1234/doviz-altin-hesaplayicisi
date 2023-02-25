import { defineStore } from "pinia";

const usePreferences = defineStore("preferences", () => {
  //it will be shown investment data units to user agent
  const marketUnits = ref<string[]>([
    "TRY",
    "USD",
    "EUR",
    "GBP",
    "gram-altin",
    "ceyrek-altin",
    "yarim-altin",
    "tam-altin",
    "cumhuriyet-altini",
    "ata-altin",
    "resat-altin",
    "18-ayar-altin",
    "22-ayar-bilezik",
    "gumus",
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
          value: "gram-altin",
          text: "Gram Altın",
        },
        {
          value: "ceyrek-altin",
          text: "Çeyrek Altın",
        },
        {
          value: "yarim-altin",
          text: "Yarım  Altın",
        },
        {
          value: "tam-altin",
          text: "Tam Altın",
        },
        {
          value: "cumhuriyet-altini",
          text: "Cumhuriyet Altını",
        },
        {
          value: "ata-altin",
          text: "Ata Altın",
        },
        {
          value: "resat-altin",
          text: "Reşat Altın",
        },
        {
          value: "18-ayar-altin",
          text: "18 Ayar Altın",
        },
        {
          value: "22-ayar-bilezik",
          text: "22 Ayar Bilezik",
        },
        {
          value: "gumus",
          text: "Gümüş",
        },
      ],
    },
  ]);

  return {
    marketUnits,
    formSelectValues,
  };
});

export default usePreferences;
