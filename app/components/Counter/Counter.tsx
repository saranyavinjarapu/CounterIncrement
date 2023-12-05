"use client";

/* Core */
import { useRef } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";
import { increment, decrement, incrementByAmount } from "@/lib/redux";

import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const customInput = useRef<HTMLInputElement>(null);

  // Create a state named incrementAmount

  const handleCounterIncrement = () => {
    const customInputValue = Number(customInput!.current!.value);
    dispatch(incrementByAmount(customInputValue));
  };

  const handleCounterIncrementOddCount = () => {
    const customInputValue = Number(customInput!.current!.value);
    count % 2 === 1 && dispatch(incrementByAmount(customInputValue));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          ref={customInput}
          className={styles.textbox}
          aria-label="Set increment amount"
        />
        <button className={styles.button} onClick={handleCounterIncrement}>
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={handleCounterIncrementOddCount}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
