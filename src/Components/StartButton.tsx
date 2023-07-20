interface Props {
  onStartProgram: () => void;
  startProgram: boolean;
}

const StartButton = ({ onStartProgram, startProgram }: Props) => {
  return (
    <button
      onClick={() => onStartProgram()}
      className='border rounded bg-red-500 hover:bg-red-700 text-black font-bold w-40'
    >
      {startProgram ? "FOCKIN' Restart" : "FOCKIN' Start"}
    </button>
  );
};

export default StartButton;
