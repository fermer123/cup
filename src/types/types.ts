interface Irates {
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
