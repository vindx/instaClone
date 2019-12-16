import React from 'react';
import { Link } from 'react-router-dom';

import styles from './redirects.module.scss';

const RedirectToLogIn = () => (
  <div className={styles.container}>
    <p className={styles.footer}>
      Have an account? <Link to="/login123">Log in</Link>
    </p>
  </div>
);

export default RedirectToLogIn;
