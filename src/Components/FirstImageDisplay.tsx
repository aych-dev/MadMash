import useMintlist from '../Hooks/useMintlist';
import MadLadsLogo from '../Images/MadLads_Logo.png';

const FirstImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const firstImageElement = listOfImages.map((image, index) => {
    let randomNumber = 6;

    if (randomNumber !== index) return null;

    return (
      <div key={image.id}>
        <img className='h-auto w-48 rounded' src={MadLadsLogo} alt='test' />
        <div className='flex items-center justify-center'>
          <div>{image.name}</div>
        </div>
      </div>
    );
  });

  return <div>{firstImageElement}</div>;
};

export default FirstImageDisplay;
