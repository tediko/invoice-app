import React, { useState, useEffect, useContext } from 'react';
import Provider from '../Provider/Provider';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value="">
            <Provider>{children}</Provider>
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
