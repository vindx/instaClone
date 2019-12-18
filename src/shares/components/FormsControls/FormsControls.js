import React from 'react';
import styles from './FormsControls.module.scss';

export const Input = ({ input, meta, ...props }) => {
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
          <div className={styles.inputStatus}>
            <span
              className={`${styles.unTouched}
              ${hasError && styles.onError}
              ${withoutErrors && styles.onAccept}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
