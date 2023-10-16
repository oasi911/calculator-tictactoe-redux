import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./calculator/middleware";
import { calculatorReducer } from "./calculator/reducer";
import { gameReducer } from "./tictactoe/reducer";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    ticTacToe: gameReducer,
  },
  middleware: [localStorageMiddleware],
});
