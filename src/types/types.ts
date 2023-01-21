export interface Irates {
  RUB: number;
  USD: number;
  EUR: number;
}
export interface IFetchData {
  rates: Irates;
  base: string;
  timestamp: string;
  date: Date;
}
export enum Ititle {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
}
export interface IData<T> {
  rubCake: number[];
  usdCake: number[];
  eurCake: number[];
  rubUsd: number[];
  rubEUR: number[];
  eurUSD: number[];
  title: string[];
  id: T;
}
