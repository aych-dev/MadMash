import TitleDisplay from './TitleDisplay';
import ImageDisplayContainer from './ImageDisplayContainer';

const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center mt-5 '>
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
