export const useTransformToTRY = (number: number) => {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(number);
};
