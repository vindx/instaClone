import React from 'react';

import SignUpForm from '../forms/SignUpForm';
import RedirectToLogIn from '../redirects/RedirectToLogIn';
import styles from '../SignUp_LogIn.module.scss';

const SignUpView = () => (
  <div className={styles.mainContainer}>
    <div className={styles.container}>
      <h1 className={styles.headerText}>InstaClone</h1>
      <SignUpForm />
    </div>
    <RedirectToLogIn />
  </div>
);

export default SignUpView;
