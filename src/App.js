import React from 'react';
import Game from './Pages/Game';
import './CSS/App.css';

const App = () => {
  return (
    <div>
     <div class="App">
    <h1 class="game-title">Dress-Up Game</h1>
    </div>
      <Game />
    </div>
  );
};

export default App;