import classes from './Toggle.module.css';

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className={classes['toggle-container']}>
            <input
                type='checkbox'
                className={classes.toggle}
                id='check'
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor='check'>Light Mode</label>
        </div>
    );
};

export default Toggle;
