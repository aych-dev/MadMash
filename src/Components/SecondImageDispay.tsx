import { useState, useEffect } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();
  const [preLoadedImage, setPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9008.png'
  );
  const [preLoadedImageLabel, setPreLoadedImageLabel] =
    useState<string>('Mad Lads #9008');
  const [preLoadedId, setPreLoadedId] = useState<string>('123456');
  const [newNumber, setNewNumber] = useState<number>(0);
  const [currentImageLabel, setCurrentImageLabel] =
    useState<string>('Mad Lads');
  const [currentImage, setCurrentImage] = useState<string>(MadLadsRedLogo);
  const [currentId, setCurrentId] = useState<string>('abcdefg');
  const [imageSelected, setImageSelected] = useState<boolean>(false);

  useEffect(() => {
    const imagePreLoader = () => {
      setNewNumber(Math.floor(Math.random() * 1000) + 1);
      listOfImages.map((image, index) => {
        if (newNumber === index) {
          setPreLoadedImage(image.image);
          setPreLoadedImageLabel(image.name);
          setPreLoadedId(image.id);
        }
      });
    };
    imagePreLoader();
  }, [imageSelected]);

  const selectedImage = () => {
    setCurrentImage(preLoadedImage);
    setCurrentImageLabel(preLoadedImageLabel);
    setCurrentId(preLoadedId);
    setImageSelected(!imageSelected);
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
