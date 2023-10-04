import Link from 'next/link';
import prisma from '../../prisma/client';
import TodoItem from '@/components/TodoItem';

async function toggleTodo(id: string, complete: boolean) {
  'use server';

  await prisma.todo.update({
    where: { id },
    data: { complete },
  });
}

async function handleDelete(id: string) {
  'use server';
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href={'/new'}
        >
          New
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex justify-between items-center mb-2'>
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} handleDelete={handleDelete}/>
          </div>
        ))}
      </ul>
    </main>
  );
}
