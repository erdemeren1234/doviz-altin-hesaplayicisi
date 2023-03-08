type formatTimeOptions = {
  locale?: string;
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";
  timeZone?: string;
};

export const useFormatTime = (
  time: string | Date,
  {
    locale = "tr-TR",
    dateStyle = "medium",
    timeStyle = "medium",
    timeZone = "Europe/Istanbul",
  }: formatTimeOptions
) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle,
    timeStyle: timeStyle,
    timeZone: timeZone,
  }).format(new Date(time));
};
