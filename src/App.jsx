import Main from './components/Main/Main';

import ThemeContextProvider from './store/theme-context';

function App() {
    return (
        <ThemeContextProvider>
            <Main />
        </ThemeContextProvider>
    );
}

export default App;
