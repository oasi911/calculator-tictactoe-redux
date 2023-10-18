import { createReducer } from "@reduxjs/toolkit";
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

export const calculatorReducer = createReducer(initialState, {
  [handleInput]: (state, action) => {
    return {
      ...state,
      input:
        state.input === "0" ? action.payload : state.input + action.payload,
    };
  },

  [handleOperation]: (state, action) => {
    return {
      ...state,
      operation: action.payload,
      secInput: state.input + " " + action.payload,
      result: state.input,
      input: "0",
    };
  },

  [handleEqual]: (state, action) => {
    return {
      ...state,
      input: action.payload,
      secInput: "",
    };
  },

  [handleCe]: (state, action) => {
    return {
      ...state,
      input: "0",
    };
  },

  [handleC]: (state, action) => {
    return {
      ...state,
      operation: "",
      input: "0",
      result: "",
      secInput: "",
    };
  },

  [handleBackspace]: (state, action) => {
    return {
      ...state,
      input: state.input.slice(0, -1),
    };
  },

  [handleToggle]: (state, action) => {
    return {
      ...state,
      input: state.input * -1,
    };
  },

  [handleDot]: (state, action) => {
    return {
      ...state,
      input: state.input + ".",
    };
  },

  [toggleHistory]: (state, action) => {
    return {
      ...state,
      isHistoryOpen: !state.isHistoryOpen,
    };
  },

  [setHistory]: (state, action) => {
    return {
      ...state,
      history: [...state.history, action.payload],
    };
  },

  [clearHistory]: (state, action) => {
    return {
      ...state,
      history: [],
    };
  },

  [loadHistory]: (state, action) => {
    return {
      ...state,
      history: action.payload,
    };
  },
});
