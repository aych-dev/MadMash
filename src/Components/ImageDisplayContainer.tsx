import FirstImageDisplay from './FirstImageDisplay';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import { useState, useEffect } from 'react';
import useMintlist from '../Hooks/useMintlist';

const ImageDisplayContainer = () => {
  const { listOfImages } = useMintlist();

  const [startProgram, setStartProgram] = useState<boolean>(false);
  const [firstCurrentImage, setFirstCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
  );
  const [preLoadedImage, setPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9508.png'
  );
  const [secondCurrentImage, setSecondCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  const [preLoadedImageLabel, setPreLoadedImageLabel] =
    useState<string>('Mad Lad #9508');
  const [firstCurrentImageLabel, setFirstCurrentImageLabel] =
    useState<string>('Mad Lad #9108');
  const [secondImageLabel, setSecondImageLabel] =
    useState<string>('Mad Lad #9308');
  const [secondCurrentId, setSecondCurrentId] = useState<string>('abcdefg');
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [newNumber, setNewNumber] = useState<number>(0);
  const [firstCurrentId, setFirstCurrentId] = useState<string>('abcdefg');
  const [preLoadedId, setPreLoadedId] = useState<string>('112222');
  const [firstImageStreak, setFirstImageStreak] = useState<number>(0);
  const [secondImageStreak, setSecondImageStreak] = useState<number>(0);

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
      setFirstCurrentImage(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
      );
      setSecondCurrentImage(
        'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
      );
      setFirstCurrentImageLabel('Mad Lad #9108');
      setSecondImageLabel('Mad Lad #9308');
      setFirstImageStreak(0);
      setSecondImageStreak(0);
    }
  };

  const onSelectedImage = (selectedImage: string) => {
    if (selectedImage === firstCurrentImage) {
      setImageSelected(!imageSelected);
      setSecondCurrentImage(preLoadedImage);
      setSecondCurrentId(preLoadedId);
      setSecondImageLabel(preLoadedImageLabel);
      imageStreak(selectedImage);
      console.log(selectedImage);
    } else {
      setImageSelected(!imageSelected);
      setFirstCurrentImage(preLoadedImage);
      setFirstCurrentId(preLoadedId);
      setFirstCurrentImageLabel(preLoadedImageLabel);
      imageStreak(selectedImage);
      console.log(selectedImage);
    }
  };

  const imageStreak = (selectedImage: string) => {
    if (selectedImage === firstCurrentImage) {
      setFirstImageStreak(firstImageStreak + 1);
      setSecondImageStreak(0);
    } else {
      setSecondImageStreak(secondImageStreak + 1);
      setFirstImageStreak(0);
    }
  };

  return (
    <div className='grid grid-cols-2 gap-3'>
      <FirstImageDisplay
        onSelectedImage={onSelectedImage}
        firstCurrentId={firstCurrentId}
        firstCurrentImage={firstCurrentImage}
        startProgram={startProgram}
        firstCurrentImageLabel={firstCurrentImageLabel}
        firstImageStreak={firstImageStreak}
      />
      <SecondImageDispay
        onSelectedImage={onSelectedImage}
        secondCurrentId={secondCurrentId}
        secondImageLabel={secondImageLabel}
        startProgram={startProgram}
        secondCurrentImage={secondCurrentImage}
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
