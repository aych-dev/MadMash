import RedMadLadLogo from '../Images/MadLads_RedLogo.png';

const NavBar = () => {
  return (
    <div className='flex justify-start  border border-black rounded-b bg-gradient-to-r to-customRed from-black'>
      <img src={RedMadLadLogo} alt='Mad Lads' className='h-20 ml-2' />
    </div>
  );
};

export default NavBar;
