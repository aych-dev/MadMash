import FirstImageDisplay from './FirstImageDisplay';
import RatingTracker from './RatingTracker';
import SecondImageDispay from './SecondImageDispay';
import TitleDisplay from './TitleDisplay';

const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-2 '>
        <div className='col-span-2'>
          <TitleDisplay />
        </div>
        <div className='flex items-center justify-center'>
          <FirstImageDisplay />
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
      </div>
    </div>
  );
};

export default ImageDisplay;
