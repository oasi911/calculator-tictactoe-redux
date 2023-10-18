import { createReducer } from "@reduxjs/toolkit";
import { setGameHistory, jumpTo, setWinLine } from "./actions";

const initialState = {
  gameHistory: [Array(9).fill(null)],
  currentMove: 0,
  winLine: [],
};

export const gameReducer = createReducer(initialState, {
  [setGameHistory]: (state, action) => {
    const nextHistory = [
      ...state.gameHistory.slice(0, state.currentMove + 1),
      action.payload,
    ];
    return {
      ...state,
      gameHistory: nextHistory,
      currentMove: nextHistory.length - 1,
    };
  },

  [jumpTo]: (state, action) => {
    return {
      ...state,
      currentMove: action.payload,
      winLine: [],
    };
  },

  [setWinLine]: (state, action) => {
    return {
      ...state,
      winLine: action.payload,
    };
  },
});
