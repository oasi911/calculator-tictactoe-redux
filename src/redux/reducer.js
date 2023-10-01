const initialState = {
  input: "",
  operation: "",
  result: "",
  secInput: "",
  isHistoryOpen: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "input/handleInput": {
      return {
        ...state,
        input: state.input + action.payload,
      };
    }
    case "operation/handleOperation": {
      return {
        ...state,
        operation: action.payload,
        secInput: state.input + " " + action.payload,
        result: state.input,
        input: "",
      };
    }
    case "input/handleEqual": {
      return {
        ...state,
        input: action.payload,
        secInput: "",
      };
    }
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
