import TitleDisplay from './TitleDisplay';
import ImageDisplayContainer from './ImageDisplayContainer';

const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='grid grid-cols-2 gap-2 bg-white bg-opacity-80 rounded-3xl  p-4'>
        <div className='col-span-2 '>
          <TitleDisplay />
          <ImageDisplayContainer />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
