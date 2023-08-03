import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';
import WinStreak from './WinStreak';

interface Props {
  secondCurrentImage: string;
  startProgram: boolean;
  secondCurrentId: string;
  onSelectedImage: (selectedImage: string) => void;
  secondImageLabel: string;
}

const SecondImageDisplay = ({
  secondCurrentImage,
  startProgram,
  secondCurrentId,
  onSelectedImage,
  secondImageLabel,
}: Props) => {
  if (startProgram) {
    return (
      <div key={secondCurrentId}>
        <img
          onClick={() => onSelectedImage(secondCurrentImage)}
          className='h-auto w-48 rounded cursor-pointer'
          src={secondCurrentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{secondImageLabel}</div>
        </div>
        <div className='flex items-center justify-center'>
          <WinStreak />
        </div>
      </div>
    );
  } else {
    return (
      <div key={secondCurrentId}>
        <img className='h-auto w-48 rounded ' src={MadLadsRedLogo} alt='test' />
        <div className='flex items-center justify-center'>
          <div>Mad Lads</div>
        </div>
      </div>
    );
  }
};

export default SecondImageDisplay;
