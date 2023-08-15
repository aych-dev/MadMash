import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Props {
  onStartProgram: () => void;
  startProgram: boolean;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
  },
});

const StartButton = ({ onStartProgram, startProgram }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => onStartProgram()}
        color='primary'
        variant='contained'
        size='large'
      >
        <div className='text-black font-sans-pro font-bold'>
          {startProgram ? "FOCKIN' Restart" : "FOCKIN' Start"}
        </div>
      </Button>
    </ThemeProvider>
  );
};

export default StartButton;
