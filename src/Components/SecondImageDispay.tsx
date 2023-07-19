import { useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();
  const [newImage, setNewImage] = useState(MadLadsRedLogo);
  const [newNumber, setNewNumber] = useState(0);

  if (listOfImages.length < 1) return null;

  const secondImageElement = listOfImages.map((image, index) => {
    const selectNewImage = () => {
      setNewNumber(Math.floor(Math.random() * (1000 - 1 + 1) + 1));
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
          <div>Mad Lads</div>
        </div>
      </div>
    );
  });

  return <div>{secondImageElement}</div>;
};

export default SecondImageDispay;
