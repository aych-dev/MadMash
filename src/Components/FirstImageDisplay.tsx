import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';
import WinStreak from './WinStreak';

interface Props {
  firstCurrentImage: string;
  startProgram: boolean;
  firstCurrentId: string;
  firstSelectedImage: () => void;
  firstCurrentImageLabel: string;
}

const FirstImageDisplay = ({
  firstCurrentImage,
  startProgram,
  firstCurrentId,
  firstSelectedImage,
  firstCurrentImageLabel,
}: Props) => {
  if (startProgram) {
    return (
      <div key={firstCurrentId}>
        <img
          onClick={() => firstSelectedImage()}
          className='h-auto w-48 rounded cursor-pointer'
          src={firstCurrentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{firstCurrentImageLabel}</div>
        </div>
        <div className='flex items-center justify-center'>
          <WinStreak />
        </div>
      </div>
    );
  } else {
    return (
      <div key={firstCurrentId}>
        <img
          className='h-auto w-48 rounded '
          src={MadLadsLogoBlack}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>Mad Lads</div>
        </div>
      </div>
    );
  }
};

export default FirstImageDisplay;
