import { useState, useEffect } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();
  const [preLoadedImage, setPreLoadedImage] = useState<string>('');
  const [preLoadedImageLabel, setPreLoadedImageLabel] = useState<string>('');
  const [preLoadedId, setPreLoadedId] = useState<string>('');
  const [newNumber, setNewNumber] = useState<number>(0);
  const [currentImageLabel, setCurrentImageLabel] =
    useState<string>('Mad Lads');
  const [currentImage, setCurrentImage] = useState<string>(MadLadsRedLogo);
  const [currentId, setCurrentId] = useState<string>('abcdefg');
  const [loading, setLoading] = useState<boolean>(false);

  if (listOfImages.length < 1) return null;

  useEffect(() => {
    const imagePreLoader = async () => {
      await setNewNumber(Math.floor(Math.random() * 1000) + 1);
      listOfImages.map((image, index) => {
        if (newNumber === index) {
          setPreLoadedImage(image.image);
          setPreLoadedImageLabel(image.name);
          setPreLoadedId(image.id);
        }
      });
    };
    imagePreLoader();
  }, [loading]);

  const selectedImage = () => {
    setCurrentImage(preLoadedImage);
    setCurrentImageLabel(preLoadedImageLabel);
    setCurrentId(preLoadedId);
    setLoading(!loading);
  };

  return (
    <div key={currentId}>
      <img
        onClick={() => selectedImage()}
        className='h-auto w-48 rounded cursor-pointer'
        src={currentImage}
        alt='test'
      />
      <div className='flex items-center justify-center'>
        <div>{currentImageLabel}</div>
      </div>
    </div>
  );
};

export default SecondImageDispay;
