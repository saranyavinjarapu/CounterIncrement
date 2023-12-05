/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decrement, incrementByAmount loginc here
    increment: (state): void => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
