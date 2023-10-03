import Link from 'next/link';
import React from 'react';

const NewPage = () => {
  return (
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>New</h1>
      <Link href={'/'}>Home</Link>
    </header>
  );
};

export default NewPage;
