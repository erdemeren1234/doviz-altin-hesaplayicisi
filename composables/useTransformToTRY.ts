export const useTransformToTRY = (value: number | string) => {
  if (typeof value === "string") {
    return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(parseFloat(value));
  }
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(value);
};
