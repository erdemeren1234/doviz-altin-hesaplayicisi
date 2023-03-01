import { z } from "zod";

export type formDataType = {
  [key: string]: {
    marketUnit: string;
    quantity: string;
  };
};

export const responseZodType = z.record(
  z
    .object({
      Alış: z.string(),
      Tür: z.string(),
      Satış: z.string(),
      Değişim: z.string(),
    })
    .or(z.string())
);

export type responseType = z.infer<typeof responseZodType>

// export type responseType = {
//   [key: string]:
//     | string
//     | {
//         Alış: string;
//         Tür: string;
//         Satış: string;
//         Değişim: string;
//       };
// };

export type $fetchErrorDataType = {
  message: string;
  stack: string;
  statusCode: number;
  statusMessage: string;
  url: string;
};
