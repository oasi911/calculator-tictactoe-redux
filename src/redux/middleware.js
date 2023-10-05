export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === "history/setHistory") {
    const currentState = store.getState();
    console.log("Saving history to localStorage:", currentState.history);
    localStorage.setItem(
      "calculatorHistory",
      JSON.stringify(currentState.history)
    );
  }

  return result;
};
