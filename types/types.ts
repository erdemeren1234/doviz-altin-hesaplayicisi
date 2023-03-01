import { z } from "zod";

export type formDataType = {
  [key: string]: {
    marketUnit: string;
    quantity: string;
  };
};

export const responseZodType = z.record(z.object({}).or(z.string()));

export type responseType = {
  [key: string]:
    | string
    | {
        Alış: string;
        Tür: string;
        Satış: string;
        Değişim: string;
      };
};

export type $fetchErrorDataType = {
  message: string;
  stack: string;
  statusCode: number;
  statusMessage: string;
  url: string;
};
