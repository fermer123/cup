import {useEffect, useState} from 'react';
import IFetchData from '@src/types/types';

const UseFetchData = (url: string) => {
  const [data, setData] = useState<IFetchData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.status === 502) {
        await fetchData();
      } else if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(response.statusText);
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
  }, [data, url]);

  return {
    data,
  };
};

export default UseFetchData;
