/**
 * Function that converts a date to a formatted date.
 * (YYYY-MM-DD -> DD MonthName YYYY)
 * @param    {String}  date - Date to convert
 * @return {String} String with a formatted date.
 */
const dateToString = (date) => {
    const displayOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };
    const newDate = new Date(date).toLocaleString('en-GB', displayOptions);

    return newDate;
};

export default dateToString;
