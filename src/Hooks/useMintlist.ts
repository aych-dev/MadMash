import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export interface ImageArray {
  image: string;
  id: string;
  name: string;
}

export interface MintList {
  id: string;
  content: {
    files: [{ uri: string }];
    metadata: { name: string };
  };
}

const useMintlist = () => {
  const [nftData, setNftData] = useState<MintList[]>([]);
  const listOfImages: ImageArray[] = [];
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMintlist = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://cryptic-anchorage-73113-c632759ca232.herokuapp.com/madlads`
        );
        setIsLoading(false);
        setNftData(data);
      } catch (err) {
        console.error(err as AxiosError);
      }
    };
    getMintlist();
  }, []);

  nftData.forEach((data) => {
    listOfImages.push({
      image: data.content.files[0]?.uri,
      id: data.id,
      name: data.content.metadata.name,
    });
  });

  return { listOfImages, isLoading };
};

export default useMintlist;
