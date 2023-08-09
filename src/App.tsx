import MainDisplayContainer from '../src/Components/MainDisplayContainer';
import NavBar from './Components/NavBar';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <NavBar />
      <MainDisplayContainer />
    </Container>
  );
}

export default App;
