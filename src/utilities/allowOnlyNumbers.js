/**
 * Function that allows the user to enter only numbers. If the user enters something else,
 * typed character is cut off. If we only have one character and it is not a number, we return zero.
 * @param    {string}  value - string to convert
 * @return {string} String with a new number.
 */
const allowOnlyNumbers = (value) => {
    if (isNaN(Number(value))) {
        if (value.length <= 1) {
            return 0;
        } else {
            return value.slice(0, -1);
        }
    }
    return value;
};

export default allowOnlyNumbers;
