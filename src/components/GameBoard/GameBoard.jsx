import React from 'react';
import './GameBoard.css';

export const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={`${rowIndex}-row`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${colIndex}-col`}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
