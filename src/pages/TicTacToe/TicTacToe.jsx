import css from "./TicTacToe.module.css";
import { Board } from "../../components/tictactoe/Board/Board";
import { History } from "../../components/tictactoe/History/History";
import { useSelector, useDispatch } from "react-redux";
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

  return (
    <div className={css.game}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <History />
    </div>
  );
}
