import React from 'react';

import Toggle from '../Toggle/Toggle';

import classes from './Header.module.css';

const Header = ({isDark, onToggle}) => {
    return (
        <header className={classes.header}>
            <h1>Tally Count</h1>
            <Toggle isChecked={isDark} handleChange={onToggle} />
        </header>
    );
};

export default Header;
