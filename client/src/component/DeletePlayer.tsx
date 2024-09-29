import React from "react";

const DeletePlayer = ({ player, deletePlayer, onCancel }: any) => {
  const handleDelete = () => {
    deletePlayer(player.id);
  };

  return (
    <div>
      <div className="py-4">
        <h2>Delete Player</h2>
        <p>Are you sure you want to delete {player.name}?</p>
      </div>
      <div className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline">
        <button className='rounded-lg px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300' onClick={handleDelete}>Delete</button>
        <button className='rounded-lg px-4 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 duration-300' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeletePlayer;