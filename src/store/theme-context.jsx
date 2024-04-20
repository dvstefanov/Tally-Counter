import { createContext, useReducer } from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    toggle: () => {},
});

function themeReducer(state, action) {
    return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
    };
}

export default function ThemeContextProvider({ children }) {
    const [themeState, dispatch] = useReducer(themeReducer, { theme: 'dark' });

    function handleToggle() {
        dispatch({ type: 'TOGGLE' });
    }

    const ctxValue = {
        theme: themeState.theme,
        toggle: handleToggle,
    };

    return (
        <ThemeContext.Provider value={ctxValue}>
            {children}
        </ThemeContext.Provider>
    );
}
