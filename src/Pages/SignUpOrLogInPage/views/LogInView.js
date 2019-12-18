import React from 'react';

import LogInForm from '../forms/LogInForm';
import RedirectToSignUp from '../redirects/RedirectToSignUp';
import styles from '../SignUp_LogIn.module.scss';

const LogInView = props => (
  <div className={styles.mainContainer}>
    <div className={styles.container}>
      <h1 className={styles.headerText}>InstaClone</h1>
      <LogInForm onSubmit={props.logIn} authInfo={props.authInfo} />
    </div>
    <RedirectToSignUp />
  </div>
);

export default LogInView;
