import css from "./TicTacToe.module.css";
import { Board } from "../../components/tictactoe/Board/Board";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../redux/actions";
import { currentMove } from "../../redux/selectors";

export function TicTacToe() {
  const dispatch = useDispatch();

  const currentMoveValue = useSelector(currentMove);
  // const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const xIsNext = currentMoveValue % 2 === 0;
  const currentSquares = history[currentMoveValue];

  function handlePlay(nextSquares) {
    const nextHistory = [
      ...history.slice(0, currentMoveValue + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    dispatch(jumpTo(nextHistory.length - 1));
    // setCurrentMove(nextHistory.length - 1);
  }

  const handleJumpTo = (move) => {
    dispatch(jumpTo(move));
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button type="button" onClick={() => handleJumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={css.game}>
      <div className={css.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={css.gameInfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
