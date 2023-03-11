import { Fragment, ReactElement } from 'react';

export type ForMapper<T, U> = (item: T, index: number, array: readonly T[]) => U;
export type ForFilter<T> = (item: T, index: number, array: readonly T[]) => boolean;

export interface ForProps<T, U> {
  each: readonly T[];
  filter?: ForFilter<T>;
  children: ForMapper<T, U>;
}

export function For<T, U extends ReactElement>({ each, filter, children }: ForProps<T, U>) {
  const render = filter 
    ? each.filter(filter).map(children) 
    : each.map(children);

  return <Fragment>{render}</Fragment>;
};
