import useMintlist from './useMintlist';

export interface ImageArray {
  image: string;
  id: string;
}

const useNftImage = () => {
  const { nftData } = useMintlist();
  const listOfImages: ImageArray[] = [];

  nftData.forEach((data) => {
    listOfImages.push({ image: data.content.files[0].uri, id: data.id });
  });

  return { listOfImages };
};

export default useNftImage;
