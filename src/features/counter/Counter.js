import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div className={styles.row}>
                <button
                    type="button"
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => {
                        return dispatch(decrement());
                    }}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    type="button"
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => {
                        return dispatch(increment());
                    }}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => {
                        return setIncrementAmount(e.target.value);
                    }}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => {
                        return dispatch(incrementByAmount(incrementValue));
                    }}
                >
                    Add Amount
                </button>
                <button
                    type="button"
                    className={styles.asyncButton}
                    onClick={() => {
                        return dispatch(incrementAsync(incrementValue));
                    }}
                >
                    Add Async
                </button>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => {
                        return dispatch(incrementIfOdd(incrementValue));
                    }}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}
