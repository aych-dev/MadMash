import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';
interface Props {
  secondCurrentImage: string;
  startProgram: boolean;
  secondCurrentId: string;
  secondSelectedImage: () => void;
  secondImageLabel: string;
}

const SecondImageDisplay = ({
  secondCurrentImage,
  startProgram,
  secondCurrentId,
  secondSelectedImage,
  secondImageLabel,
}: Props) => {
  if (startProgram) {
    return (
      <div key={secondCurrentId}>
        <img
          onClick={() => secondSelectedImage()}
          className='h-auto w-48 rounded cursor-pointer'
          src={secondCurrentImage}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{secondImageLabel}</div>
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'></div>
      </div>
    );
  } else {
    return (
      <div key={secondCurrentId}>
        <img className='h-auto w-48 rounded ' src={MadLadsRedLogo} alt='test' />
        <div className='flex items-center justify-center'>
          <div>Mad Lads</div>
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'></div>
      </div>
    );
  }
};

export default SecondImageDisplay;
