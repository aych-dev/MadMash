import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

interface MintList {
  id: string;
  content: { files: [{ uri: string }] };
}

const useMintlist = () => {
  const [nftData, setNftData] = useState<MintList[]>([]);
  console.log(nftData);

  useEffect(() => {
    const getMintlist = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000`);
        setNftData(data);
      } catch (err) {
        console.error(err as AxiosError);
      }
    };
    getMintlist();
  }, []);

  return { nftData };
};

export default useMintlist;
