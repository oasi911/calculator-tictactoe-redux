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
