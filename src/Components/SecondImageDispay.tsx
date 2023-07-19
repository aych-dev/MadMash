import { useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();
  const [newImage, setNewImage] = useState(MadLadsRedLogo);

  if (listOfImages.length < 1) return null;

  const secondImageElement = listOfImages.map((image, index) => {
    let number = 400;
    if (number !== index) return null;

    return (
      <div key={image.id}>
        <img
          onClick={() => console.log('testing 2')}
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
