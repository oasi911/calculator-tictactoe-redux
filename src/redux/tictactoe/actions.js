import { createAction } from "@reduxjs/toolkit";

export const setGameHistory = createAction("gameHistory/setHistory");

export const jumpTo = createAction("gameHistory/jumpTo");

export const setWinLine = createAction("winLine/setWinLine");
