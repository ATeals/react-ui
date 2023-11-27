export const generateClassName = (...rest: Array<string | string[] | undefined>) =>
  rest
    .filter((i) => i !== undefined)
    .map((item) => (Array.isArray(item) ? item.join(" ") : item))
    .join(" ");
