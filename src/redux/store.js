import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { localStorageMiddleware } from "./calculator/middleware";
import { calculatorReducer } from "./calculator/reducer";
import { gameReducer } from "./tictactoe/reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  ticTacToe: gameReducer,
});

const enhancers = composeWithDevTools(applyMiddleware(localStorageMiddleware));

export const store = createStore(rootReducer, enhancers);
