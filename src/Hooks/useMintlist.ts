import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export interface ImageArray {
  image: string;
  id: string;
}

export interface MintList {
  id: string;
  content: { files: [{ uri: string }] };
}

const useMintlist = () => {
  const [nftData, setNftData] = useState<MintList[]>([]);
  const listOfImages: ImageArray[] = [];

  useEffect(() => {
    const getMintlist = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000`);
        await setNftData(data);
      } catch (err) {
        console.error(err as AxiosError);
      }
    };
    getMintlist();
  }, []);

  nftData.forEach((data) => {
    listOfImages.push({ image: data.content.files[0].uri, id: data.id });
  });

  return { listOfImages };
};

export default useMintlist;
