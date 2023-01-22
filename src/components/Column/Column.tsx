import {IData} from '@src/types/types';
import React, {FC} from 'react';
import style from './Column.module.scss';

const Column: FC<IData<number>> = ({
  title,
  id,
  rubCake,
  usdCake,
  eurCake,
  rubUsd,
  rubEUR,
  eurUSD,
}) => {
  return (
    <ul className={style.table_list}>
      <li className={style.table_list_item}>{title[id]}</li>
      <li
        className={
          rubCake[id] === Math.min.apply(null, rubCake)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {rubCake[id]}
      </li>
      <li
        className={
          usdCake[id] === Math.min.apply(null, usdCake)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {usdCake[id]}
      </li>
      <li
        className={
          eurCake[id] === Math.min.apply(null, eurCake)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {eurCake[id]}
      </li>
      <li
        className={
          rubUsd[id] === Math.min.apply(null, rubUsd)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {rubUsd[id]}
      </li>
      <li
        className={
          rubEUR[id] === Math.min.apply(null, rubEUR)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {rubEUR[id]}
      </li>
      <li
        className={
          eurUSD[id] === Math.min.apply(null, eurUSD)
            ? `${style.table_list_item} ${style.table_list_item_active}`
            : style.table_list_item
        }>
        {eurUSD[id]}
      </li>
    </ul>
  );
};

export default Column;
