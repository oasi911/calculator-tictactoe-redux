import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
import { localStorageMiddleware } from "./middleware";

const enhancers = composeWithDevTools(applyMiddleware(localStorageMiddleware));

export const store = createStore(rootReducer, enhancers);
