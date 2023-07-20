import { useState } from 'react';
import FirstImageDisplay from './FirstImageDisplay';
import RatingTracker from './RatingTracker';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import TitleDisplay from './TitleDisplay';

const ImageDisplay = () => {
  const [startProgram, setStartProgram] = useState<boolean>(false);

  // Starts the program
  const onStartProgram = () => {
    setStartProgram((prevState) => !prevState);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-2 '>
        <div className='col-span-2'>
          <TitleDisplay />
        </div>
        <div className='flex items-center justify-center'>
          <FirstImageDisplay startProgram={startProgram} />
        </div>
        <div className='flex items-center justify-center'>
          <SecondImageDispay />
        </div>
        <div className='flex items-center justify-center'>
          <RatingTracker />
        </div>
        <div className='flex items-center justify-center'>
          <RatingTracker />
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'>
          <StartButton
            onStartProgram={onStartProgram}
            startProgram={startProgram}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
