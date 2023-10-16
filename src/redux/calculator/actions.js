import { createAction } from "@reduxjs/toolkit";

export const handleInput = createAction("input/handleInput");

export const handleOperation = createAction("operation/handleOperation");

export const handleEqual = createAction("input/handleEqual");

export const handleCe = createAction("input/handleCe");

export const handleC = createAction("input/handleC");

export const handleBackspace = createAction("input/handleBackspace");

export const handleToggle = createAction("input/handleToggle");

export const handleDot = createAction("input/handleDot");

export const toggleHistory = createAction("history/toggleHistory");

export const setHistory = createAction("history/setHistory");

export const clearHistory = createAction("history/clearHistory");

export const loadHistory = createAction("history/loadHistory", () => {
  return {
    payload: JSON.parse(localStorage.getItem("calculatorHistory")) || [],
  };
});
