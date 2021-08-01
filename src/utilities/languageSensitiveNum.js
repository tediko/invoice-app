/**
 * Function that converts a number to a number with a
 * language-sensitive representation of this number.
 * @param    {Number}  number - Number to convert
 * @return {String} String with a language-sensitive number
 */
const languageSensitiveNum = (number) => {
    const stringNumber = number.toString();
    let integerDigits = parseFloat(stringNumber.split('.')[0]);
    integerDigits = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
    });
    const decimalDigits = stringNumber.split('.')[1];

    if (decimalDigits != null && decimalDigits.length >= 2) {
        return `${integerDigits}.${decimalDigits}`;
    } else if (decimalDigits != null) {
        return `${integerDigits}.${decimalDigits}0`;
    } else {
        return `${integerDigits}.00`;
    }
};

export default languageSensitiveNum;
