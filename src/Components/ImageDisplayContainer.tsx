import FirstImageDisplay from './FirstImageDisplay';
import SecondImageDispay from './SecondImageDispay';
import StartButton from './StartButton';
import { useState, useEffect } from 'react';
import useMintlist from '../Hooks/useMintlist';
import { CircularProgress } from '@mui/material';

const ImageDisplayContainer = () => {
  const { listOfImages, isLoading } = useMintlist();

  const [startProgram, setStartProgram] = useState<boolean>(false);
  const [firstCurrentImage, setFirstCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
  );

  const [preLoadedImage, setPreLoadedImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/100.png'
  );
  const [secondCurrentImage, setSecondCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9308.png'
  );
  const [preLoadedImageLabel, setPreLoadedImageLabel] =
    useState<string>('Mad Lad #100');
  const [firstCurrentImageLabel, setFirstCurrentImageLabel] =
    useState<string>('Mad Lad #9108');
  const [secondImageLabel, setSecondImageLabel] =
    useState<string>('Mad Lad #9308');
  const [secondCurrentId, setSecondCurrentId] = useState<string>('abcdefg');
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [firstCurrentId, setFirstCurrentId] = useState<string>('abcdefg');
  const [preLoadedId, setPreLoadedId] = useState<string>('1');
  const [firstImageStreak, setFirstImageStreak] = useState<number>(0);
  const [secondImageStreak, setSecondImageStreak] = useState<number>(0);
  console.log(listOfImages);
  console.log(preLoadedImage);

  useEffect(() => {
    const imagePreLoader = () => {
      const newRandomNumber = Math.floor(Math.random() * 10000) + 1;
      listOfImages.map((image, index) => {
        if (newRandomNumber === index) {
          setPreLoadedImage(image.image);
          setPreLoadedImageLabel(image.name);
          setPreLoadedId(image.id);
        }
      });
    };
    imagePreLoader();
  }, [firstCurrentImage, secondCurrentImage, startProgram]);

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
    } else if (selectedImage === secondCurrentImage) {
      setImageSelected(!imageSelected);
      setFirstCurrentImage(preLoadedImage);
      setFirstCurrentId(preLoadedId);
      setFirstCurrentImageLabel(preLoadedImageLabel);
      imageStreak(selectedImage);
    }
  };

  const imageStreak = (selectedImage: string) => {
    if (selectedImage === firstCurrentImage) {
      setFirstImageStreak(firstImageStreak + 1);
      setSecondImageStreak(0);
    } else if (selectedImage === secondCurrentImage) {
      setSecondImageStreak(secondImageStreak + 1);
      setFirstImageStreak(0);
    }
  };

  return (
    <>
      {isLoading && (
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex items-center justify-center col-span-2 '>
            <CircularProgress />
          </div>
        </div>
      )}
      {listOfImages.length > 0 && (
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
            secondImageStreak={secondImageStreak}
          />

          <div className='col-span-2 flex items-center justify-center'>
            <StartButton
              onStartProgram={onStartProgram}
              startProgram={startProgram}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDisplayContainer;
