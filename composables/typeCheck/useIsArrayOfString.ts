export default function (value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.every((item) => typeof item === "string");
  }

  return false;
}
