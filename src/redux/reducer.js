const initialState = {
  input: "0",
  operation: "",
  result: "",
  secInput: "",
  isHistoryOpen: false,
  history: [],
  gameHistory: [Array(9).fill(null)],
  currentMove: 0,
  winLine: [],
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
    case "history/loadHistory": {
      return {
        ...state,
        history: action.payload,
      };
    }
    case "ticTacToe/setHistory": {
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
    case "ticTacToe/jumpTo": {
      return {
        ...state,
        currentMove: action.payload,
      };
    }
    case "ticTacToe/setWinLine": {
      return {
        ...state,
        winLine: action.payload,
      };
    }
    default:
      return state;
  }
};
