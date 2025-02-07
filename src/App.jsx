import React, { useState } from 'react';
import { Player } from './components/Player/Player';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Log } from './components/Log/Log';
import './styles/app.css';

export function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X')); //change player
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}
