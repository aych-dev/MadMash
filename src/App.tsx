import useMintlist from './Hooks/useMintlist';

function App() {
  const { nftData } = useMintlist();

  return (
    <>
      <h1>Test</h1>
      <p>{nftData}</p>
    </>
  );
}

export default App;
