import FirstImageDisplay from './FirstImageDisplay';
import SecondImageDispay from './SecondImageDispay';
const ImageDisplay = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <FirstImageDisplay />
        <SecondImageDispay />
      </div>
    </div>
  );
};

export default ImageDisplay;
