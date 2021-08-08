/**
 * Function to convert string to date object. It is needed because our data is given like '2021-08-18' and
 * it can't be directly convert to date object with new Date() constructor. We convert it to '2021,08,18' instead
 * and then we create date instance.
 * Returns new date object.
 * @param    {object}  date - date string
 * @return  {object} New date object
 */
const convertStringToDateInstance = (date) => {
    return typeof date === 'object'
        ? date
        : new Date(date.replaceAll('-', ','));
};

/**
 * Function to generate payment due date based on terms and create date.
 * Function adds terms which is number of days to createDate date.
 * Returns new date object.
 * @param    {object}  createDate - Date object
 * @param    {number}  terms - Number of days to add
 * @return  {object} New date object
 */
const generatePaymentDueDate = (createDate, terms) => {
    // Convert terms to milliseconds.
    // terms(days) * hours in the day * minutes in hour * seconds in minute * milliseconds in second
    const daysToMilliseconds = parseInt(terms) * 24 * 60 * 60 * 1000;
    const paymentDue = new Date(
        convertStringToDateInstance(createDate).getTime() + daysToMilliseconds
    );
    return paymentDue;
};

export default generatePaymentDueDate;
