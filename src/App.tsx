/* eslint-disable react/jsx-props-no-spreading */
import {FC, useCallback, useMemo, useState} from 'react';
import style from './App.module.scss';
import Column from './components/Column/Column';
import useFetchData from './fetchingData/useFetchData';
import {IData, Irates, Etitle} from './types/types';

const App: FC = () => {
  const columnFirst = useFetchData('http://localhost:3000/api/v1/first/poll');
  const columnSecond = useFetchData('http://localhost:3000/api/v1/second/poll');
  const columnThird = useFetchData('http://localhost:3000/api/v1/third/poll');
  const [data, setData] = useState<IData<number[]>>({
    rubCake: [],
    usdCake: [],
    eurCake: [],
    rubUsd: [],
    rubEUR: [],
    eurUSD: [],
    id: [],
    title: [Etitle.First, Etitle.Second, Etitle.Third],
  });

  const DataCallBack = useCallback((dataValue: IData<number[]>) => {
    setData(dataValue);
  }, []);

  const dataHandler = (...arg: Irates[]) => {
    if (arg[0] && arg[1] && arg[2]) {
      // eslint-disable-next-line array-callback-return, no-return-assign
      arg.map((url: Irates, idx) => ({
        ...data,
        id: [(data.id[idx] = idx)],
        rubCake: [(data.rubCake[idx] = Number(url.RUB.toFixed(2)))],
        usdCake: [(data.usdCake[idx] = Number(url.USD.toFixed(2)))],
        eurCake: [(data.eurCake[idx] = Number(url.EUR.toFixed(2)))],
        rubUsd: [(data.rubUsd[idx] = Number((url.RUB / url.USD).toFixed(2)))],
        rubEUR: [(data.rubEUR[idx] = Number((url.RUB / url.EUR).toFixed(2)))],
        eurUSD: [(data.eurUSD[idx] = Number((url.EUR / url.USD).toFixed(2)))],
      }));
      DataCallBack(data);
    }
  };

  const memo = useMemo(() => {
    dataHandler(
      columnFirst.data?.rates,
      columnThird.data?.rates,
      columnSecond.data?.rates,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFirst.data?.rates,
    columnSecond.data?.rates,
    columnThird.data?.rates,
  ]);

  return (
    <div className={style.table}>
      <ul className={style.table_list}>
        <li className={style.table_list_item}>Pair name/market</li>
        <li className={style.table_list_item}>rub/cupcake</li>
        <li className={style.table_list_item}>usd/cupcake</li>
        <li className={style.table_list_item}>eur/cupcake</li>
        <li className={style.table_list_item}>rub/usd</li>
        <li className={style.table_list_item}>rub/eur</li>
        <li className={style.table_list_item}>eur/usd</li>
      </ul>
      {data.id.map((e) => (
        <Column {...data} key={e} id={e} />
      ))}
    </div>
  );
};

export default App;
