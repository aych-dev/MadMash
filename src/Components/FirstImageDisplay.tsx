import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';

interface Props {
  currentImage: string;
  startProgram: boolean;
  currentId: string;
  selectedImage: () => void;
  currentImageLabel: string;
}

const FirstImageDisplay = ({
  currentImage,
  startProgram,
  currentId,
  selectedImage,
  currentImageLabel,
}: Props) => {
  if (startProgram) {
    return (
      <div key={currentId}>
        <img
          onClick={() => selectedImage()}
          className='h-auto w-48 rounded cursor-pointer'
          src={currentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{currentImageLabel}</div>
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'></div>
      </div>
    );
  } else {
    return (
      <div key={currentId}>
        <img
          className='h-auto w-48 rounded '
          src={MadLadsLogoBlack}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>Mad Lads</div>
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'></div>
      </div>
    );
  }
};

export default FirstImageDisplay;
