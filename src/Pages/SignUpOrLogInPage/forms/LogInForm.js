import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { SignUpOrLogInFormsInput } from '../../../shares/components/FormsControls/FormsControls';
import {
  notOnlyNumbers,
  passwordMinLengthCreator,
  required,
} from '../../../utils/validators/validators';
import preloader from '../../../assets/images/whitePreloader.svg';
import styles from './forms.module.scss';

const passwordMinLength = passwordMinLengthCreator(6);

const LogInForm = props => (
  <form className={styles.formContainer} onSubmit={props.handleSubmit}>
    <Field
      component={SignUpOrLogInFormsInput}
      label="Username or email"
      maxLength="50"
      name="emailOrUserName"
      type="text"
      validate={[required, notOnlyNumbers]}
    />
    <Field
      component={SignUpOrLogInFormsInput}
      autoComplete="password"
      label="Password"
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
          'Log In'
        )}
      </button>
    </div>

    {props.error && <div className={styles.errorContainer}>{props.error}</div>}
  </form>
);

export default reduxForm({ form: 'logInForm' })(LogInForm);
