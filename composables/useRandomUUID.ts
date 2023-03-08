import nodeCrypto from "crypto";

export const useRandomUUID = (): string => {
  return typeof window.crypto !== "undefined" ? crypto.randomUUID() : nodeCrypto.randomUUID();
};
