const initialState = {
  input: "0",
  operation: "",
  result: "",
  secInput: "",
  isHistoryOpen: false,
  history: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "input/handleInput": {
      return {
        ...state,
        input:
          state.input === "0" ? action.payload : state.input + action.payload,
      };
    }
    case "operation/handleOperation": {
      return {
        ...state,
        operation: action.payload,
        secInput: state.input + " " + action.payload,
        result: state.input,
        input: "0",
      };
    }
    case "input/handleEqual": {
      return {
        ...state,
        input: action.payload,
        secInput: "",
      };
    }
    case "input/handleCe": {
      return {
        ...state,
        input: "0",
      };
    }
    case "input/handleC": {
      return {
        ...state,
        operation: "",
        input: "0",
        result: "",
        secInput: "",
      };
    }
    case "input/handleBackspace": {
      return {
        ...state,
        input: state.input.slice(0, -1),
      };
    }
    case "input/handleToggle": {
      return {
        ...state,
        input: state.input * -1,
      };
    }
    case "input/handleDot": {
      return {
        ...state,
        input: state.input + ".",
      };
    }
    case "history/toggleHistory": {
      return {
        ...state,
        isHistoryOpen: !state.isHistoryOpen,
      };
    }
    case "history/setHistory": {
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    case "history/clearHistory": {
      return {
        ...state,
        history: [],
      };
    }
    default:
      return state;
  }
};

// const initialState = {
//   history: getStoredHistory(),
//   winLine: [],
//   currentMove: 0,
//   gameHistory: [Array(9).fill(null)],
// };
