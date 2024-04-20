import { createContext, useReducer } from 'react';

export const CounterContext = createContext({
    counter: 0,
    increment: (number) => {},
    decrement: (number) => {},
    reset: () => {},
});

function counterReducer(state, action) {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + action.payload,
        };
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - action.payload,
        };
    }

    if (action.type === 'RESET') {
        return {
            counter: 0,
        };
    }
}

export default function CounterContextProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

    function handleIncrement(value) {
        dispatch({
            type: 'INCREMENT',
            payload: value,
        });
    }

    function handleDecrement(value) {
        dispatch({
            type: 'DECREMENT',
            payload: value,
        });
    }

    function handleReset() {
        dispatch({
            type: 'RESET',
        });
    }

    const ctxValue = {
        counter: state.counter,
        increment: handleIncrement,
        decrement: handleDecrement,
        reset: handleReset,
    };

    return (
        <CounterContext.Provider value={ctxValue}>
            {children}
        </CounterContext.Provider>
    );
}
