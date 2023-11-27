export type OptionValue = string | number | readonly string[] | undefined;

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type TriggerProps = XOR<{ label: React.ReactNode }, { children: React.ReactNode }>;
