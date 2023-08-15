import MainDisplayContainer from '../src/Components/MainDisplayContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className='background-image-container rounded-full bg-customRed flex items-center justify-center'>
        <MainDisplayContainer />
      </div>
    </div>
  );
}

export default App;
