import { z } from "zod";

export const formDataZodType = z.record(z.object({ marketUnit: z.string(), quantity: z.string() }));
export type formDataType = z.infer<typeof formDataZodType>;


export const formInputZodType = z.object({
  marketUnit: z.string(),
  //like 100 or 9,99
  quantity: z.string().regex(new RegExp('\\d(,\\d+)?', 'g')),
});
export type formInputType = z.infer<typeof formInputZodType>;


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
export type responseType = z.infer<typeof responseZodType>;

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
