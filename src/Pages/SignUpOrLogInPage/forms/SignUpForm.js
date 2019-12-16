import React from 'react';

import FormErrors from './FormErrors/FormErrors';
import styles from './forms.module.scss';

const SignUpForm = () => (
  <form className={styles.formContainer}>
    <h5 className={styles.descriptionText}>Sign up to see photos and videos from your friends.</h5>
    <div className={styles.formElementWrapper}>
      <div className={styles.formElementContainer}>
        <label className={`${styles.labelContainer}`}>
          <span className={styles.nameOfInput}>Email</span>
          <input
            aria-label="Email"
            aria-required="true"
            autoCapitalize="off"
            autoComplete="email"
            autoCorrect="off"
            name="email"
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
          <span className={styles.nameOfInput}>Full Name</span>
          <input
            aria-label="Full Name"
            aria-required="false"
            autoCapitalize="sentences"
            autoCorrect="off"
            name="fullName"
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
          <span className={styles.nameOfInput}>Username</span>
          <input
            aria-label="Username"
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="30"
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
            autoComplete="new-password"
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
        Sign up
      </button>
    </div>

    {/* <FormErrors/> */}
  </form>
);

export default SignUpForm;
