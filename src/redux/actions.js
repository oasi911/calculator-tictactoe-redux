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

export const toggleHistory = () => {
  return {
    type: "history/toggleHistory",
  };
};
