import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => (
  <div className={styles.errorContainer}>
    <h2>Sorry, this page isn&#39;t available.</h2>
    <p>
      The link you followed may be broken, or the page may have been removed.
      <Link to="/"> Go back to InstaClone.</Link>
    </p>
  </div>
);

export default PageNotFound;
