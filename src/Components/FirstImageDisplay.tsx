import { useEffect, useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';
import StartButton from './StartButton';

const FirstImageDisplay = () => {
  const { listOfImages } = useMintlist();
  const [preLoadedImage, setPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  const [preLoadedId, setPreLoadedId] = useState<string>('112222');
  const [newNumber, setNewNumber] = useState<number>(0);
  const [currentImageLabel, setCurrentImageLabel] =
    useState<string>('Mad Lads #9108');
  const [currentImage, setCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
  );
  const [currentId, setCurrentId] = useState<string>('abcdefg');
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [startProgram, setStartProgram] = useState<boolean>(false);
  const [firstPreLoadedImage, setFirstPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  useEffect(() => {
    const imagePreLoader = () => {
      setNewNumber(Math.floor(Math.random() * 1000) + 1);
      listOfImages.map((image, index) => {
        if (newNumber === index) {
          setPreLoadedImage(image.image);
          // setPreLoadedImageLabel(image.name);
          setPreLoadedId(image.id);
        }
      });
    };
    imagePreLoader();
  }, [imageSelected]);

  const onStartProgram = () => {
    setStartProgram((prevState) => !prevState);
    if (startProgram) {
      setCurrentImage(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
      );
    }
    console.log('test');
  };

  const selectedImage = async () => {
    await setImageSelected(!imageSelected);
    await setCurrentImage(preLoadedImage);
    // await setCurrentImageLabel(preLoadedImageLabel);
    await setCurrentId(preLoadedId);
  };

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
        <div className='flex items-center justify-center col-span-2 mt-10'>
          <StartButton
            onStartProgram={onStartProgram}
            startProgram={startProgram}
          />
        </div>
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
        <div className='flex items-center justify-center col-span-2 mt-10'>
          <StartButton
            onStartProgram={onStartProgram}
            startProgram={startProgram}
          />
        </div>
      </div>
    );
  }
};

export default FirstImageDisplay;
