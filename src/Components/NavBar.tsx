import RedMadLadLogo from '../Images/MadLads_RedLogo.png';
import { Breadcrumbs, Link } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';

const NavBar = () => {
  return (
    <>
      <div className='flex items-center justify-between border border-black rounded-b bg-gradient-to-r to-customRed from-black'>
        <div>
          <img src={RedMadLadLogo} alt='Mad Lads' className='h-20 ml-2' />
        </div>
        <div className='mr-2 '>
          <Breadcrumbs>
            <Link
              underline='hover'
              color='text.primary'
              className='cursor-pointer'
            >
              GitHub
              <GitHub className='ml-1' />
            </Link>
            <Link
              color='text.primary'
              underline='hover'
              className='cursor-pointer'
            >
              Twitter
              <Twitter className='ml-1' />
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default NavBar;
