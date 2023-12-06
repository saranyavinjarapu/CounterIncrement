"use client";

/* Core */
import { useRef } from "react";

/* Instruments */
import {
  useSelector,
  selectCount,
  useDispatch,
  incrementIfOddAsync,
} from "@/lib/redux";
import { increment, decrement, incrementByAmount } from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const customInput = useRef<HTMLInputElement>(null);

  //handle Counter Increment by User Input

  const handleCounterIncrement = () => {
    const customInputValue = Number(customInput!.current!.value);
    dispatch(incrementByAmount(customInputValue));
  };

  //handle Counter Increment by User Input when Existing counter is an odd value

  const handleCounterIncrementOddCount = () => {
    const customInputValue = Number(customInput!.current!.value);
    dispatch(incrementIfOddAsync(customInputValue));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button + " " + styles.decrement}
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
          type="number"
          ref={customInput}
          className={styles.textbox}
          aria-label="Set increment amount"
        />
        <button
          className={styles.button + " " + styles.amountButton}
          onClick={handleCounterIncrement}
        >
          Add Amount
        </button>
        <button
          className={styles.button + " " + styles.amountButton}
          onClick={handleCounterIncrementOddCount}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
