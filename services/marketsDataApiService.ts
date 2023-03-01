import { $fetchErrorDataType, responseType, responseZodType } from "../types/types";

export const updateDateKey: string = "Update_Date";

/**
 *
 * @param url
 * @returns {Promise} Returns all api data
 */
export async function fetchAllData(url: string): Promise<responseType | $fetchErrorDataType> {
  const dataOrError = await $fetch<responseType>(url).catch<$fetchErrorDataType>((error) => error.data);

  return dataOrError;
}

/**
 *
 * @param url
 * @param keys
 * @returns {Promise} Returns api data by given key or keys
 */
export async function fetchDataByKey(
  url: string,
  keys: string[]
): Promise<responseType | $fetchErrorDataType> {
  const dataOrError = await fetchAllData(url);

  if (responseZodType.safeParse(dataOrError).success) {
    const filtered: responseType = Object.fromEntries(
      [updateDateKey, ...keys].map((key) => [key, dataOrError[key]])
    );
    return filtered;
  }

  //returns error
  return dataOrError;
}

export async function getBuyPrices() {}
export async function getSellPrices() {}
