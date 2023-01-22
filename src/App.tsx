/* eslint-disable react/jsx-props-no-spreading */

import React, {FC} from 'react';
import style from './App.module.scss';
import Column from './components/Column/Column';
import UseFetchData from './fetchingData/UseFetchData';
import {IData, Irates, Etitle} from './types/types';

const App: FC = () => {
  const ColumnFirst = UseFetchData('http://localhost:3000/api/v1/first/poll');
  const ColumnSecond = UseFetchData('http://localhost:3000/api/v1/second/poll');
  const ColumnThird = UseFetchData('http://localhost:3000/api/v1/third/poll');

  const data: IData<number[]> = {
    rubCake: [],
    usdCake: [],
    eurCake: [],
    rubUsd: [],
    rubEUR: [],
    eurUSD: [],
    id: [],
    title: [Etitle.First, Etitle.Second, Etitle.Third],
  };

  const maxValue = (...arg: Irates[]) => {
    if (arg[0] && arg[1]) {
      // eslint-disable-next-line array-callback-return
      arg.map((url: Irates, idx) => {
        data.id.push(idx);
        data.rubCake.push(Number(url.RUB.toFixed(2)));
        data.usdCake.push(Number(url.USD.toFixed(2)));
        data.eurCake.push(Number(url.EUR.toFixed(2)));
        data.rubUsd.push(Number((url.RUB / url.USD).toFixed(2)));
        data.rubEUR.push(Number((url.RUB / url.EUR).toFixed(2)));
        data.eurUSD.push(Number((url.EUR / url.USD).toFixed(2)));
      });
    }
    return data;
  };

  maxValue(
    ColumnFirst.data?.rates,
    ColumnThird.data?.rates,
    ColumnSecond.data?.rates,
  );

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
