/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from "@/lib/redux";
import { reduxStore } from "@/lib/redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ReduxState } from "@/lib/redux";
import { type Action } from "@reduxjs/toolkit";

//use thunkdispatch and getstate to change existing counter state and dipatch the base action

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (
    dispatch: ThunkDispatch<ReduxState, unknown, Action>,
    getState: typeof reduxStore.getState
  ) => {
    const { counter } = getState();

    //perform no action is the existing counter value is an even number
    if (counter.value % 2 === 0) {
      return;
    }

    dispatch(incrementByAmount(amount));
  };
