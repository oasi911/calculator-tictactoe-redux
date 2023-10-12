import css from "./History.module.css";
import { useSelector, useDispatch } from "react-redux";
import { jumpTo } from "../../../redux/actions";
import { gameHistory } from "../../../redux/selectors";

export function History() {
  const dispatch = useDispatch();

  const gameHistoryValue = useSelector(gameHistory);

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
      <li className={css.item} key={move}>
        <button type="button" onClick={() => handleJumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={css.gameInfo}>
      <ol>{moves}</ol>
    </div>
  );
}
