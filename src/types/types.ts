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
export enum Etitle {
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
  title?: string[];
  id: T;
}

enum EData {
  'http://localhost:3000/api/v1/first/poll',
  'http://localhost:3000/api/v1/second/poll',
  'http://localhost:3000/api/v1/third/poll',
}
export type TUrl = keyof typeof EData;
