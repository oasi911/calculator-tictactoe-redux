import { createSlice } from "@reduxjs/toolkit";

const gameHistoryInitialState = {
  gameHistory: [Array(9).fill(null)],
  currentMove: 0,
  winLine: [],
};

const gameHistorySlice = createSlice({
  name: "gameHistory",
  initialState: gameHistoryInitialState,
  reducers: {
    setGameHistory: (state, action) => {
      const nextHistory = [
        ...state.gameHistory.slice(0, state.currentMove + 1),
        action.payload,
      ];
      state.gameHistory = nextHistory;
      state.currentMove = nextHistory.length - 1;
    },
    jumpTo: (state, action) => {
      state.currentMove = action.payload;
      state.winLine = [];
    },
    setWinLine: (state, action) => {
      state.winLine = action.payload;
    },
  },
});

export const { setGameHistory, jumpTo, setWinLine } = gameHistorySlice.actions;

export default gameHistorySlice.reducer;
