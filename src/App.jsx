import React from 'react';
import { Player } from './components/Player/Player';
import { GameBoard } from './components/GameBoard/GameBoard';
import './styles/app.css';

export function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='player 1' symbol='x' />
          <Player initialName='player 2' symbol='0' />
        </ol>
      </div>
      <GameBoard />
    </main>
  );
}
