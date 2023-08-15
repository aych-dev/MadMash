import { Button } from '@mui/material';

interface Props {
  onStartProgram: () => void;
  startProgram: boolean;
}

const StartButton = ({ onStartProgram, startProgram }: Props) => {
  return (
    <Button
      onClick={() => onStartProgram()}
      color='error'
      variant='contained'
      size='large'
    >
      <div className='text-black font-sans-pro font-bold'>
        {startProgram ? "FOCKIN' Restart" : "FOCKIN' Start"}
      </div>
    </Button>
  );
};

export default StartButton;
