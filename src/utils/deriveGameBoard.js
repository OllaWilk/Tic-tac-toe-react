import { INITIAL_GAME_BOARD } from '../data';

export const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD].map((array) => [...array]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};
