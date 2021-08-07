/**
 * Function to generate a random ID.
 * Return string with two characters and four numbers.
 * (e.g. XX9999)
 * @return {string} String with ID.
 */
const generateID = () => {
    const idTemplate = ['X', 'X', '0', '0', '0', '0'];
    const alphabetLength = 26;
    const alphabetArr = Array.from(Array(alphabetLength)).map((_, index) =>
        String.fromCharCode(index + 65)
    );

    const uid = idTemplate.map((_, index) => {
        if (index < 2) {
            return alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
        } else {
            return Math.floor(Math.random() * 10);
        }
    });

    return uid.join('');
};

/**
 * Function that take array of objects that contains id property.
 * Then call generateID() and check if generated ID is unique.
 * If not - generate another ID. Returns unique ID.
 * @param    {array}  arr - Array to check
 * @return {string} String with a unique ID.
 */
const generateUniqueId = (arr) => {
    const allIdentificators = arr.map((item) => {
        return item.id;
    });

    while (true) {
        let id = generateID();

        if (!allIdentificators.includes(id)) {
            return id;
        }
    }
};

export default generateUniqueId;
