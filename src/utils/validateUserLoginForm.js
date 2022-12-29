export const validateUserLoginForm = (values) => {
        const errors = {};
        const { username, password } = values;

        if (!username) {
                errors.username = 'Required';
        } else if (username.length < 6 || username.length > 15) {
                errors.firstName = 'Must be 6-15 characters.';
        }

        if (!password) {
                errors.password = 'Required';
        } else if (password.length < 8) {
                errors.password = 'Must be 8 characters or more.';
        }
        return errors;
};
