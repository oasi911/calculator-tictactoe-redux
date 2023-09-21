import css from './Square.module.css'

export function Square({ value, onSquareClick, isWinSquare }) {
  const styles = {
    backgroundColor: isWinSquare ? "green" : "white",
  };

  return (
    <button className={css.square} onClick={onSquareClick} style={styles}>
      {value}
    </button>
  );
}
