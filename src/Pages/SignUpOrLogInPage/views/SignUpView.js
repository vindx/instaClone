import React from 'react';

import SignUpForm from '../forms/SignUpForm';
import RedirectToLogIn from '../redirects/RedirectToLogIn';
import styles from '../SignUp_LogIn.module.scss';

const SignUpView = props => (
  <div className={styles.mainContainer}>
    <div className={styles.container}>
      <h1 className={styles.headerText}>InstaClone</h1>
      <SignUpForm onSubmit={props.createNewAccount} authInfo={props.authInfo} />
    </div>
    <RedirectToLogIn />
  </div>
);

export default SignUpView;
