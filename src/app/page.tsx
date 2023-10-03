import Link from 'next/link';
import prisma from '../../prisma/client';
import TodoItem from '@/components/TodoItem';
import Header from '@/components/Header';

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main>
     <Header />
      <ul className='pl-4'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </main>
  );
}
