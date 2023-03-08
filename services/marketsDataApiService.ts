import { apiType } from "../types/apiTypes";

/**
 *
 * @param url
 * @returns {Promise} Returns all api data
 */
export async function fetchAllData(url: string) {
  const dataOrError = await $fetch<apiType>(url);

  return dataOrError;
}

/**
 *
 * @param url
 * @param keys
 * @returns {Promise} Returns api data by given key or keys
 */
export async function fetchDataByKey(url: string, keys: string[]) {
  const dataOrError = await fetchAllData(url);

  const filtered = Object.fromEntries(
    ["Update_Date", ...keys].map((key) => [key, dataOrError[key]])
  ) as apiType;

  return filtered;
}

// export async function getBuyPrices() {}
// export async function getSellPrices() {}
