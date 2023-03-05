//1000ms = 1s
//1 hour = 1000 * 60 * 60 ms

import { $fetchErrorDataType, responseType, responseZodType } from "~~/types/types";

const validityPeriod = 1000 * 60 * 15;
let cachedData: object = {};
let cacheTime = 0;

const TRY = {
  Alış: "1",
  Tür: "Yerli",
  Satış: "1",
  Değişim: "%0,00",
};

//EXPORT
export default defineEventHandler(async (event) => {
  if (cacheTime && cacheTime > Date.now() - validityPeriod) {
    return cachedData;
  }

  const data = await $fetch<responseType>(
    "https://finans.truncgil.com/today.json"
  ).catch<$fetchErrorDataType>((error) => error.data);

  cacheTime = Date.now();

  if (responseZodType.safeParse(data).success) {
    data["TRY"] = TRY;
  }

  //cachedData = { ...data, cacheTime: cacheTime }; .or(z.number())
  cachedData = data;

  return data;
});
