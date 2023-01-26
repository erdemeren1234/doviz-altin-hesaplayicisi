// import { RateLimiter } from "limiter";
// import { caching } from 'cache-manager';

// const memoryCache = await caching('memory', {
//   max: 100,
//   ttl: 60 * 1000 /*milliseconds*/,
// });

// await memoryCache.set('foo', 'bar');

// console.log("erdemmmmm",await memoryCache.get('foo'));

// //RATE LIMITER
// const limiter = new RateLimiter({
//   tokensPerInterval: 20,
//   interval: "hour",
//   fireImmediately: true,
// });

// const remainingRequests = await limiter.removeTokens(1);
// if (remainingRequests < 0) {
//   throw createError({
//     statusCode: 429,
//     statusMessage: "429 Too Many Requests - your IP is being rate limited",
//   });
// }

//1000ms = 1s
//1 hour = 1000 * 60 * 60 ms
const validityPeriod: number = 1000 * 60 * 60;
let cachedData: object | unknown = {};
let cacheTime: number = 0;

export default defineEventHandler(async (event) => {

  if (cacheTime && (cacheTime > Date.now() - validityPeriod)) {
    return cachedData;
  }

  try {
    let data: object | unknown = await $fetch("https://jsonplaceholder.typicode.com/posts");
    cacheTime = Date.now();
    data = { data, cache: cacheTime };
    cachedData = data;

    return data;
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: 'An error has occurred' })
  }
});
