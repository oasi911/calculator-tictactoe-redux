const initialState = {
  gameHistory: [Array(9).fill(null)],
  currentMove: 0,
  winLine: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "gameHistory/setHistory": {
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
    case "gameHistory/jumpTo": {
      return {
        ...state,
        currentMove: action.payload,
        winLine: [],
      };
    }
    case "winLine/setWinLine": {
      return {
        ...state,
        winLine: action.payload,
      };
    }
    default:
      return state;
  }
};
