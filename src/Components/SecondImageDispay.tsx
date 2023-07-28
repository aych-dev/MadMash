import MadLadsRedLogo from '../Images/MadLads_RedLogo.png';
interface Props {
  currentImageTest: string;
  startProgram: boolean;
  currentIdTest: string;
  selectedImageTest: () => void;
  currentImageLabelTest: string;
}

const SecondImageDisplay = ({
  currentImageTest,
  startProgram,
  currentIdTest,
  selectedImageTest,
  currentImageLabelTest,
}: Props) => {
  if (startProgram) {
    return (
      <div key={currentIdTest}>
        <img
          onClick={() => selectedImageTest()}
          className='h-auto w-48 rounded cursor-pointer'
          src={currentImageTest}
          alt='test'
        />
        <div className='flex items-center justify-center'>
          <div>{currentImageLabelTest}</div>
        </div>
        <div className='flex items-center justify-center col-span-2 mt-10'></div>
      </div>
    );
  } else {
    return (
      <div key={currentIdTest}>
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
