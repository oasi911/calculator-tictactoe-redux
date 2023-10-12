import { Square } from "../Square/Square";
import css from "./Board.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setWinLine } from "../../../redux/actions";
import { winLine, gameHistory } from "../../../redux/selectors";

export function Board({ xIsNext, squares, onPlay }) {
  const dispatch = useDispatch();

  const winLineValue = useSelector(winLine);
  const gameHistoryValue = useSelector(gameHistory);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    const winnerInfo = calculateWinner(nextSquares);
    if (winnerInfo) {
      dispatch(setWinLine(winnerInfo.winLine));
    } else {
      dispatch(setWinLine([]));
    }

    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winSymbol: squares[a],
          winLine: [a, b, c],
        };
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  const historyNotNull = gameHistoryValue[gameHistoryValue.length - 1].every(
    (value) => value !== null
  );
  let status;

  if (winner) {
    status = "Winner: " + winner.winSymbol;
  } else if (winLineValue.length === 0 && historyNotNull) {
    status = "Try again";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className={css.gameMain}>
      <div className={css.status}>{status}</div>
      <div className={css.boardRow}>
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWinSquare={winLineValue.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWinSquare={winLineValue.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWinSquare={winLineValue.includes(2)}
        />
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWinSquare={winLineValue.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWinSquare={winLineValue.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWinSquare={winLineValue.includes(5)}
        />
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWinSquare={winLineValue.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWinSquare={winLineValue.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWinSquare={winLineValue.includes(8)}
        />
      </div>
    </div>
  );
}
