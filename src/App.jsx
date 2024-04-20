import { useState } from 'react';

import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

import './App.css';

function App() {
    const [isDark, setIsDark] = useState(true);

    const onToggle = () => {
        setIsDark(state => !state);
    }

    return (
        <div className='App' data-theme={isDark ? 'dark' : 'light'}>
            <Header isDark={isDark} onToggle={onToggle} />
            <Counter />;
        </div>
    );
}

export default App;
