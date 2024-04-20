import { useContext } from 'react';

import { ThemeContext } from '../../store/theme-context';

import classes from './Toggle.module.css';

const Toggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div className={classes['toggle-container']}>
            <input
                type='checkbox'
                className={classes.toggle}
                id='check'
                onChange={toggle}
                checked={theme === 'dark'}
            />
            <label htmlFor='check'>{theme} theme</label>
        </div>
    );
};

export default Toggle;
