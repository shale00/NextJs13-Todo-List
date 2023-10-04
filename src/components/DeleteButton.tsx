import React from 'react';

type DeleteButtonProps = {
    id: string;
    handleDelete: (id: string) => void;
  };

const DeleteButton = ({ id, handleDelete }: DeleteButtonProps) => {
  const handleDeleteClick = async () => {
    handleDelete(id);
  };

  return (
    <button onClick={handleDeleteClick} className='text-2xl mr-32'>
      🗑
    </button>
  );
};

export default DeleteButton;
