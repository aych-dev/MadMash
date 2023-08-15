import { CircularProgress } from '@mui/material';

const LoadingPrompt = () => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className='flex items-center justify-center col-span-2 mt-4 '>
        <CircularProgress />
      </div>
      <p className='flex items-center justify-center col-span-2 font-sans-pro'>
        Loading MadLads
      </p>
    </div>
  );
};

export default LoadingPrompt;
