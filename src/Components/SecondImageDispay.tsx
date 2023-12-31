import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';
import WinStreak from './WinStreak';

interface Props {
  secondCurrentImage: string;
  startProgram: boolean;
  secondCurrentId: string;
  onSelectedImage: (selectedImage: string) => void;
  secondImageLabel: string;
  secondImageStreak: number;
}

const SecondImageDisplay = ({
  secondCurrentImage,
  startProgram,
  secondCurrentId,
  onSelectedImage,
  secondImageLabel,
  secondImageStreak,
}: Props) => {
  if (startProgram) {
    return (
      <div key={secondCurrentId}>
        <img
          onClick={() => onSelectedImage(secondCurrentImage)}
          className='h-auto w-48 rounded cursor-pointer border-2 border-red-500 hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out '
          src={secondCurrentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div className='mt-1 font-bold font-sans-pro text-lg'>
            {secondImageLabel}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <WinStreak secondImageStreak={secondImageStreak} />
        </div>
      </div>
    );
  } else {
    return (
      <div key={secondCurrentId}>
        <img
          className='h-auto w-48 rounded-xl border-2 border-red-500'
          src={MadLadsRedLogo}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div className='font-bold font-sans-pro text-lg'>Mad Lads</div>
        </div>
      </div>
    );
  }
};

export default SecondImageDisplay;
