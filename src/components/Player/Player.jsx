import React, { useState } from 'react';
import './Player.css';

export const Player = ({ playerName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  let name = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    name = <input type='text' required />;
  }

  return (
    <li>
      <span className='player'>
        {name}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};
