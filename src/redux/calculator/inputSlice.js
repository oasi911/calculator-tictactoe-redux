import { createSlice } from "@reduxjs/toolkit";

const inputInitialState = {
  input: "0",
  operation: "",
  result: "",
  secInput: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState: inputInitialState,
  reducers: {
    handleInput: (state, action) => {
      state.input =
        state.input === "0" ? action.payload : state.input + action.payload;
    },
    handleOperation: (state, action) => {
      state.operation = action.payload;
      state.secInput = state.input + " " + action.payload;
      state.result = state.input;
      state.input = "0";
    },
    handleEqual: (state, action) => {
      state.input = action.payload;
      state.secInput = "";
    },
    handleCe: (state) => {
      state.input = "0";
    },
    handleC: (state) => {
      state.operation = "";
      state.input = "0";
      state.result = "";
      state.secInput = "";
    },
    handleBackspace: (state) => {
      state.input = state.input.slice(0, -1);
    },
    handleToggle: (state) => {
      state.input = (state.input * -1).toString();
    },
    handleDot: (state) => {
      state.input = state.input + ".";
    },
  },
});

export const {
  handleInput,
  handleOperation,
  handleEqual,
  handleCe,
  handleC,
  handleBackspace,
  handleToggle,
  handleDot,
} = inputSlice.actions;

export default inputSlice.reducer;
