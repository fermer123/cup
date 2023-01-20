import IFetchData from '@src/types/types';
import {useEffect, useState} from 'react';

const UseFetchData = (url: string) => {
  const [data, setData] = useState<IFetchData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.status === 502) {
        await fetchData();
      } else if (response.status !== 200) {
        const promise = new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, 5000);
        });
        await promise;
        await fetchData();
      } else {
        setData(await response.json());
        await fetchData();
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default UseFetchData;
