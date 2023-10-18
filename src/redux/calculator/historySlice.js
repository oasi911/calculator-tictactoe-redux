import { createSlice } from "@reduxjs/toolkit";

const historyInitialState = {
  isHistoryOpen: false,
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,
  reducers: {
    toggleHistory: (state) => {
      state.isHistoryOpen = !state.isHistoryOpen;
    },
    setHistory: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
    loadHistory: {
      reducer: (state, action) => {
        state.history = action.payload;
      },
      prepare: () => {
        return {
          payload: JSON.parse(localStorage.getItem("calculatorHistory")) || [],
        };
      },
    },
  },
});

export const { toggleHistory, setHistory, clearHistory, loadHistory } =
  historySlice.actions;

export default historySlice.reducer;
