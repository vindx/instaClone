import React from 'react';

import FormErrors from './FormErrors/FormErrors';
import styles from './forms.module.scss';

const LogInForm = () => (
  <form className={styles.formContainer}>
    <div className={styles.formElementWrapper}>
      <div className={styles.formElementContainer}>
        <label className={`${styles.labelContainer}`}>
          <span className={styles.nameOfInput}>Username or email</span>
          <input
            aria-label="Username or email"
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="75"
            name="username"
            type="text"
            className={styles.input}
          />
        </label>
        <div className={styles.inputStatus}>
          <span className={`${styles.unTouched}`} />
        </div>
      </div>
    </div>

    <div className={styles.formElementWrapper}>
      <div className={styles.formElementContainer}>
        <label className={`${styles.labelContainer}`}>
          <span className={styles.nameOfInput}>Password</span>
          <input
            aria-label="Password"
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            name="password"
            type="password"
            className={styles.input}
          />
        </label>
        <div className={styles.inputStatus}>
          <span className={`${styles.unTouched}`} />
        </div>
      </div>
    </div>

    <div className={styles.buttonContainer}>
      <button className={styles.button} type="submit">
        Log In
      </button>
    </div>

    {/* <FormErrors /> */}
  </form>
);

export default LogInForm;
