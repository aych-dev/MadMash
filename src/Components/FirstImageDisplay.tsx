import { useEffect, useState } from 'react';
import useMintlist from '../Hooks/useMintlist';
import MadLadsLogoBlack from '../Images/MadLads_BlackLogo.png';

interface Props {
  startProgram: boolean;
  firstPreLoadedImage: string;
}

const FirstImageDisplay = ({ startProgram, firstPreLoadedImage }: Props) => {
  const { listOfImages } = useMintlist();
  const [preLoadedImage, setPreLoadedImage] =
    useState<string>(firstPreLoadedImage);
  const [preLoadedImageLabel, setPreLoadedImageLabel] =
    useState<string>('Mad Lads #9308');
  const [preLoadedId, setPreLoadedId] = useState<string>('112222');
  const [newNumber, setNewNumber] = useState<number>(0);
  const [currentImageLabel, setCurrentImageLabel] =
    useState<string>(preLoadedImageLabel);
  const [currentImage, setCurrentImage] = useState<string>(
    'https://madlads.s3.us-west-2.amazonaws.com/images/9108.png'
  );
  const [currentId, setCurrentId] = useState<string>('abcdefg');
  const [imageSelected, setImageSelected] = useState<boolean>(false);

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

  const selectedImage = () => {
    if (imageSelected === false) {
      setImageSelected(!imageSelected);
    }
    setCurrentImage(preLoadedImage);
    setCurrentImageLabel(preLoadedImageLabel);
    setCurrentId(preLoadedId);
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
      </div>
    );
  } else {
    return (
      <div key={currentId}>
        <img
          className='h-auto w-48 rounded cursor-pointer'
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
