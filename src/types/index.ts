export type OptionalKeys<T extends object> = {
  [P in keyof T]: object extends Pick<T, P> ? P : never;
}[keyof T];

export type OptionalPropertyOf<T extends object> = Pick<T, OptionalKeys<T>>;

export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type AllOptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export type AllNonOptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? never : K;
}[keyof T];

export type Normalize<T> = { [K in AllOptionalKeys<T>]: T[K] | undefined } & {
  [K in AllNonOptionalKeys<T>]: T[K];
};
