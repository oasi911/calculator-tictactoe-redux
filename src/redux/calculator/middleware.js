export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === "history/setHistory") {
    const currentState = store.getState();
    localStorage.setItem(
      "calculatorHistory",
      JSON.stringify(currentState.history.history)
    );
  }

  return result;
};
