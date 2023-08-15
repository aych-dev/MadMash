import { CircularProgress } from '@mui/material';

const LoadingPrompt = () => {
  return (
    <>
      <div className='flex items-center justify-center col-span-2 mt-4 '>
        <CircularProgress />
      </div>
      <p className='flex items-center justify-center col-span-2 font-sans-pro font-semibold animate-pulse'>
        Loading MadLads
      </p>
    </>
  );
};

export default LoadingPrompt;
