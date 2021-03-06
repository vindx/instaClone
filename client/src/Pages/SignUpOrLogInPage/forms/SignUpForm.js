import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { SignUpOrLogInFormsInput } from '../../../shares/components/FormsControls/FormsControls';
import {
  invalidEmail,
  notOnlyNumbers,
  passwordMinLengthCreator,
  required,
  userNameValidator,
} from '../../../utils/validators/validators';
import styles from './forms.module.scss';
import preloader from '../../../assets/images/whitePreloader.svg';

const passwordMinLength = passwordMinLengthCreator(6);

const SignUpForm = props => (
  <form className={styles.formContainer} onSubmit={props.handleSubmit}>
    <h5 className={styles.descriptionText}>Sign up to see photos and videos from your friends.</h5>
    <Field
      component={SignUpOrLogInFormsInput}
      label="Email"
      autoComplete="email"
      aria-required="true"
      name="email"
      type="text"
      validate={[required, invalidEmail]}
    />

    <Field
      component={SignUpOrLogInFormsInput}
      label="Full name"
      aria-required="false"
      name="fullName"
      type="text"
    />

    <Field
      component={SignUpOrLogInFormsInput}
      label="Username"
      aria-required="true"
      autoComplete="username"
      maxLength="30"
      name="userName"
      type="text"
      validate={[required, notOnlyNumbers, userNameValidator]}
    />

    <Field
      component={SignUpOrLogInFormsInput}
      label="Password"
      aria-required="true"
      autoComplete="new-password"
      name="password"
      type="password"
      validate={[required, passwordMinLength]}
    />

    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${props.invalid && styles.inActive}`}
        disabled={props.invalid || props.authIsFetching}
      >
        {props.authIsFetching ? (
          <img alt="" src={preloader} className={styles.preloader} />
        ) : (
          'Sign up'
        )}
      </button>
    </div>

    {props.error && <div className={styles.errorContainer}>{props.error}</div>}
  </form>
);

export default reduxForm({ form: 'signUpForm' })(SignUpForm);
