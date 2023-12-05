/* Core */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  customInputIncrement: 1,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decrement, incrementByAmount loginc here
    increment: (state): void => {
      state.value += state.customInputIncrement;
    },
    decrement: (state) => {
      state.value -= state.customInputIncrement;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  customInputIncrement: number;
  status: "idle" | "loading" | "failed";
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
