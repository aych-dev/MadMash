import useMintlist from '../Hooks/useMintlist';

const ImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const testImage = listOfImages[50].image;

  return (
    <div>
      <div className='grid grid-cols-2'>
        <img className='h-auto w-48 rounded' src={testImage} alt='test' />
        <img className='h-auto w-48 rounded' src={testImage} alt='test' />
        <div>Mad Lad 1</div>
        <div>Mad Lad 2</div>
      </div>
    </div>
  );
};

export default ImageDisplay;
