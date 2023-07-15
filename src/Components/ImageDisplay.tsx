import { useState } from 'react';

import useNftImage from '../Hooks/useNftImage';

const ImageDisplay = () => {
  const { listOfImages } = useNftImage();
  const [currentImage, setCurrentImage] = useState();

  console.log(listOfImages);

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-2'>
          <img src='' alt='test' />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
