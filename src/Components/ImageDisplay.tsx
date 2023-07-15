import useMintlist from '../Hooks/useMintlist';

const ImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const testImage = listOfImages[50].image;

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-2'>
          <img className='h-auto w-48' src={testImage} alt='test' />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
