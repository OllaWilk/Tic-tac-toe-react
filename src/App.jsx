import React, { useState } from 'react';
import { deriveActivePlayer } from './components/utils/deriveActivePlayer';
import { Player } from './components/Player/Player';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Log } from './components/Log/Log';
import './styles/app.css';

export function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
