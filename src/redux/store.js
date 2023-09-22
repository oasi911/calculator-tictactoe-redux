import { createStore } from "redux";

const getStoredHistory = () => {
  const storedHistory = localStorage.getItem("calculatorHistory");
  return storedHistory ? JSON.parse(storedHistory) : [];
};

const initialState = {
  input: "",
  operation: null,
  result: "",
  secInput: "",
  toggleHistory: false,
  history: getStoredHistory(),
  winLine: [],
  currentMove: 0,
  gameHistory: [Array(9).fill(null)],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
