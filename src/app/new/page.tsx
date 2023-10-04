import Link from 'next/link';
import React from 'react';
import prisma from '../../../prisma/client';
import { redirect } from 'next/navigation';

async function createTodo(data: FormData) {
  'use server';

  const title = data.get('title')?.valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title');
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect('/')

}

const NewPage = () => {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form action={createTodo} className='flex gap-2 flex-col'>
        <input
          type='text'
          name='title'
          className='border border-slate-400 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none'
        />
        <div className='flex gap-1 justify-end'>
          <Link
            href={'/'}
            className='border border-slate-400 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='border border-slate-400 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none'
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPage;
