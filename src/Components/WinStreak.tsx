interface Props {
  firstImageStreak?: number;
  secondImageStreak?: number;
}

const WinStreak = ({ firstImageStreak = 0, secondImageStreak = 0 }: Props) => {
  if (firstImageStreak) {
    return (
      <div className='font-bold font-sans-pro text-lg'>
        {' '}
        {firstImageStreak} ⭐️
      </div>
    );
  } else {
    return (
      <div className='font-bold font-sans-pro text-lg'>
        {' '}
        {secondImageStreak} ⭐️{' '}
      </div>
    );
  }
};

export default WinStreak;
