import Toggle from '../Toggle/Toggle';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Tally Count</h1>
            <Toggle />
        </header>
    );
};

export default Header;
