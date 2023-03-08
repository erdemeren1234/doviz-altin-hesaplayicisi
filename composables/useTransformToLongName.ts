import usePreferences from "@/storage/preferences";

const { longMarketNames } = usePreferences();

export const useTransformToLongName = (shortName: string): string => {
  return longMarketNames[shortName];
};
