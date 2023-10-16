import { setGameHistory, jumpTo, setWinLine } from "./actions";

const initialState = {
  gameHistory: [Array(9).fill(null)],
  currentMove: 0,
  winLine: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case setGameHistory.type: {
      const nextHistory = [
        ...state.gameHistory.slice(0, state.currentMove + 1),
        action.payload,
      ];
      return {
        ...state,
        gameHistory: nextHistory,
        currentMove: nextHistory.length - 1,
      };
    }
    case jumpTo.type: {
      return {
        ...state,
        currentMove: action.payload,
        winLine: [],
      };
    }
    case setWinLine.type: {
      return {
        ...state,
        winLine: action.payload,
      };
    }
    default:
      return state;
  }
};
