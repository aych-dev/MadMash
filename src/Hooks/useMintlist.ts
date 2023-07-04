import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

const useMintlist = () => {
  const [nftData, setNftData] = useState([]);

  console.log(nftData);

  useEffect(() => {
    const getMintlist = async () => {
      try {
        const { data } = await axios.post(`http://localhost:8000/`, {
          groupKey: 'collection',
          groupValue: 'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w',
          page: 1,
          limit: 1000,
        });
        setNftData(data.items);
      } catch (err) {
        console.error(err as AxiosError);
      }
    };
    getMintlist();
  }, []);

  return { nftData };
};

export default useMintlist;
