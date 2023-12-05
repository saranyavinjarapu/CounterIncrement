"use client";

/* Core */
import { useState, useRef } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";
import { increment, decrement, incrementByAmount } from "@/lib/redux";

import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const customInput = useRef<HTMLInputElement>(null);

  // Create a state named incrementAmount

  function handleChange() {
    const customInputValue = customInput!.current!.value;
    dispatch(incrementByAmount(Number(customInputValue)));
  }

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
        <button className={styles.button} onClick={handleChange}>
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
