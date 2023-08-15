import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';
import WinStreak from './WinStreak';

interface Props {
  firstCurrentImage: string;
  startProgram: boolean;
  firstCurrentId: string;
  onSelectedImage: (selectedImage: string) => void;
  firstCurrentImageLabel: string;
  firstImageStreak: number;
}

const FirstImageDisplay = ({
  firstCurrentImage,
  startProgram,
  firstCurrentId,
  onSelectedImage,
  firstCurrentImageLabel,
  firstImageStreak,
}: Props) => {
  if (startProgram) {
    return (
      <div key={firstCurrentId}>
        <img
          onClick={() => onSelectedImage(firstCurrentImage)}
          className='h-auto w-48 rounded cursor-pointer border-2 border-black hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out '
          src={firstCurrentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div className='font-bold font-sans-pro text-lg mt-1'>
            {firstCurrentImageLabel}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <WinStreak firstImageStreak={firstImageStreak} />
        </div>
      </div>
    );
  } else {
    return (
      <div key={firstCurrentId}>
        <img
          className='h-auto w-48 rounded-xl border-2 border-black '
          src={MadLadsLogoBlack}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <h2 className='font-bold font-sans-pro text-lg'> Mad Lads</h2>
        </div>
      </div>
    );
  }
};

export default FirstImageDisplay;
