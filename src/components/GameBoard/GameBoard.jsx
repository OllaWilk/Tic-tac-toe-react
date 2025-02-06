import React from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  return (
    <ol id='game-board'>
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li>
                <button key={colIndex}>{playerSymbol}</button>
              </li>
            ))}{' '}
          </ol>
        </li>
      ))}
    </ol>
  );
};
