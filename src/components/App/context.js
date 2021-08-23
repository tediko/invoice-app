import React, { useState, useEffect, useContext } from 'react';
import Provider from '../shared/Provider/Provider';
import useThemeToggle from '../../hooks/useThemeToggle';
import useManageInvoices from '../../hooks/useManageInvoices';
import useFilter from '../../hooks/useFilter';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const { theme, toggleTheme } = useThemeToggle();
    const {
        state,
        invoice,
        senderAddress,
        clientAddress,
        items,
        handleInvoiceChange,
        handleItemsAdd,
        handleItemsRemove,
        handleSubmit,
        editInvoice,
        deleteInvoice,
        markInvoiceAsPaid,
        createInvoice,
        discard,
        toggleModal,
    } = useManageInvoices();
    const { filteredInvoices, filterType, changeFilterType } = useFilter(state);
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
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                windowWidth,
                state,
                invoice,
                senderAddress,
                clientAddress,
                items,
                handleInvoiceChange,
                handleItemsAdd,
                handleItemsRemove,
                handleSubmit,
                editInvoice,
                deleteInvoice,
                markInvoiceAsPaid,
                createInvoice,
                discard,
                toggleModal,
                filteredInvoices,
                filterType,
                changeFilterType,
            }}
        >
            <Provider themeColor={theme}>{children}</Provider>
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
