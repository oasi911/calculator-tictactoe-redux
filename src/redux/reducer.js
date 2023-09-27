const initialState = {
  isHistoryOpen: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "history/toggleHistory": {
      return {
        ...state,
        isHistoryOpen: !state.isHistoryOpen,
      };
    }
    default:
      return state;
  }
};


// const initialState = {
  //   input: "",
  //   operation: null,
  //   result: "",
  //   secInput: "",
  // isHistoryOpen: false,
  //   history: getStoredHistory(),
  //   winLine: [],
  //   currentMove: 0,
  //   gameHistory: [Array(9).fill(null)],
// };