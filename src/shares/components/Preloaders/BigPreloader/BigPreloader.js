import React from 'react';

import { ReactComponent as Preloader } from '../../../../assets/images/blackPreloader.svg';
import styles from './BigPreloader.module.scss';

const BigPreloader = () => (
  <div className={styles.preloaderBackground}>
    <Preloader className={styles.preloader} />
  </div>
);

export default BigPreloader;
