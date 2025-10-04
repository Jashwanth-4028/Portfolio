import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

const Loader = () => {
  return (
    <div role="status" aria-live="polite" className='flex flex-col items-center justify-center min-h-screen'>
      <OrbitProgress variant="split-disc" color="#097969" size="medium" text="" textColor="" />
      <h1 className='text-lg font-bold mt-4'>Loading…</h1>
    </div>
  );
};

export default Loader;
