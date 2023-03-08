import { apiType } from "~~/types/apiTypes";

//1000ms = 1s
//1 hour = 1000 * 60 * 60 ms
const validityPeriod = 1000 * 60 * 15;
let cachedData: object = {};
let cacheTime = 0;

const TRY = {
  Buying: "1",
  Type: "National",
  Selling: "1",
  Change: "0.00",
};


export default defineEventHandler(async (event) => {
  if (cacheTime && cacheTime > Date.now() - validityPeriod) {
    return cachedData;
  }

  const data = await $fetch<apiType>("https://finans.truncgil.com/v4/today.json");
  data["TRY"] = TRY;
  
  cacheTime = Date.now();
  //cachedData = { ...data, cacheTime: cacheTime }; .or(z.number())
  cachedData = data;

  return data;
});
