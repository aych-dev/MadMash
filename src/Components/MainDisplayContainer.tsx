import { useState } from 'react';
import FirstImageDisplay from './FirstImageDisplay';
import RatingTracker from './RatingTracker';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import TitleDisplay from './TitleDisplay';
import ImageDisplayContainer from './ImageDisplayContainer';

const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-2 '>
        <div className='col-span-2'>
          <TitleDisplay />
          <ImageDisplayContainer />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;