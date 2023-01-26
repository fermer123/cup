import {useEffect, useState} from 'react';
import {IFetchData, TUrl} from '@src/types/types';

const useFetchData = (url: TUrl) => {
  const [data, setData] = useState<IFetchData | null>(null);
  const fetchData = async () => {
    const response = await fetch(url);
    if (response.status === 502) {
      await fetchData();
    } else if (response.status !== 200) {
      setTimeout(() => {
        fetchData();
      }, 5000);
    } else {
      setData(await response.json());
      await fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
  };
};

export default useFetchData;
