import React, {FC, useEffect, useState} from 'react';
import style from './App.module.scss';

const App: FC = () => {
  const [firstFetchData, setFirstFetchData] = useState('');

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/v1/first/poll');
    console.log(response);
    if (response.status === 502) {
      await fetchData();
    } else if (response.status !== 200) {
      console.log(response.statusText);
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });
      await promise;
      await fetchData();
    } else {
      setFirstFetchData(await response.json());
      await fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>qwe</div>;
};

export default App;
