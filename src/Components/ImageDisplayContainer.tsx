import { useState } from 'react';
import FirstImageDisplay from './FirstImageDisplay';
import RatingTracker from './RatingTracker';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import TitleDisplay from './TitleDisplay';

const ImageDisplay = () => {
  const [startProgram, setStartProgram] = useState<boolean>(false);
  const [firstPreLoadedImage, setFirstPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  const [secondPreLoadedImage, setSecondPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9798.png'
  );
  const [secondPreLoadedLabel, setSecondPreLoadedLabel] =
    useState<string>('Mad Lads #9798');

  // Starts the program
  const onStartProgram = () => {
    setStartProgram((prevState) => !prevState);
    if (startProgram === false) {
      setFirstPreLoadedImage(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
      );
      setSecondPreLoadedImage(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9798.png'
      );
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-2 '>
        <div className='col-span-2'>
          <TitleDisplay />
        </div>
        <div className='flex items-center justify-center'>
          <FirstImageDisplay
            firstPreLoadedImage={firstPreLoadedImage}
            startProgram={startProgram}
          />
        </div>
        <div className='flex items-center justify-center'>
          <SecondImageDispay
            secondPreLoadedImage={secondPreLoadedImage}
            secondPreLoadedLabel={secondPreLoadedLabel}
            startProgram={startProgram}
          />
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
