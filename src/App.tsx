import React, {FC} from 'react';
import style from './App.module.scss';
import Column from './components/Column/Column';

const App: FC = () => {
  return (
    <div className={style.table}>
      <ul className={style.table_list}>
        <li className={style.table_list_item}>pair name/market</li>
        <li className={style.table_list_item}>rub/cupcake</li>
        <li className={style.table_list_item}>usd/cupcake</li>
        <li className={style.table_list_item}>eur/cupcake</li>
        <li className={style.table_list_item}>rub/usd</li>
        <li className={style.table_list_item}>rub/eur</li>
        <li className={style.table_list_item}>eur/usd</li>
      </ul>
      <Column url='http://localhost:3000/api/v1/first/poll' title='first' />
      <Column url='' title='second' />
      <Column url='' title='third' />
    </div>
  );
};

export default App;
