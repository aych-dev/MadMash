import useMintlist from './Hooks/useMintlist';

interface ImageArray {
  image: string;
  id: string;
}

function App() {
  const { nftData } = useMintlist();
  const imagesArray: ImageArray[] = [];

  nftData.forEach((data) => {
    imagesArray.push({ image: data.content.files[0].uri, id: data.id });
  });

  return (
    <>
      <div>test</div>
    </>
  );
}

export default App;
