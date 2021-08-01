import { useState, useEffect } from 'react';

const lightTheme = 'light';
const darkTheme = 'dark';

/**
 * Function to get theme value from localStorage.
 * @return   {string}    Name of preferred theme
 */
const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme');
};

/**
 * Function to post to localStorage user preferred theme.
 * @param    {string} newTheme    Theme name to post
 */
const postThemeToLocalStorage = (newTheme) => {
    localStorage.setItem('theme', newTheme);
};

/**
 * Function to get user preferred theme based on their os/browser setttings.
 * @return   {string}    Name of preferred theme
 */
const getUserPreferredTheme = () => {
    const isUserPrefersDark =
        matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
    return isUserPrefersDark ? darkTheme : lightTheme;
};

/**
 * Custom hook to toggle themes. Initially, it sets the user's preferred theme
 * @return   {string}    Name of preferred theme.
 * @return   {function}    Function to toggle theme.
 */
const useThemeToggle = () => {
    const [theme, setTheme] = useState(
        () => getThemeFromLocalStorage() || getUserPreferredTheme()
    );

    /**
     * Call postThemeToLocalStorage function every time theme state has changed.
     */
    useEffect(() => {
        postThemeToLocalStorage(theme);
    }, [theme]);

    /**
     * Handle function to toggle between themes.
     */
    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return { theme, toggleTheme };
};

export default useThemeToggle;
