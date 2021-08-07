/**
 * Function to generate message about invoices amount.
 * @param {array} invoicesArr Array with items
 * @param {string} filterType Type of current filter
 * @param {number} windowWidth Number with window width
 * @return {string} Formatted string.
 */
const invoicesLengthMessage = (invoicesArr, filterType, windowWidth) => {
    const invoicesLength = invoicesArr.length;
    const isMobile = windowWidth <= 768;
    const type = filterType === 'all' ? 'total' : filterType;

    if (invoicesLength === 0) {
        return `No Invoices`;
    } else if (invoicesLength === 1) {
        if (isMobile) {
            return `1 ${type} invoice`;
        } else {
            return `There is 1 ${type} invoice`;
        }
    } else if (invoicesLength > 1) {
        if (isMobile) {
            return `${invoicesLength} ${type} invoices`;
        } else {
            return `There are ${invoicesLength} ${type} invoices`;
        }
    }
};

export default invoicesLengthMessage;
