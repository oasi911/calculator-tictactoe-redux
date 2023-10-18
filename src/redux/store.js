import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./calculator/middleware";
import inputSlice from "./calculator/inputSlice";
import historySlice from "./calculator/historySlice";
import gameHistorySlice from "./tictactoe/gameHistorySlice";

export const store = configureStore({
  reducer: {
    input: inputSlice,
    history: historySlice,
    gameHistory: gameHistorySlice,
  },
  middleware: [localStorageMiddleware],
});
