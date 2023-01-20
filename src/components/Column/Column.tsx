import React, {FC} from 'react';
import UseFetchData from '@src/fetchingData/UseFetchData';
import style from './Column.module.scss';

interface IColumnProps {
  url: string;
  title: string;
}

const Column: FC<IColumnProps> = ({url, title}) => {
  const fetchData = UseFetchData(url);
  const {data} = fetchData;

  return (
    <ul className={style.table_list}>
      <li className={style.table_list_item}>{title}</li>
      <li className={style.table_list_item}>
        {data?.rates.RUB.toFixed(2) ?? 0}
      </li>
      <li className={style.table_list_item}>
        {data?.rates.USD.toFixed(2) ?? 0}
      </li>
      <li className={style.table_list_item}>
        {data?.rates.EUR.toFixed(2) ?? 0}
      </li>
      <li className={style.table_list_item}>123</li>
      <li className={style.table_list_item}>123</li>
      <li className={style.table_list_item}>123</li>
    </ul>
  );
};

export default Column;
