import { useContext } from 'react';

import { ThemeContext } from '../../store/theme-context';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';

import classes from './Main.module.css'

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={classes.main} data-theme={theme}>
            <Header />
            <Counter />
        </div>
    );
};

export default Main;
