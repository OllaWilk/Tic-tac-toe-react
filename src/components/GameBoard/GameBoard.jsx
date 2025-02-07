import React from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={`${rowIndex}-row`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${colIndex}-col`}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
