import classes from './Counter.module.css';

const Counter = () => {
    return (
        <div className={classes.counter}>
            <div className={classes['counter-value']}>0</div>
            <div className={classes['btns-wrapper']}>
                <button>-10</button>
                <button>-5</button>
                <button>-1</button>
                <button>Reset</button>
                <button>+1</button>
                <button>+5</button>
                <button>+10</button>
            </div>
        </div>
    );
};

export default Counter;
