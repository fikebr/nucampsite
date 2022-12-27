export const validateContactForm = (values) => {
    const errors = {};
    const { firstName, lastName, phoneNum, email } = values;

    if (!firstName) {
        errors.firstName = 'Required';
    }
    else if (firstName.length < 2 || firstName.length > 15) {
        errors.firstName = 'Must be 2-15 characters.';
    }

    if (!lastName) {
        errors.lastName = 'Required';
    }
    else if (lastName.length < 2 || lastName.length > 15) {
        errors.lastName = 'Must be 2-15 characters.';
    }

    if (phoneNum && !/^\d+$/.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }
    
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    return errors;

};