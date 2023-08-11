import RedMadLadLogo from '../Images/MadLads_RedLogo.png';

const NavBar = () => {
  return (
    <div className='flex justify-start mt-2 border border-black rounded-t'>
      <img src={RedMadLadLogo} alt='Mad Lads' className='h-20 ml-2' />
    </div>
  );
};

export default NavBar;
