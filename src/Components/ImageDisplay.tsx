import useMintlist from '../Hooks/useMintlist';

const ImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) 
    return null
  
  const testImage = listOfImages[0].image
 

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-2'>
          <img src={testImage} alt='test' />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
