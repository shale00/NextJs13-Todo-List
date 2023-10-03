import React from 'react';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

const TodoItem = ({ id, title, complete }: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
      <input id={id} type='checkbox' className='cursor-pointer peer' />
      <label htmlFor={id} className='peer-checked:line-through'>
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
