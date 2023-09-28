export const handleInput = (number) => {
  return {
    type: "input/handleInput",
    payload: number,
  };
};

export const toggleHistory = () => {
  return {
    type: "history/toggleHistory",
  };
};
