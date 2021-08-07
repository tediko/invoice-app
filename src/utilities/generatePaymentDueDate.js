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
    const paymentDue = new Date(createDate.getTime() + daysToMilliseconds);
    return paymentDue;
};

export default generatePaymentDueDate;
