import { useContext } from 'react';

import { CounterContext } from '../../store/counter-context';

import classes from './Counter.module.css';

const Counter = () => {
    const { counter, increment, decrement, reset } = useContext(CounterContext);

    return (
        <div className={classes.counter}>
            <div className={classes['counter-value']}>{counter}</div>
            <div className={classes['btns-wrapper']}>
                <button onClick={() => decrement(10)}>-10</button>
                <button onClick={() => decrement(5)}>-5</button>
                <button onClick={() => decrement(1)}>-1</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => increment(1)}>+1</button>
                <button onClick={() => increment(5)}>+5</button>
                <button onClick={() => increment(10)}>+10</button>
            </div>
        </div>
    );
};

export default Counter;
