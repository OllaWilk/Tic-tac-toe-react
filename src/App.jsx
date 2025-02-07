import React, { useState } from 'react';
import { winCheck } from './utils/winCheck';
import { deriveActivePlayer } from './utils/deriveActivePlayer';
import { Player } from './components/Player/Player';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Log } from './components/Log/Log';
import './styles/app.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const winner = winCheck(gameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]; // add player move to history

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='player 1'
            symbol='X'
            isActive={currentPlayer === 'X'}
          />
          <Player
            initialName='player 2'
            symbol='O'
            isActive={currentPlayer === 'O'}
          />
        </ol>
        {winner && <p>You won, {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
