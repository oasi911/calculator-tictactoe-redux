export const setGameHistory = (nextSquares) => {
  return {
    type: "gameHistory/setHistory",
    payload: nextSquares,
  };
};

export const jumpTo = (move) => {
  return {
    type: "gameHistory/jumpTo",
    payload: move,
  };
};

export const setWinLine = (line) => {
  return {
    type: "winLine/setWinLine",
    payload: line,
  };
};
