import useMintlist from '../Hooks/useMintlist';

const FirstImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return 'noImage';

  const firstImageElement = listOfImages.map((image, index) => {
    let randomNumber = 6;

    if (randomNumber !== index) return null;

    return (
      <div key={image.id}>
        <img className='h-auto w-48 rounded' src={image.image} alt='test' />
        <div className='flex items-center justify-center'>
          <div>{image.name}</div>
        </div>
      </div>
    );
  });

  return <div>{firstImageElement}</div>;
};

export default FirstImageDisplay;
