import React, { useState } from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameboard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  };

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={`${rowIndex}-row`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${colIndex}-col`}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
