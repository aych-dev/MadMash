interface Props {
  firstSelectedImage: () => void;
  firstImageStreak: number;
}

const WinStreak = ({ firstSelectedImage, firstImageStreak }: Props) => {
  return <div> {firstImageStreak} ⭐️</div>;
};

export default WinStreak;
