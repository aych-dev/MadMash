import useMintlist from '../Hooks/useMintlist';

const SecondImageDispay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const secondImageElement = listOfImages.map((image, index) => {
    let number = 400;
    if (number !== index) return null;

    return (
      <div key={image.id}>
        <img className='h-auto w-48 rounded' src={image.image} alt='test' />
        <div className='flex items-center justify-center'>
          <div>{image.name}</div>
        </div>
      </div>
    );
  });

  return <div>{secondImageElement}</div>;
};

export default SecondImageDispay;
