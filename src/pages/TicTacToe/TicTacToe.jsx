import css from "./TicTacToe.module.css";
import { Board } from "../../components/tictactoe/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../redux/actions";
import { setGameHistory } from "../../redux/actions";
import { currentMove, gameHistory } from "../../redux/selectors";

export function TicTacToe() {
  const dispatch = useDispatch();

  const currentMoveValue = useSelector(currentMove);
  const gameHistoryValue = useSelector(gameHistory);

  const xIsNext = currentMoveValue % 2 === 0;
  const currentSquares = gameHistoryValue[currentMoveValue];

  const handlePlay = (nextSquares) => {
    dispatch(setGameHistory(nextSquares));
  };

  const handleJumpTo = (move) => {
    dispatch(jumpTo(move));
  };

  const moves = gameHistoryValue.map((squares, move) => {
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
