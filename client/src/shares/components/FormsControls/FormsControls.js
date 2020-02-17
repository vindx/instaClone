import React from 'react';
import styles from './FormsControls.module.scss';

export const SignUpOrLogInFormsInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const withoutErrors = meta.touched && meta.dirty && meta.valid;
  return (
    <>
      <div className={styles.formElementWrapper}>
        <div className={styles.formElementContainer}>
          <label className={`${styles.labelContainer} ${meta.dirty && styles.notNull}`}>
            <span className={styles.nameOfInput}>{props.label}</span>
            <input className={styles.input} {...input} {...props} />
          </label>
          {(hasError || withoutErrors) && (
            <div className={styles.inputStatus}>
              <span
                className={`${styles.unTouched}
              ${hasError && styles.onError}
              ${withoutErrors && styles.onAccept}`}
              />
              {hasError && (
                <span className={`${styles.invisible} ${styles.visible}`}>{meta.error}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const CreatePostFormInput = ({ input, meta, ...props }) => {
  const hasError = meta.dirty && meta.error;
  return (
    <>
      <div className={styles.wrapper}>
        <label>
          {props.label}
          <input
            autoComplete="off"
            className={`${styles.newPostInput} ${hasError && styles.onError}`}
            {...input}
            {...props}
          />
        </label>
        {hasError && <span className={styles.errorMsg}>{meta.error}</span>}
      </div>
    </>
  );
};

export const CreatePostFormTextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <>
      <div className={styles.wrapper}>
        <label>
          {props.label}
          <textarea
            className={`${styles.newPostTextArea} ${hasError && styles.onError}`}
            {...input}
            {...props}
          />
        </label>
      </div>
    </>
  );
};
