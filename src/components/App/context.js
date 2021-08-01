import React, { useState, useEffect, useContext } from 'react';
import Provider from '../shared/Provider/Provider';
import useThemeToggle from '../../hooks/useThemeToggle';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const { theme, toggleTheme } = useThemeToggle();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    /**
     * Listen for window resize and call handleResize function
     */
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /**
     * Assign window width value to a windowWidth state.
     */
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme, windowWidth }}>
            <Provider themeColor={theme}>{children}</Provider>
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
