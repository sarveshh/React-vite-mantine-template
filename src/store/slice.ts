import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./appState";

const initialState = {
  count: 0,
  mode: "dark",
};

const defaultSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = defaultSlice.actions;
export const selectCounter = (state: AppState) => state.default.count;
export default defaultSlice.reducer;
