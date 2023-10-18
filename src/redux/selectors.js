//Calculator

export const input = (state) => state.input.input;

export const operation = (state) => state.input.operation;

export const result = (state) => state.input.result;

export const secInput = (state) => state.input.secInput;

export const isHistoryOpen = (state) => state.history.isHistoryOpen;

export const history = (state) => state.history.history;

//Tic Tac Toe

export const currentMove = (state) => state.gameHistory.currentMove;

export const gameHistory = (state) => state.gameHistory.gameHistory;

export const winLine = (state) => state.gameHistory.winLine;
