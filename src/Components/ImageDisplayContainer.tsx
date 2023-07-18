import FirstImageDisplay from './FirstImageDisplay';
import SecondImageDispay from './SecondImageDispay';
import TitleDisplay from './TitleDisplay';

const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <div className='col-span-2'>
          <TitleDisplay />
        </div>
        <FirstImageDisplay />
        <SecondImageDispay />
      </div>
    </div>
  );
};

export default ImageDisplay;
