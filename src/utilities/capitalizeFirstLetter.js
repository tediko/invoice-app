/**
 * Function that take string and return the same value but with
 * capitalized first letter.
 * @param    {String}  string - String to convert
 * @return {String} String with a capitalized first letter.
 */
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
