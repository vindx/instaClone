import React from 'react';
import { Link } from 'react-router-dom';

import styles from './redirects.module.scss';

const RedirectToSignUp = () => (
  <div className={styles.container}>
    <p className={styles.footer}>
      Don&#39;t have an account? <Link to="/accounts/signup">Sign up</Link>
    </p>
  </div>
);

export default RedirectToSignUp;
