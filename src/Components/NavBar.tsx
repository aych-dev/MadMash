import RedMadLadLogo from '../Images/MadLads_RedLogo.png';
import { Breadcrumbs, Link } from '@mui/material';

const NavBar = () => {
  return (
    <>
      <div className='flex items-center justify-between border border-black rounded-b bg-gradient-to-r to-customRed from-black'>
        <div>
          <img src={RedMadLadLogo} alt='Mad Lads' className='h-20 ml-2' />
        </div>
        <div className='mr-2'>
          <Breadcrumbs>
            <Link>one</Link>
            <Link>two</Link>
            <Link>three</Link>
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default NavBar;
