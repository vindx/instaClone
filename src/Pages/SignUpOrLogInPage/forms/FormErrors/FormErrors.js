import React from 'react';

import styles from './FormErrors.module.scss';

const FormErrors = () => {
  const errors = {
    signUpErrors: {
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      userNameErrors: {
        rule: 'Username can only use letters, numbers, underscores and periods.',
        notNumbers: 'Your username cannot contain only numbers.',
        unAvailable: "This username isn't available. Please try another.",
      },
      passwordLengthError: 'Create a password at least 6 characters long.',
      somethingWrong: 'Sorry, something went wrong creating your account. Please try again soon.',
    },
    logInErrors: {
      userNameError:
        "The username you entered doesn't belong to an account. Please check your username and try again.",
      passwordError: 'Sorry, your password was incorrect. Please double-check your password.',
    },
  };
  return <div className={styles.errorContainer}>{errors.logInErrors.userNameError}</div>;
};

export default FormErrors;
