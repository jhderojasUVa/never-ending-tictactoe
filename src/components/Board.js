import React, { useState } from "react";
import { Square } from "./Square";

export const Board = (props) => {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [currentUser, setCurrentUser] = useState("X");

  const winner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // return the winner
        return squares[a];
      }
    }

    return null;
  };

  const squaresFilled = (squares) => {
    let filled = false;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] !== null) {
        filled = true;
      } else {
        filled = false;
      }
    }

    return filled;
  };

  const changeUser = () => {
    if (currentUser === 'X') {
      setCurrentUser('O');
    } else {
      setCurrentUser('X');
    }
  };

  const handleClick = (i) => {
    const square = squares.slice();

    if (winner(squares) || (square[i] !== null && !squaresFilled(squares))) {
      return;
    }

    square[i] = currentUser;

    setSquares(square);
    changeUser();
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      user={currentUser}
      onClick={() => handleClick(i)}
    />
  );
  
  const restart = () => {
    window.location.reload();
  }

  let status, isWinner;

  if (winner(squares)) {
    isWinner = `Winner: ${winner(squares)}`;
  } else {
    status = `Next player: ${currentUser}`;
  }

  return (
    <div>
      <div className='winner' onClick={restart}> {isWinner} </div>
      <div className='status'> {status} </div>
      <div className='board-row'>
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </div>
  );
};
