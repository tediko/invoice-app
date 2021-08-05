/**
 * Function to generate payment due date based on terms and create date.
 * Function adds terms which is number of days to createDate date.
 * Returns new date object.
 * @param    {object}  createDate - Date object
 * @param    {number}  terms - Number of days to add
 * @return  {object} New date object
 */
export const generatePaymentDueDate = (createDate, terms) => {
    const numTerms = parseInt(terms);
    const dateObj = new Date();
    const paymentDue = new Date(
        dateObj.setDate(createDate.getDate() + numTerms)
    );

    return paymentDue;
};
