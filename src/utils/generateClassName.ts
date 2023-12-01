export const generateClassName = (...rest: Array<string | string[] | undefined | false>) =>
  rest
    .filter((i) => i !== undefined || i !== false)
    .map((item) => (Array.isArray(item) ? item.join(" ") : item))
    .join(" ");
