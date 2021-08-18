/**
 * Function to validate form. Iterate through each property of given object with user inputed values
 * and return errors if it doesn't meet criteria.
 * @param    {object} objectToValidate    Object with form inputs values
 * @param    {function} handleSetErrors    State handler
 * @return   {boolean}    Boolean value
 */
const formValidation = (objectToValidate, handleSetErrors) => {
    let errors = {};
    let messages = [];

    for (const propName in objectToValidate) {
        const propValue = objectToValidate[propName];

        // Skip one loop if propName is 'paymentDue'
        if (propName === 'paymentDue') continue;

        // If propName is 'clientEmail' validate propValue with emailValidation().
        // If the email is invalid add error. If the email is valid - skip one loop.
        if (propName === 'clientEmail') {
            if (!emailValidation(propValue)) {
                errors = { ...errors, [propName]: true };
                messages.push('- The email must be correct');
            }
            continue;
        }

        // If propValue is empty string add error.
        if (propValue === '') {
            errors = { ...errors, [propName]: true };
            messages.push('- All fields must be added');
        }

        // If propValue is an array check if array.length is equal to zero. If so add error. Else iterate over
        // every object in that array and for each object iterate through properties.
        // Check if property value is empty. If so add error else add error with value of false.
        if (Array.isArray(propValue)) {
            let arr = [];
            let obj = {};

            if (propValue.length === 0) {
                errors = { ...errors, items: true };
                messages.push('- An item must be added');
            } else {
                propValue.forEach((object) => {
                    for (let property in object) {
                        if (object[property] === '') {
                            obj = { ...obj, [property]: true };
                            messages.push('- All fields must be added');
                        } else {
                            obj = { ...obj, [property]: false };
                        }
                    }

                    // If obj have one or more keys push that object to array and then
                    // add error with propName assigned with value of arr.
                    if (Object.keys(obj).length != 0) {
                        arr.push(obj);
                        errors = { ...errors, [propName]: arr };
                    }
                });
            }
        }

        // Check if propValue is an object and if propValue isn't an array. Then iterate over each property in
        // propValue object and check if propValue[property] is equal to empty string. If so, add new error.
        if (typeof propValue === 'object' && !Array.isArray(propValue)) {
            for (let property in propValue) {
                if (propValue[property] === '') {
                    errors = {
                        ...errors,
                        [propName]: {
                            ...errors[propName],
                            [property]: true,
                        },
                    };
                    messages.push('- All fields must be added');
                }
            }
        }
    }

    // If there is no keys in errors object return true.
    // If 'items' is the only error in errors object check if 'items' is an array. If not, set error state and return false.
    // Else iterate through each obj in array and then iterate over each property for that object. Push to array value of that property.
    // If arr include value of true set state with errors and return false, else return true.
    // Else set errors state with errors object and unique messages array also return false.
    if (Object.keys(errors).length === 0) {
        return true;
    } else if (
        Object.keys(errors).length === 1 &&
        Object.keys(errors)[0] === 'items'
    ) {
        if (!Array.isArray(errors.items)) {
            handleSetErrors(errors, [...new Set(messages)]);
            return false;
        }
        let arr = [];
        errors.items.forEach((obj) => {
            for (let prop in obj) {
                arr.push(obj[prop]);
            }
        });
        if (arr.includes(true)) {
            handleSetErrors(errors, [...new Set(messages)]);
            return false;
        } else {
            return true;
        }
    } else {
        handleSetErrors(errors, [...new Set(messages)]);
        return false;
    }
};

/**
 * Function that check if our email is correct
 * @param    {String} email    String with email address
 * @return   {Boolean}         Returns true or false
 */
const emailValidation = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

export default formValidation;
