import { useEffect, useState, useRef } from 'react';

const initialFilterType = 'all';

const useFilter = (callback) => {
    const [filteredInvoices, setFilteredInvoices] = useState(callback.invoices);
    const [filterType, setFilterType] = useState(initialFilterType);
    const previousFilterType = useRef(initialFilterType);

    /**
     * Running an effect whenever callback changes and call handleFilter() with current type
     */
    useEffect(() => {
        handleFilter(filterType);
    }, [callback]);

    /**
     * Function to filter filteredInvoices based on filter type.
     * @param    {String}  string - String with filter type
     */
    const handleFilter = (type) => {
        if (type === initialFilterType) {
            setFilteredInvoices(callback.invoices);
            return false;
        }

        const newInvoices = callback.invoices.filter(
            (item) => item.status === type
        );
        setFilteredInvoices(newInvoices);
    };

    /**
     * Function to change filter type based on passed props.
     * Call handleFilter function to change filteredInvoices based on that filter type.
     * @param    {String}  event - String with filter type
     */
    const changeFilterType = (event) => {
        const type = event.target.value;

        if (previousFilterType.current === type) {
            previousFilterType.current = initialFilterType;
            handleFilter(initialFilterType);
            setFilterType(initialFilterType);
            return false;
        }

        previousFilterType.current = type;
        handleFilter(type);
        setFilterType(type);
    };

    return {
        filteredInvoices,
        filterType,
        changeFilterType,
    };
};

export default useFilter;
