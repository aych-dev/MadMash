import useMintlist from '../Hooks/useMintlist';

const ImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const testImage = listOfImages[333].image;
  const testImage2 = listOfImages[222].image;

  return (
    <div className='flex items-center justify-center '>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <img className='h-auto w-48 rounded' src={testImage} alt='test' />
        <img className='h-auto w-48 rounded' src={testImage2} alt='test' />
        <div className='flex items-center justify-center'>
          <div>Mad Lad 1</div>
        </div>
        <div className='flex items-center justify-center'>
          <div>Mad Lad 2</div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
