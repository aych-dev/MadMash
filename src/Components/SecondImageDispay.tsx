import { useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();
  const [newImage, setNewImage] = useState<string>(MadLadsRedLogo);
  const [newNumber, setNewNumber] = useState<number>(0);
  const [imageLabel, setImageLabel] = useState<string>('Mad Lads');

  if (listOfImages.length < 1) return null;

  const secondImageElement = listOfImages.map((image, index) => {
    const selectNewImage = () => {
      setNewNumber(Math.floor(Math.random() * 1000) + 1);
      if (newNumber === index) {
        setNewImage(image.image);
        setImageLabel(image.name);
      }
    };

    if (newNumber !== index) return null;

    return (
      <div key={image.id}>
        <img
          onClick={() => selectNewImage()}
          className='h-auto w-48 rounded cursor-pointer'
          src={newImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{imageLabel}</div>
        </div>
      </div>
    );
  });

  return <div>{secondImageElement}</div>;
};

export default SecondImageDispay;
