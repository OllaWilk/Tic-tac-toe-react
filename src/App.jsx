import React from 'react';
import { Player } from './components/Player/Player';
import './styles/app.css';

export function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player playerName='player 1' symbol='x' />
          <Player playerName='player 2' symbol='0' />
        </ol>
      </div>
      GameBoard
    </main>
  );
}
