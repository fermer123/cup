interface Irates {
  RUB: number;
  USD: number;
  EUR: number;
}
export default interface IFetchData {
  rates: Irates;
  base: string;
  timestamp: string;
  date: Date;
}
