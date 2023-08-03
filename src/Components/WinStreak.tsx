interface Props {
  firstImageStreak?: number;
  secondImageStreak?: number;
}

const WinStreak = ({ firstImageStreak = 0, secondImageStreak = 0 }: Props) => {
  console.log(secondImageStreak);
  if (firstImageStreak) {
    return <div> {firstImageStreak} ⭐️</div>;
  } else {
    return <div> {secondImageStreak} ⭐️ </div>;
  }
};

export default WinStreak;
