import FirstImageDisplay from './FirstImageDisplay';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import { useState, useEffect } from 'react';
import useMintlist from '../Hooks/useMintlist';

const ImageDisplayContainer = () => {
  const { listOfImages } = useMintlist();
  const [startProgram, setStartProgram] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
  );
  const [preLoadedImage, setPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9508.png'
  );
  const [preLoadedImageLabel, setPreLoadedImageLabel] =
    useState<string>('Mad Lad #9508');
  const [currentImageLabel, setCurrentImageLabel] =
    useState<string>('Mad Lad #9108');
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [newNumber, setNewNumber] = useState<number>(0);
  const [currentId, setCurrentId] = useState<string>('abcdefg');
  const [preLoadedId, setPreLoadedId] = useState<string>('112222');

  const [currentImageTest, setCurrentImageTest] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  const [currentImageLabelTest, setCurrentImageLabelTest] =
    useState<string>('Mad Lad #9308');
  const [currentIdTest, setCurrentIdTest] = useState<string>('abcdefg');

  useEffect(() => {
    const imagePreLoader = () => {
      setNewNumber(Math.floor(Math.random() * 1000) + 1);
      listOfImages.map((image, index) => {
        if (newNumber === index) {
          setPreLoadedImage(image.image);
          setPreLoadedImageLabel(image.name);
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
      setCurrentImageTest(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
      );
      setCurrentImageLabel('Mad Lad #9108');
      setCurrentImageLabelTest('Mad Lad #9308');
    }
  };

  const selectedImage = () => {
    setImageSelected(!imageSelected);
    setCurrentImage(preLoadedImage);
    setCurrentId(preLoadedId);
    setCurrentImageLabel(preLoadedImageLabel);
  };

  const selectedImageTest = () => {
    setImageSelected(!imageSelected);
    setCurrentImageTest(preLoadedImage);
    setCurrentIdTest(preLoadedId);
    setCurrentImageLabelTest(preLoadedImageLabel);
  };

  return (
    <div className='grid grid-cols-2 gap-3'>
      <FirstImageDisplay
        selectedImage={selectedImage}
        currentId={currentId}
        currentImage={currentImage}
        startProgram={startProgram}
        currentImageLabel={currentImageLabel}
      />
      <SecondImageDispay
        selectedImageTest={selectedImageTest}
        currentIdTest={currentIdTest}
        currentImageLabelTest={currentImageLabelTest}
        startProgram={startProgram}
        currentImageTest={currentImageTest}
      />
      <div className='col-span-2 flex items-center justify-center'>
        <StartButton
          onStartProgram={onStartProgram}
          startProgram={startProgram}
        />
      </div>
    </div>
  );
};

export default ImageDisplayContainer;
