import React from 'react';

import SignUpForm from '../forms/SignUpForm';
import RedirectToLogIn from '../redirects/RedirectToLogIn';
import styles from '../SignUp_LogIn.module.scss';

const SignUpView = props => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.headerText}>InstaClone</h1>
        <SignUpForm
          onSubmit={props.createAccount}
          authIsFetching={props.isFetching}
          authError={props.error}
        />
      </div>
      <RedirectToLogIn />
    </div>
  );
};

export default SignUpView;
