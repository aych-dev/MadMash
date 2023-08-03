interface Props {

  firstImageStreak: number;
}

const WinStreak = ({  firstImageStreak }: Props) => {
  return <div> {firstImageStreak} ⭐️</div>;
};

export default WinStreak;
