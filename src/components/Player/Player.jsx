import React from 'react';
import './Player.css';

export const Player = ({ playerName, symbol }) => (
  <li>
    <span className='player'>
      <span className='player-name'>{playerName}</span>
      <span className='player-symbol'>{symbol}</span>
    </span>
    <button>Edit</button>
  </li>
);
