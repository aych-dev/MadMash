import { useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';

const FirstImageDisplay = () => {
  const { listOfImages } = useMintlist();
  const [newImage, setNewImage] = useState(MadLadsLogoBlack);
  const [newNumber, setNewNumber] = useState(0);
  const [imageLabel, setImageLabel] = useState('Mad Lads');

  if (listOfImages.length < 1) return null;

  const firstImageElement = listOfImages.map((image, index) => {
    const selectNewImage = () => {
      setNewNumber(Math.floor(Math.random() * (1000 - 1 + 1) + 1));
      if (newNumber === index) {
        setNewImage(image.image);
        setImageLabel(image.name);
      }
    };

    let number = newNumber;
    if (number !== index) return null;

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

  return <div>{firstImageElement}</div>;
};

export default FirstImageDisplay;
