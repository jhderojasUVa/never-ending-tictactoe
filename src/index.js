import React from "react";
import ReactDOM from "react-dom";

import { Board } from "./components/Board";
import "./index.css";

const Game = () => {
  return (
    <div className='content'>
      <h1>Never ending <span className='red'>Tic</span> <span className='blue'>Tac</span> <span className='green'>Toe</span></h1>
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
      </div>
      <p className='instructions'>When all the rows are filled you can still playing. It will change the content from a row with the player turn!.</p>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
