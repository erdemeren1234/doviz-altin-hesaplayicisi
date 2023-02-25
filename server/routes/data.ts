//1000ms = 1s
//1 hour = 1000 * 60 * 60 ms

const validityPeriod: number = 1000 * 60 * 60;
let cachedData: object = {};
let cacheTime: number = 0;

const TRY: object = {
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

  try {
    let data: object = await $fetch("https://finans.truncgil.com/today.json");

    cacheTime = Date.now();

    if (typeof data === "object") {
      data["TRY"] = TRY;
    }

    cachedData = { ...data, cacheTime: cacheTime }

    return data;
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: "An error has occurred" });
  }
});
