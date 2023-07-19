import useMintlist from '../Hooks/useMintlist';
import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';

const FirstImageDisplay = () => {
  const { listOfImages } = useMintlist();

  if (listOfImages.length < 1) return null;

  const firstImageElement = listOfImages.map((image, index) => {
    let randomNumber = 6;

    if (randomNumber !== index) return null;

    return (
      <>
        <div key={image.id}>
          <img
            className='h-auto w-48 rounded'
            src={MadLadsLogoBlack}
            alt='test'
          />
        </div>
        <div className='flex items-center justify-center'>
          <div>Mad Lads</div>
        </div>
      </>
    );
  });

  return <div>{firstImageElement}</div>;
};

export default FirstImageDisplay;
