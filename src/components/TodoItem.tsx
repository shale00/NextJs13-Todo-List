'use client'
import React from 'react';
import DeleteButton from './DeleteButton';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean ) => void;
  handleDelete: (id: string ) => void
};

const TodoItem = ({ id, title, complete, toggleTodo, handleDelete }: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
      <input id={id} type='checkbox' className='cursor-pointer peer' 
      defaultChecked={complete}
      onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className='peer-checked:line-through'>
        {title}
      </label>
      <DeleteButton id={id} handleDelete={handleDelete}/>
    </li>
  );
};

export default TodoItem;
