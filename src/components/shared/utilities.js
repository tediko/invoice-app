/**
 * Function that converts a number to a number with a
 * language-sensitive representation of this number.
 * @param    {Number}  number - Number to convert
 * @return {String} String with a language-sensitive number
 */
export const languageSensitiveNum = (num) => {
    const stringNumber = parseFloat(num);
    console.log(typeof stringNumber.toLocaleString('en'));
    return stringNumber.toLocaleString('en');
};

/**
 * Function that take string and return the same value but with
 * capitalized first letter.
 * @param    {String}  string - String to convert
 * @return {String} String with a capitalized first letter.
 */
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
