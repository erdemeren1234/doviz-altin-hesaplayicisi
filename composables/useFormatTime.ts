export const useFormatTime = (
  time: string | Date,
  locale: string = "tr-TR",
  dateStyle: "full" | "long" | "medium" | "short" = "medium",
  timeStyle: "full" | "long" | "medium" | "short" = "medium",
  timeZone: string = "Europe/Istanbul"
) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle,
    timeStyle: timeStyle,
    timeZone: timeZone,
  }).format(new Date(time));
};
