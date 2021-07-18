import React, { useState, useEffect, useContext } from 'react';
import Provider from '../Provider/Provider';
import useThemeToggle from './useThemeToggle';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const { theme, toggleTheme } = useThemeToggle();

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            <Provider themeColor={theme}>{children}</Provider>
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
