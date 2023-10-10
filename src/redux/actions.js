export const handleInput = (number) => {
  return {
    type: "input/handleInput",
    payload: number,
  };
};

export const handleOperation = (opSymbol) => {
  return {
    type: "operation/handleOperation",
    payload: opSymbol,
  };
};

export const handleEqual = (total) => {
  return {
    type: "input/handleEqual",
    payload: total,
  };
};

export const handleCe = () => {
  return {
    type: "input/handleCe",
  };
};

export const handleC = () => {
  return {
    type: "input/handleC",
  };
};

export const handleBackspace = () => {
  return {
    type: "input/handleBackspace",
  };
};

export const handleToggle = () => {
  return {
    type: "input/handleToggle",
  };
};

export const handleDot = () => {
  return {
    type: "input/handleDot",
  };
};

export const toggleHistory = () => {
  return {
    type: "history/toggleHistory",
  };
};

export const setHistory = (history) => {
  return {
    type: "history/setHistory",
    payload: history,
  };
};

export const clearHistory = () => {
  return {
    type: "history/clearHistory",
  };
};

export const loadHistory = () => {
  return {
    type: "history/loadHistory",
    payload: JSON.parse(localStorage.getItem("calculatorHistory")) || [],
  };
};

export const setGameHistory = (nextSquares) => {
  return {
    type: "ticTacToe/setHistory",
    payload: nextSquares,
  };
};

export const jumpTo = (move) => {
  return {
    type: "ticTacToe/jumpTo",
    payload: move,
  };
};


