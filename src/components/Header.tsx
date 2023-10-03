import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex justify-between items-center mb-4'>
      <Link href={'/'} className='text-2xl'>Todos</Link>
      <Link
        className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        href={'/new'}
      >
        New
      </Link>
    </header>
  );
};

export default Header;
