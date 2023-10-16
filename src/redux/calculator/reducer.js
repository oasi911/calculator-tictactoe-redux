import {
  handleInput,
  handleOperation,
  handleEqual,
  handleCe,
  handleC,
  handleBackspace,
  handleToggle,
  handleDot,
  toggleHistory,
  setHistory,
  clearHistory,
  loadHistory,
} from "./actions";

const initialState = {
  input: "0",
  operation: "",
  result: "",
  secInput: "",
  isHistoryOpen: false,
  history: [],
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case handleInput.type: {
      return {
        ...state,
        input:
          state.input === "0" ? action.payload : state.input + action.payload,
      };
    }
    case handleOperation.type: {
      return {
        ...state,
        operation: action.payload,
        secInput: state.input + " " + action.payload,
        result: state.input,
        input: "0",
      };
    }
    case handleEqual.type: {
      return {
        ...state,
        input: action.payload,
        secInput: "",
      };
    }
    case handleCe.type: {
      return {
        ...state,
        input: "0",
      };
    }
    case handleC.type: {
      return {
        ...state,
        operation: "",
        input: "0",
        result: "",
        secInput: "",
      };
    }
    case handleBackspace.type: {
      return {
        ...state,
        input: state.input.slice(0, -1),
      };
    }
    case handleToggle.type: {
      return {
        ...state,
        input: state.input * -1,
      };
    }
    case handleDot.type: {
      return {
        ...state,
        input: state.input + ".",
      };
    }
    case toggleHistory.type: {
      return {
        ...state,
        isHistoryOpen: !state.isHistoryOpen,
      };
    }
    case setHistory.type: {
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    case clearHistory.type: {
      return {
        ...state,
        history: [],
      };
    }
    case loadHistory.type: {
      return {
        ...state,
        history: action.payload,
      };
    }
    default:
      return state;
  }
};
