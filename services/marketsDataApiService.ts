export async function fetchAllData(): Promise<object | string> {
  const data = await $fetch("/data").catch((error) => error);
  return data;
}

export async function fetchParticularData(
  param: string | string[],
  ...infinityStringParams: string[]
): Promise<object | string> {
  const data = await $fetch("/data").catch(() => "An error occurred.");
  return data;
}
