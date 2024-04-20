import { useContext } from 'react';

import CounterContextProvider from '../../store/counter-context';
import { ThemeContext } from '../../store/theme-context';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';

import classes from './Main.module.css';

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className={classes.main} data-theme={theme}>
            <Header />
            <CounterContextProvider>
                <Counter />
            </CounterContextProvider>
        </main>
    );
};

export default Main;
