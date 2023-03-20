import { z } from "zod";

export const formDataZodType = z.record(z.object({ marketUnit: z.string(), quantity: z.string() }));
export const formInputZodType = z.object({
  marketUnit: z.string(),
  //like 100 or 9,99
  quantity: z.string()
});

export type formDataType = z.infer<typeof formDataZodType>;
export type formInputType = z.infer<typeof formInputZodType>;

export type marketSymbolsType = {
  TRY: string;
  USD: string;
  EUR: string;
  GBP: string;
};

// export const $fetchErrorDataZodType = z.object({
//   message: z.string(),
//   stack: z.string(),
//   statusCode: z.number(),
//   statusMessage: z.string(),
//   url: z.string(),
// });
// export type $fetchErrorDataType = z.infer<typeof $fetchErrorDataZodType>;
